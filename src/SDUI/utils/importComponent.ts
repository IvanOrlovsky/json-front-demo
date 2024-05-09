import React from "react";

export const importComponent = async (
	componentName: string,
	props: Record<string, any>
) => {
	try {
		const componentModule = await import(`@/components/${componentName}`);

		if (componentModule.default) {
			return React.createElement(componentModule.default, props);
		} else {
			throw new Error(
				`Компонент "${componentName}" не экспортирует дефолтный экспорт.`
			);
		}
	} catch (error) {
		console.error(
			`Ошибка при импорте компонента "${componentName}":`,
			error
		);
		return null;
	}
};
