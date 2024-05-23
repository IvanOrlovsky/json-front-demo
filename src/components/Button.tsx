import { cn } from "@/lib/utils/cn";
import { useDataObject } from "@/SDUI/contexts/dataObjectContext";
import { useEffect } from "react";

export default function Button(props: Record<string, any>) {
	const { id, text, type } = props;
	const { updateData } = useDataObject();

	useEffect(() => {
		updateData((prev) => ({
			...prev,
			[id]: { state: "not-touched" },
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

	return (
		<button
			id={id}
			form={props?.forForm}
			type={type}
			className={cn(
				" hover:bg-[#0e81bb] active:bg-[#0a5880] bg-[#1698D9] rounded-2xl py-[15px] text-white font-semibold text-lg w-full",
				props?.className
			)}
			onClick={() =>
				updateData((prev) => ({
					...prev,
					[id]: { state: "cliked" },
				}))
			}
			onFocus={() =>
				updateData((prev) => ({
					...prev,
					[id]: { state: "focused" },
				}))
			}
			onBlur={() =>
				updateData((prev) => ({
					...prev,
					[id]: { state: "unfocused" },
				}))
			}
			onDoubleClick={() =>
				updateData((prev) => ({
					...prev,
					[id]: { state: "double-cliked" },
				}))
			}
		>
			{text}
		</button>
	);
}
