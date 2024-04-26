export default function ErrorComponent({
	componentName,
	errorMessage,
}: {
	componentName: string;
	errorMessage: string;
}) {
	return (
		<div>
			<p>Ошибка при загрузке компонента "{componentName}"</p>
			<p>{errorMessage}</p>
		</div>
	);
}
