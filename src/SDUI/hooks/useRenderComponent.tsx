import { useState, useEffect } from "react";
import { componentMap } from "../Map/ComponentMap";

export function useRenderComponent(componentName: string): React.FC | null {
	const [Component, setComponent] = useState<React.FC | null>(null);

	useEffect(() => {
		try {
			const Component = componentMap[componentName];
			if (Component) {
				setComponent(() => Component);
			} else {
				throw new Error(
					`Компонент "${componentName}" не найден в словаре.`
				);
			}
		} catch (error: any) {
			console.error(
				`Ошибка при загрузке компонента "${componentName}":`,
				error
			);
			setComponent(null);
		}
	}, [componentName]);

	return Component;
}
