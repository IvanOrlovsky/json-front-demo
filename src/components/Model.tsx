"use client";

import { useDataObject } from "@/SDUI/dataObjectContext/dataObjectContext";
import { useEffect } from "react";

export default function Model() {
	const { data, updateData } = useDataObject();
	useEffect(() => {
		updateData((prev) => ({ ...prev, model: "", modelID: "" }));
	}, []);

	return (
		<input
			placeholder="Модель"
			className="p-4 border-1 rounded-md "
			onChange={(e) => {
				updateData((prev) => ({ ...prev, model: e.target.value }));
			}}
			disabled={data.make === undefined || data.make === ""}
			value={data.model}
		></input>
	);
}
