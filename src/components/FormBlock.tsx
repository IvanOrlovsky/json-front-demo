import { cn } from "@/lib/utils/cn";

interface FormBlockProps {
	id: string;
	title: string;
	children: React.ReactNode;
	[key: string]: any;
}

const FormBlock: React.FC<FormBlockProps> = ({
	id,
	title,
	children,
	...rest
}) => {
	return (
		<div className={cn(" rounded-3xl bg-white pt-5 px-4 pb-5")}>
			<h1 className="w-fit mb-4 text-xl sm:text-2xl font-semibold text-[#1F232B] ">
				{title}
			</h1>
			<form id={id} name={id} className="flex flex-col gap-3">
				{children}
			</form>
		</div>
	);
};

export default FormBlock;
