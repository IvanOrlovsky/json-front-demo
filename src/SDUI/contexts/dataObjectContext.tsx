"use client";

import React, { createContext, useState, useContext } from "react";

const DataObject = createContext<{
	data: Record<string, any>;
	updateData: React.Dispatch<React.SetStateAction<Record<string, any>>>;
} | null>(null);

export default function DataObjectProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [data, updateData] = useState<Record<string, any>>({});
	return (
		<DataObject.Provider value={{ data, updateData }}>
			{children}
		</DataObject.Provider>
	);
}

export function useDataObject() {
	const context = useContext(DataObject);
	if (!context) {
		throw new Error(
			"useDataObject должен использоваться внутри DataObjectProvider"
		);
	}

	return context;
}
