import Renderer from "./Renderer";
import { JSONDescription } from "./types/JSONDescription";

export default function Screen({
	description,
}: {
	description: JSONDescription;
}) {
	return (
		<main>
			<Renderer description={description} />
		</main>
	);
}
