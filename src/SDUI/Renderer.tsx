"use client";

import React, { useEffect, useState, useRef } from "react";
import isEqual from "react-fast-compare";
import { Component, JSONDescription } from "./types/JSONDescription";
import { useRenderComponent } from "./hooks/useRenderComponent";

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
			console.log("Renderer: All components rerendered");
			prevComponentsRef.current = components;
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
	const component = useRenderComponent(name, id);
	console.log(`Renderer: Rendered component with id = ${id}`);
	return component;
}
