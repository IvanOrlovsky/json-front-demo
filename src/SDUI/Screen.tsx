import React, { useEffect, useState } from "react";
import Renderer from "./Renderer";
import { JSONDescription, Component } from "./types/JSONDescription";

export default function Screen({
	description,
}: {
	description: JSONDescription;
}) {
	const [hasDuplicate, setHasDuplicate] = useState<boolean>(false);
	const [isEmpty, setIsEmpty] = useState<boolean>(false);

	useEffect(() => {
		const checkDuplicateIds = (components: Component[]) => {
			const ids = new Set();
			setHasDuplicate(false);
			setIsEmpty(false);
			components.forEach((component) => {
				if (ids.has(component.id)) {
					setHasDuplicate(true);
				} else {
					ids.add(component.id);
				}
				if (component.id === "") {
					setIsEmpty(true);
				}
			});
		};
		checkDuplicateIds(description.components);
	}, [description]);

	if (hasDuplicate) {
		return (
			<main>
				<h1 className="bg-red-700 text-red-200 text-xl">
					У компонентов входного json одинаковые id
				</h1>
			</main>
		);
	}

	if (isEmpty) {
		return (
			<main>
				<h1 className="bg-red-700 text-red-200 text-xl">
					У компонентов входного json есть пустые id
				</h1>
			</main>
		);
	}

	return (
		<main>
			<Renderer description={description} />
		</main>
	);
}
