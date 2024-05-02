"use client";

import React, { useEffect, useState, useRef } from "react";
import isEqual from "react-fast-compare";
import { Component, JSONDescription } from "./types/JSONDescription";
import { useRenderComponent } from "./hooks/useRenderComponent";
import ComponentContextProvider from "./contexts/componentContext";

export default function Renderer({
	description,
}: {
	description: JSONDescription;
}) {
	const { components } = description;
	const [renderedComponents, setRenderedComponents] = useState<
		Component[] | React.ReactNode
	>([]);

	const prevComponentsRef = useRef(components);

	const renderAllComponents = async () => {
		try {
			const rendered = await Promise.all(
				components.map((component) => component)
			);
			setRenderedComponents(rendered);
		} catch (err: any) {
			console.error("Ошибка при загрузке компонентов:", err);
		}
	};

	useEffect(() => {
		renderAllComponents();
	}, []);

	useEffect(() => {
		if (!isEqual(prevComponentsRef.current, components)) {
			renderAllComponents();
			console.log("renderAllComponents from Renderer");
		}
	}, [components]);

	return (
		<div>
			{(renderedComponents as Component[]).map((component, index) => (
				<RenderedComponent
					key={index}
					name={component.name}
					id={component.id}
				/>
			))}
		</div>
	);
}

function RenderedComponent({ id, name }: Component) {
	const component = useRenderComponent(name);
	return (
		<ComponentContextProvider id={id}>{component}</ComponentContextProvider>
	);
}
