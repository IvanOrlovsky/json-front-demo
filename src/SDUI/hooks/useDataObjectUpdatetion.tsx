import { useEffect } from "react";
import { useDataObject } from "../contexts/dataObjectContext";
export function useDataObjectUpdatetion(
	id: string,
	value: Record<string, any>
) {
	const { data, updateData } = useDataObject();

	useEffect(() => {
		updateData((prev) => ({
			...prev,
			[id]: value,
		}));
	}, []);

	useEffect(() => {
		return () => {
			updateData((prev) => {
				const cleanedData = { ...prev };
				delete cleanedData[id];
				return cleanedData;
			});
		};
	}, []);

	const handleOnChange = (newValue: Record<string, any>) => {
		updateData((prev) => ({
			...prev,
			[id]: newValue,
		}));
	};

	return { data, handleOnChange };
}
