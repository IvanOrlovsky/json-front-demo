"use client";

import { useState } from "react";
import Page from "@/components/SDUI/Page";

export default function Home() {
	const [jsonData, setJsonData] = useState("{}");
	const [error, setError] = useState("");

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
		<main className="w-screen h-screen flex flex-row gap-4 p-10">
			<div className="w-1/2">
				<h1 className="text-center text-4xl font-mono mb-4">
					Входной JSON
				</h1>
				{error && <div style={{ color: "red" }}>{error}</div>}
				<textarea
					defaultValue={jsonData}
					onChange={handleJsonChange}
					className="p-10 w-full h-full border-4 border-black text-xl font-mono rounded-lg"
				/>
			</div>
			<div className="w-1/2">
				<h1 className="text-center text-4xl font-mono mb-4">
					Сгенерированный экран
				</h1>
				<div className="p-10 w-full h-full border-4 border-black text-3xl font-mono rounded-lg">
					<Page jsonData={JSON.parse(jsonData)}></Page>
				</div>
			</div>
		</main>
	);
}
