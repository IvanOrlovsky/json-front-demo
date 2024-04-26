"use client";

import React, { useEffect, useState } from "react";
import { JSONDescription } from "./types/JSONDescription";
import { renderComponent } from "./utils/renderComponent";
import { useRenderComponent } from "./hooks/useRenderComponent";

export default function Renderer({
	description,
}: {
	description: JSONDescription;
}) {
	const { components } = description;
	const [renderedComponents, setRenderedComponents] = useState<any[]>([]);

	const renderAllComponents = async () => {
		try {
			const rendered = await Promise.all(
				components.map((component) => component.componentName)
			);
			setRenderedComponents(rendered);
		} catch (err: any) {
			console.error("Ошибка при загрузке компонентов:", err);
			// Обработка ошибки, если необходимо
			setRenderedComponents([
				<div key="error">
					<h1>{err.message}</h1>
				</div>,
			]);
		}
	};

	useEffect(() => {
		renderAllComponents();
	}, [components]);

	return (
		<div>
			{renderedComponents.map((componentName, index) => (
				<RenderedComponent key={index} componentName={componentName} />
			))}
		</div>
	);
}

function RenderedComponent({ componentName }: { componentName: string }) {
	const component = useRenderComponent(componentName);
	return <div>{component}</div>;
}
