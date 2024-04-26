import React from "react";

export const importComponent = async (componentName: string) => {
	try {
		const componentModule = await import(`@/components/${componentName}`);
		// Проверяем, есть ли у модуля экспорт по умолчанию (React-компонент)
		if (componentModule.default) {
			return React.createElement(componentModule.default);
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
