import { useEffect } from "react";
import { useDataObject } from "../contexts/dataObjectContext";
export function useDataObjectUpdatetion(
	id: string,
	value: {
		[key: string]: any;
	},
	event?: string
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

	const key = Object.keys(value)[0];

	const update = (e: any) => {
		updateData((prev) => ({
			...prev,
			[id]: { [key]: e.target.value },
		}));
	};

	if (event && event === "onBlur") {
		const register = { onBlur: update };
		return { data, register };
	}

	const register = {
		onChange: update,
		value: data[id]?.[key] || "",
	};
	return { data, register };
}
