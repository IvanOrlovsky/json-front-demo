import { cn } from "@/lib/utils/cn";

interface FormBlockProps {
	props: {
		id: string;
		title: string;
		[key: string]: any;
	};
	children: React.ReactNode;
}

const FormBlock: React.FC<FormBlockProps> = (props: any) => {
	const { id, title } = props;

	return (
		<div className={cn("rounded-lg bg-slate-400 flex flex-col p-2")}>
			<h1 className="text-black font-semibold text-lg mb-2">{title}</h1>
			<form id={id} name={id}>
				{props.children}
			</form>
		</div>
	);
};

export default FormBlock;
