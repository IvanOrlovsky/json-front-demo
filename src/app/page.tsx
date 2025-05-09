"use client";

import { useState } from "react";
import Screen from "@/SDUI/Screen";
import { useDataObject } from "@/SDUI/contexts/dataObjectContext";

export default function Home() {
	const [jsonData, setJsonData] = useState(
		JSON.stringify(
			{
				components: [
					{ name: "Header", props: { id: "kasko_header" } },
					{
						name: "Title",
						props: {
							id: "process_title",
							text: "Каско",
						},
					},
					{
						name: "NavChips",
						props: {
							id: "process_Navigation",
							active: "3",
						},
					},
					{
						name: "FormBlock",
						props: {
							id: "risksForm",
							title: "Страховые риски",
						},
						children: [
							{
								name: "Crime",
								props: {},
							},
							{
								name: "GAP",
								props: { id: "gap1" },
							},
						],
					},
					{
						name: "FormBlock",
						props: {
							id: "serviceForm",
							title: "Сервисные опции",
						},
						children: [
							{
								name: "Evacuation",
								props: { id: "evacuation" },
							},
							{
								name: "Commisar",
								props: {
									id: "commisar",
									title: "Это заголовок для демо, его можно стереть из входного json",
								},
							},
							{
								name: "TechHelp",
								props: { id: "techHelp" },
							},
						],
					},
					{
						name: "FormBlock",
						props: {
							id: "extraForm",
							title: "Дополнительные опции",
						},
						children: [
							{
								name: "Accident",
								props: { id: "accident", checked: "true" },
							},
							{
								name: "Button",
								props: {
									id: "risks_next_btn",
									text: "Продолжить",
									type: "button",
								},
							},
						],
					},
				],
			},
			null,
			2
		)
	);
	const [error, setError] = useState("");

	const { data, updateData } = useDataObject();

	const handleJsonChange = (event: { target: { value: any } }) => {
		const value = event.target.value;
		try {
			JSON.parse(value);
			setJsonData(value);
			setError("");
		} catch (err) {
			setError("Неверный формат json");
		}
	};

	return (
		<main className="flex flex-col sm:flex-row gap-4 p-10 ">
			<div className="sm:w-1/2 w-full">
				<div className=" flex flex-col">
					<div className="mb-2 font-semibold text-center text-sm sm:text-4xl font-mono">
						Входной JSON
					</div>
					{error && <div style={{ color: "red" }}>{error}</div>}
				</div>
				<textarea
					id="jsonEditor"
					defaultValue={jsonData}
					onChange={handleJsonChange}
					className="p-10 w-full h-3/4 border-4 border-black text-xl font-mono rounded-lg"
				/>
				<div className="mt-2 flex flex-col gap-4">
					<div className="mb-2 font-semibold text-center text-sm sm:text-4xl font-mono">
						Текущий Дата-Объект
					</div>
				</div>
				<textarea
					value={JSON.stringify(data, null, 2)}
					onChange={(e) => {
						try {
							const res = JSON.parse(e.target.value);
							updateData(() => res);
							setError("");
						} catch (e) {
							setError("Неверный формат json для Дата-Объекта");
						}
					}}
					className="p-10 w-full h-3/4 border-4 border-black text-xl font-mono rounded-lg"
				></textarea>
			</div>
			<div className="sm:w-1/2 w-full">
				<div className="mb-2 font-semibold	text-center text-sm sm:text-4xl font-mono">
					Сгенерированный экран
				</div>
				<div className="relative p-10  border-4 border-black text-3xl font-mono rounded-lg overflow-scroll  bg-[#F1F2F6] pb-20">
					<Screen description={JSON.parse(jsonData)}></Screen>
				</div>
			</div>
		</main>
	);
}
