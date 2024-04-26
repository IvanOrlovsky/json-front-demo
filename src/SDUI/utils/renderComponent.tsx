"use client";

import ErrorComponent from "./ErrorComponent";
import { importComponent } from "./importComponent";
import { useState, useEffect } from "react";

export function renderComponent(componentName: string) {
	const [component, setComponent] = useState<any>();

	useEffect(() => {
		const getComponent = async () => {
			try {
				const result = await importComponent(componentName); // Ждем загрузки компонента
				setComponent(result); // Устанавливаем загруженный компонент
			} catch (error: any) {
				console.error(
					`Ошибка при загрузке компонента "${componentName}":`,
					error
				);
				setComponent(
					<ErrorComponent
						componentName={componentName}
						errorMessage={error.message}
					/>
				);
			}
		};

		getComponent(); // Вызываем функцию для загрузки компонента
	}, [componentName]);

	return component;
}
