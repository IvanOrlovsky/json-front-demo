export default function Title(props: Record<string, any>) {
	const { id, text } = props;
	return (
		<h1
			id={id}
			className=" w-fit font-semibold text-2xl sm:text-4xl mx-[16px]"
		>
			{text}
		</h1>
	);
}
