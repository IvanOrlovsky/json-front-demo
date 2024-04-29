"use client";

import { useDataObjectUpdatetion } from "@/SDUI/hooks/useDataObjectUpdatetion";
import { useComponentContext } from "@/SDUI/contexts/componentContext";
import { useDataObject } from "@/SDUI/contexts/dataObjectContext";

export default function Make() {
	const { info, updateInfo } = useComponentContext();
	const { updateData } = useDataObject();

	useDataObjectUpdatetion(info.id, { make: info.value });

	return (
		<input
			placeholder="Марка"
			className="p-4 border-1 rounded-md "
			onChange={(e) => {
				updateInfo({ id: info.id, value: e.target.value });
			}}
			id={info.id}
			name={info.id}
		></input>
	);
}
