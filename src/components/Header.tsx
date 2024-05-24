import { useDataObject } from "@/SDUI/contexts/dataObjectContext";
import MainLogo from "./MainLogo";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import { useEffect } from "react";

export default function Header(props: Record<string, any>) {
	const { id } = props;
	const { updateData } = useDataObject();

	useEffect(() => {
		updateData((prev) => ({
			...prev,
			[id]: { feedback: "not-touched", phone: "not-touched" },
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
		<header className="flex shrink-0 justify-between sticky top-0  min-w-full bg-[#ffffff] px-5 py-5 z-50 mb-[16px]">
			<div>
				<MainLogo />
			</div>

			<div className="flex flex-row gap-2">
				<div
					className="rounded-full bg-[#F1F2F6] p-2 hover:cursor-pointer"
					onClick={() =>
						updateData((prev) => ({
							...prev,
							[id]: { ...prev[id], feedback: "clicked" },
						}))
					}
				>
					<FeedbackOutlinedIcon />
				</div>
				<div
					className="rounded-full bg-[#F1F2F6] p-2 hover:cursor-pointer"
					onClick={() =>
						updateData((prev) => ({
							...prev,
							[id]: { ...prev[id], feedback: "clicked" },
						}))
					}
				>
					<PhoneOutlinedIcon />
				</div>
			</div>
		</header>
	);
}
