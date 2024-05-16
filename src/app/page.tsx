"use client";

import { useState } from "react";
import Screen from "@/SDUI/Screen";
import { useDataObject } from "@/SDUI/contexts/dataObjectContext";

export default function Home() {
	const [jsonData, setJsonData] = useState(
		JSON.stringify(
			{
				components: [
					{
						name: "FormBlock",
						props: {
							id: "autoForm",
							title: "Автомобиль",
						},
						children: [
							{
								name: "Make",
								props: { id: "make1", event: "onChange" },
							},
							{
								name: "Model",
								props: { id: "model1", event: "onBlur" },
							},
						],
					},
					{
						name: "GAP",
						props: { id: "gap1" },
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
				<div className="p-10  border-4 border-black text-3xl font-mono rounded-lg overflow-scroll">
					<Screen description={JSON.parse(jsonData)}></Screen>
				</div>
			</div>
		</main>
	);
}
