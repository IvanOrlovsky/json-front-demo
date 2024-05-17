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
		<div className={cn("rounded-lg bg-slate-400 flex flex-col p-2")}>
			<h1 className="text-black font-semibold text-lg mb-2">{title}</h1>
			<form id={id} name={id}>
				{children}
			</form>
		</div>
	);
};

export default FormBlock;
