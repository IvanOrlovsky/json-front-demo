"use client";

import { useDataObjectUpdatetion } from "@/SDUI/hooks/useDataObjectUpdatetion";
import { useDataObject } from "@/SDUI/contexts/dataObjectContext";
import { ChangeEvent, useEffect } from "react";

export default function Make({ id }: { id: string }) {
	const { updateData } = useDataObject();

	useEffect(() => {
		updateData((prev) => ({
			...prev,
			[id]: { make: "" },
		}));

		return () => {
			updateData((prev) => {
				const cleanedData = { ...prev };
				delete cleanedData[id];
				return cleanedData;
			});
		};
	}, []);

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const newValue = e.target.value;
		updateData((prev) => ({
			...prev,
			[id]: { make: newValue },
		}));
	};

	return (
		<input
			placeholder="Марка"
			id={id}
			className="p-4 border-1 rounded-md "
			onChange={handleInputChange}
		></input>
	);
}
