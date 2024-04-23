"use client";
import { FormBlockProps } from "@/types/components/FormBlock";

export default function FormBlock({
	title,
	hasSubmitBtn,
	submitBtnLabel,
	forForm,
	children,
	onClickBtn,
}: FormBlockProps) {
	return (
		<section className="flex flex-col gap-3 rounded-3xl bg-white pt-5 px-4 pb-5">
			<h2 className="w-fit mb-4">{title}</h2>
			{children}
			{hasSubmitBtn && (
				<button
					type="submit"
					form={forForm}
					onClick={onClickBtn}
					className="button mb-5"
				>
					{submitBtnLabel}
				</button>
			)}
		</section>
	);
}
