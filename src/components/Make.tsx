"use client";

import { useDataObjectUpdatetion } from "@/SDUI/hooks/useDataObjectUpdatetion";
import { useComponentContext } from "@/SDUI/contexts/componentContext";
import { useDataObject } from "@/SDUI/contexts/dataObjectContext";
import { ChangeEvent, useEffect } from "react";

export default function Make() {
	const { info, updateInfo } = useComponentContext();

	const { updateData } = useDataObject();

	useEffect(() => {
		updateData((prev) => ({
			...prev,
			[info.id]: { make: info.value },
		}));	
	}, [info.value]);

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const newValue = e.target.value;
		updateInfo({ id: info.id, value: newValue });
	};

	return (
		<input
			placeholder="Марка"
			className="p-4 border-1 rounded-md "
			onChange={handleInputChange}
			id={info.id}
			name={info.id}
		></input>
	);
}
