"use client";

import { useDataObject } from "@/SDUI/dataObjectContext/dataObjectContext";
import { useEffect } from "react";

export default function Make() {
	const { data, updateData } = useDataObject();
	useEffect(() => {
		updateData((prev) => ({ ...prev, make: "" }));
	}, []);

	return <h1>Make: {data.make && data.make}</h1>;
}
