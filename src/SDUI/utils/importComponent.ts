import React from "react";

export const importComponent = async (componentName: string, id: string) => {
	try {
		const componentModule = await import(`@/components/${componentName}`);

		if (componentModule.default) {
			console.log(
				typeof React.createElement(componentModule.default, { id: id })
			);
			return React.createElement(componentModule.default, { id: id });
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
