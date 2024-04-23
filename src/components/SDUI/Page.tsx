import React from "react";

// Интерфейсы для компонентов
interface HeaderProps {
	title: string;
	color: string;
}

interface ParagraphProps {
	text: string;
}

interface ImageProps {
	src: string;
	alt: string;
}

interface LayerProps {
	layout: "vertical" | "horizontal";
	components: ComponentData[];
}

// Тип данных компонента
type ComponentData =
	| { type: "Header"; props: HeaderProps }
	| { type: "Paragraph"; props: ParagraphProps }
	| { type: "Image"; props: ImageProps }
	| { type: "Layer"; props: LayerProps };

// Общий тип JSON данных
interface JsonData {
	components: ComponentData[];
}

// Компонент заголовка
const Header: React.FC<HeaderProps> = ({ title, color }) => (
	<h1 style={{ color }}>{title}</h1>
);

// Компонент параграфа
const Paragraph: React.FC<ParagraphProps> = ({ text }) => <p>{text}</p>;

// Компонент изображения
const Image: React.FC<ImageProps> = ({ src, alt }) => (
	<img src={src} alt={alt} />
);

// Компонент слоя
const Layer: React.FC<LayerProps> = ({ layout, components }) => {
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
		case "Header":
			return <Header {...componentData.props} />;
		case "Paragraph":
			return <Paragraph {...componentData.props} />;
		case "Image":
			return <Image {...componentData.props} />;
		case "Layer":
			return <Layer {...componentData.props} />;
		default:
			return null;
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
