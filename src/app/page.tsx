"use client";

import { useEffect, useState } from "react";
import Screen from "@/SDUI/Screen";

import { useDataObject } from "@/SDUI/contexts/dataObjectContext";
import DataObjectProvider from "@/SDUI/contexts/dataObjectContext";

export default function Home() {
	const [jsonData, setJsonData] = useState(
		JSON.stringify({ components: [{ id: "1", name: "Make" }] })
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

	const handleUpdateData = () => {
		if (data.make !== undefined) {
			updateData((prev) => ({
				...prev,
				make: "УАЗ",
				makeID: "1",
			}));
		}
		if (data.model !== undefined) {
			updateData((prev) => ({
				...prev,
				model: "Патриот",
				modelID: "2",
			}));
			console.log(Object.keys(data));
		}
	};

	useEffect(() => {
		console.log(data); // Выводим обновленные данные
	}, [data]);

	function parseJSON(jsonData: string) {
		try {
			return JSON.parse(jsonData);
		} catch (error) {
			return {};
		}
	}

	return (
		<main className="w-screen h-screen flex flex-col sm:flex-row gap-4 p-10 ">
			<div className="h-1/2 sm:w-1/2 ">
				<div className="h-1/4 mb-10 flex flex-col">
					<div className="h-1/4  mb-10 font-semibold text-center text-sm sm:text-4xl font-mono">
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
				<div className="h-1/4 mt-2 flex flex-col gap-4">
					<div className="h-1/4  mb-2 font-semibold text-center text-sm sm:text-4xl font-mono">
						Текущий Дата-Объект
					</div>
					<button
						onClick={() => handleUpdateData()}
						className="p-2 rounded-sm text-md bg-blue-400 font-semibold hover:bg-blue-700"
					>
						Заполнить дата-объект данными
					</button>
				</div>
				<textarea
					value={JSON.stringify(data, null, 2)}
					disabled
					className="p-10 w-full h-3/4 border-4 border-black text-xl font-mono rounded-lg"
				></textarea>
			</div>
			<div className="h-1/2 sm:w-1/2">
				<div className="h-1/4  mb-10 font-semibold	 text-center text-sm sm:text-4xl font-mono">
					Сгенерированный экран
				</div>
				<div className="p-10 w-full h-full border-4 border-black text-3xl font-mono rounded-lg overflow-scroll">
					<Screen description={JSON.parse(jsonData)}></Screen>
				</div>
			</div>
		</main>
	);
}
