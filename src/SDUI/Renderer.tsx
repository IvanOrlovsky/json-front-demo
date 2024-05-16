import React, { useEffect, useState, useRef } from "react";
import isEqual from "react-fast-compare";
import {
	Component as ComponentType,
	JSONDescription,
} from "./types/JSONDescription";
import { useRenderComponent } from "./hooks/useRenderComponent";

export default function Renderer({
	description,
}: {
	description: JSONDescription;
}) {
	const { components } = description;
	const [renderedComponents, setRenderedComponents] = useState<
		ComponentType[]
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
			prevComponentsRef.current = components;
		}
	}, [components]);

	return (
		<div>
			{renderedComponents.map((component, index) => (
				<RenderedComponent key={index} {...component} />
			))}
		</div>
	);
}

function RenderedComponent({ props, name, children }: ComponentType) {
	const Component = useRenderComponent(name);
	if (!Component) {
		return <div>Компонент {name} не найден</div>;
	}
	return (
		<Component {...props}>
			{children &&
				children.map((childComponent, index) => (
					<RenderedComponent key={index} {...childComponent} />
				))}
		</Component>
	);
}
