import React from "react";
import AutoCard from "../data-display/AutoCard";
import InsuranseCard from "../data-display/InsuranseCard";
import FormBlock from "../FormBlock";
import { ComponentData } from "@/types/SDUI/ComponentData";
import Accordion from "../data-display/Accordion";
import RisksCard from "../data-display/RisksCard";
import PersonalDataCard from "../data-display/PersonalDataCard";
import NavChip from "../data-display/NavChip";

// Общий тип JSON данных
interface JsonData {
	components: ComponentData[];
}

// Компонент слоя
const Layer: React.FC<{
	layout: "vertical" | "horizontal";
	components: ComponentData[];
}> = ({ layout, components }) => {
	let result;

	try {
		result = components.map((componentData, index) => (
			<ComponentRenderer key={index} componentData={componentData} />
		));
	} catch (error: any) {
		return (
			<div className="text-4xl text-red-200 bg-red-600">
				Ошибка рендера слоя: {error?.message}
			</div>
		);
	}
	return (
		<div
			style={{
				display: "flex",
				flexDirection: layout === "vertical" ? "column" : "row",
			}}
		>
			{result}
		</div>
	);
};

// Компонент отрисовки компонентов
const ComponentRenderer: React.FC<{ componentData: ComponentData }> = ({
	componentData,
}) => {
	switch (componentData.type) {
		case "NavChip":
			return <NavChip {...componentData.navChipProps} />;
		case "PersonalDataCard":
			return (
				<PersonalDataCard personalData={componentData.personalData} />
			);
		case "RisksCard":
			return <RisksCard risksData={componentData.risksData} />;
		case "Accordion":
			return (
				<Accordion title={componentData.title}>
					{componentData.children.map((componentData, index) => (
						<ComponentRenderer
							key={index}
							componentData={componentData}
						/>
					))}
				</Accordion>
			);
		case "FormBlock":
			return (
				<FormBlock
					title={componentData.title}
					hasSubmitBtn={componentData.hasSubmitBtn}
					submitBtnLabel={componentData.submitBtnLabel}
					forForm={componentData.forForm}
				>
					{componentData.children.map((componentData, index) => (
						<ComponentRenderer
							key={index}
							componentData={componentData}
						/>
					))}
				</FormBlock>
			);
		case "InsuranseCard":
			return <InsuranseCard paramsData={componentData.paramsData} />;
		case "AutoCard":
			return <AutoCard autoData={componentData.autoData} />;
		case "Layer":
			return <Layer {...componentData.props} />;
		default:
			return (
				<div className="text-4xl text-red-200 bg-red-600">
					Неизвестный тип компонента
				</div>
			);
	}
};

// Компонент страницы
const Page: React.FC<{ jsonData: JsonData }> = ({ jsonData }) => {
	let result;
	try {
		result = (
			<div>
				{jsonData.components.map((componentData, index) => (
					<ComponentRenderer
						key={index}
						componentData={componentData}
					/>
				))}
			</div>
		);
	} catch (error: any) {
		return (
			<div className="text-4xl text-red-200 bg-red-600">
				{error?.message as string}
			</div>
		);
	}

	return result;
};

export default Page;
