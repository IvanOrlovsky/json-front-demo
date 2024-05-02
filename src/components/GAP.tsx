"use client";

import { useDataObjectUpdatetion } from "@/SDUI/hooks/useDataObjectUpdatetion";
import { useState } from "react";

import { IoIosRadioButtonOff } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";

import { cn } from "@/lib/utils/cn";

export default function GAP({ id }: { id: string }) {
	const [checked, setChecked] = useState(false);
	const title = "Гарантия стоимости (GAP)";
	const text =
		"В случае угона или гибели авто сделаем выплату без учета его износа";

	const { data, handleOnChange } = useDataObjectUpdatetion(id, {
		GAP: "false",
	});

	return (
		<div
			className={cn(
				"flex flex-row gap-3 justify-start bg-white rounded-lg border-2 p-4 hover:cursor-pointer",
				{
					"border-[#03a9f4]": checked,
					"border-[#DCE1EF]": !checked,
				}
			)}
			onClick={() => {
				setChecked(!checked);
				handleOnChange({ GAP: String(!checked) });
			}}
		>
			<input type="hidden" id={id} />
			<div>
				{checked && <FaCheckCircle className="text-blue-500" />}
				{!checked && <IoIosRadioButtonOff />}
			</div>
			<div className="self-stretch grow flex flex-col gap-1">
				<h2>{title}</h2>
				<p className="kasko-subtext">{text}</p>
			</div>
			<IoIosInformationCircleOutline className="text-[#8591A9] text-[50px] self-start" />
		</div>
	);
}
