"use client";

import { useDataObjectUpdatetion } from "@/SDUI/hooks/useDataObjectUpdatetion";
import { useEffect } from "react";

export default function Make({ id }: { id: string }) {
	const { handleOnChange } = useDataObjectUpdatetion(id, { make: "" });

	useEffect(() => {
		console.log(`НОВЫЙ АЙДИ ${id}`);
	}, []);

	return (
		<input
			placeholder="Марка"
			id={id}
			name={id}
			className="p-4 border-1 rounded-md "
			onChange={handleOnChange}
		></input>
	);
}
