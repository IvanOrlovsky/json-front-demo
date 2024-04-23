"use client";

import { useState } from "react";

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
		<main className="w-screen h-screen flex flex-row gap-4 m-10">
			<div className="w-1/2">
				{error && <div style={{ color: "red" }}>{error}</div>}
				<textarea
					defaultValue={jsonData}
					onChange={handleJsonChange}
					className="p-10 w-full h-full border-4 border-black text-3xl font-mono"
				/>
			</div>
			<div className="w-1/2">qwe</div>
		</main>
	);
}
