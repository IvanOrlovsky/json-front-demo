import React, { useEffect } from "react";
import { cn } from "@/lib/utils/cn";
import { useDataObject } from "@/SDUI/contexts/dataObjectContext";

// Интерфейс для свойств компонента Button
interface ButtonProps {
	id: string;
	text: string;
	type?: "button" | "submit" | "reset"; // Опциональное свойство с типом
	forForm?: string;
	className?: string;
}

// Значения по умолчанию для опциональных свойств
const defaultProps: Partial<ButtonProps> = {
	text: "Кнопка",
	type: "button" as "button",
};

export default function Button(props: ButtonProps) {
	// Использование значений по умолчанию
	const { id, text, type, forForm, className } = {
		...defaultProps,
		...props,
	};

	if (!id) {
		return (
			<h1 className="text-red-600 bg-red-100 p-4">Не указан id кнопки</h1>
		);
	}

	const { updateData } = useDataObject();

	useEffect(() => {
		updateData((prev) => ({
			...prev,
			[id]: { state: "not-touched" },
		}));
	}, []);

	useEffect(() => {
		return () => {
			updateData((prev) => {
				const cleanedData = { ...prev };
				delete cleanedData[id];
				return cleanedData;
			});
		};
	}, []);

	return (
		<button
			id={id}
			form={forForm}
			type={type}
			className={cn(
				"hover:bg-[#0e81bb] active:bg-[#0a5880] bg-[#1698D9] rounded-2xl py-[15px] text-white font-semibold text-lg w-full",
				className
			)}
			onClick={() =>
				updateData((prev) => ({
					...prev,
					[id]: { state: "clicked" },
				}))
			}
			onFocus={() =>
				updateData((prev) => ({
					...prev,
					[id]: { state: "focused" },
				}))
			}
			onBlur={() =>
				updateData((prev) => ({
					...prev,
					[id]: { state: "unfocused" },
				}))
			}
			onDoubleClick={() =>
				updateData((prev) => ({
					...prev,
					[id]: { state: "double-clicked" },
				}))
			}
		>
			{text}
		</button>
	);
}
