"use client";

import { useDataObject } from "@/SDUI/contexts/dataObjectContext";
import { useEffect } from "react";

export default function Model() {
	const { data, updateData } = useDataObject();
	useEffect(() => {
		updateData((prev) => ({
			...prev,
			model: "",
			modelID: "",
		}));

		const cleanup = () => {
			updateData((prev) => {
				const { model, modelID, ...rest } = prev;
				return rest;
			});
		};

		return cleanup;
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
