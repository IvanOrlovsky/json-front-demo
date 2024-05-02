import { ChangeEvent, useEffect } from "react";
import { useDataObject } from "../contexts/dataObjectContext";

export function useDataObjectUpdatetion(
	id: string,
	value: Record<string, any> | string
) {
	const { updateData } = useDataObject();

	useEffect(() => {
		updateData((prev) => ({
			...prev,
			[id]: value,
		}));

		return () => {
			updateData((prev) => {
				const cleanedData = { ...prev };
				delete cleanedData[id];
				return cleanedData;
			});
		};
	}, []);

	const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
		const newValue = e.target.value;
		updateData((prev) => ({
			...prev,
			[id]: { make: newValue },
		}));
	};

	return { handleOnChange };
}
