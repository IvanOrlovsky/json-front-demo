"use client";

import React, { createContext, useState, useContext } from "react";

const MainContext = createContext<{
	data: Record<string, any>;
	updateData: React.Dispatch<React.SetStateAction<Record<string, any>>>;
} | null>(null);

export default function MainContextProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [data, updateData] = useState<Record<string, any>>({});
	return (
		<MainContext.Provider value={{ data, updateData }}>
			{children}
		</MainContext.Provider>
	);
}

export function useMainContext() {
	const context = useContext(MainContext);
	if (!context) {
		throw new Error(
			"useMainContext must be used within a MainContextProvider"
		);
	}

	return context;
}
