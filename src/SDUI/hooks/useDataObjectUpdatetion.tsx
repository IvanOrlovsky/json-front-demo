import { useEffect } from "react";
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

		const cleanup = () => {
			updateData((prev) => {
				const cleanedData = { ...prev };

				delete cleanedData[id];

				return cleanedData;
			});
		};

		return cleanup;
	}, []);
}
