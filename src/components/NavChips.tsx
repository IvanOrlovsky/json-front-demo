import { useEffect } from "react";
import NavChip from "./NavChip";
import { useDataObject } from "@/SDUI/contexts/dataObjectContext";

export default function NavChips(props: Record<string, any>) {
	const { id, active } = props;

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
		<div
			id={id}
			className="flex flex-wrap flex-row w-full mx-[16px] gap-1 flex-shrink-0"
		>
			<NavChip
				letterInCircle="1"
				label="Авто"
				active={active == 1}
				onClick={() =>
					updateData((prev) => ({
						...prev,
						[id]: { state: "Selected step 1" },
					}))
				}
			/>
			<NavChip
				letterInCircle="2"
				label="Параметры"
				active={active == 2}
				onClick={() =>
					updateData((prev) => ({
						...prev,
						[id]: { state: "Selected step 2" },
					}))
				}
			/>
			<NavChip
				letterInCircle="3"
				label="Риски"
				active={active == 3}
				onClick={() =>
					updateData((prev) => ({
						...prev,
						[id]: { state: "Selected step 3" },
					}))
				}
			/>
			<NavChip
				letterInCircle="4"
				label="Персональные данные"
				active={active == 4}
				onClick={() =>
					updateData((prev) => ({
						...prev,
						[id]: { state: "Selected step 4" },
					}))
				}
			/>
			<NavChip
				letterInCircle="5"
				label="Оплата"
				active={active == 5}
				onClick={() =>
					updateData((prev) => ({
						...prev,
						[id]: { state: "Selected step 5" },
					}))
				}
			/>
		</div>
	);
}
