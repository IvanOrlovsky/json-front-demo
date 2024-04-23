"use client";

import { NavChipProps } from "@/types/components/data-display/NavChip";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";

export default function NavChip({
	letterInCircle,
	label,
	onClick,
	disabled,
	active,
}: NavChipProps) {
	const handleClick = () => {
		if (onClick) {
			onClick();
		}
	};

	return (
		<Chip
			disabled={disabled}
			onClick={handleClick}
			className={
				!active
					? "bg-transparent hover:bg-transparent text-md sm:text-xl"
					: "bg-[#C5EAFC] hover:bg-[#C5EAFC] font-bold text-md sm:text-xl"
			}
			avatar={
				<Avatar sx={{ backgroundColor: "white" }}>
					{letterInCircle}
				</Avatar>
			}
			label={label}
		/>
	);
}
