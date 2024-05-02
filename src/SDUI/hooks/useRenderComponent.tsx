import ErrorComponent from "../utils/ErrorComponent";
import { importComponent } from "../utils/importComponent";
import { useState, useEffect } from "react";

export function useRenderComponent(componentName: string, id: string) {
	const [component, setComponent] = useState<any>();

	

	useEffect(() => {
		const getComponent = async () => {
			try {
				const result = await importComponent(componentName, id);
				setComponent(result);
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

		getComponent();
	}, [componentName]);

	return component;
}
