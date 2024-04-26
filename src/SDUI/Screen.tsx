import DataObjectProvider from "./dataObjectContext/dataObjectContext";
import Renderer from "./Renderer";
import { JSONDescription } from "./types/JSONDescription";

export default function Screen({
	description,
}: {
	description: JSONDescription;
}) {
	return (
		<main>
			<DataObjectProvider>
				<Renderer description={description} />
			</DataObjectProvider>
		</main>
	);
}
