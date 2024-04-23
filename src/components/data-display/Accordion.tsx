import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

import React, { useState } from "react";

export default function Accordion({
	title,
	children,
}: {
	children: React.ReactNode;
	title: string;
}) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div
			className="bg-white border border-[#DCE1EF] p-4 flex flex-col gap-4 rounded-2xl cursor-pointer"
			onClick={() => {
				setIsOpen((prev) => !prev);
			}}
		>
			<div className="flex flex-row justify-between px-2">
				<h2>{title}</h2>
				<div className="flex justify-center items-center">
					{isOpen ? (
						<KeyboardArrowUpOutlinedIcon />
					) : (
						<KeyboardArrowDownOutlinedIcon />
					)}
				</div>
			</div>
			{isOpen && children}
		</div>
	);
}
