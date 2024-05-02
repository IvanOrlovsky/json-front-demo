"use client";

import { useDataObjectUpdatetion } from "@/SDUI/hooks/useDataObjectUpdatetion";

export default function Make({ id }: { id: string }) {
	const { data, handleOnChange } = useDataObjectUpdatetion(id, { make: "" });

	return (
		<input
			placeholder="Марка"
			id={id}
			name={id}
			value={data.make}
			className="p-4 border-1 rounded-md "
			onChange={handleOnChange}
		></input>
	);
}
