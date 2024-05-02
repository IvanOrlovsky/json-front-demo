"use client";

import React, { createContext, useState, useContext } from "react";
import { ComponentInfo } from "../types/ComponentInfo";

const ComponentContext = createContext<{
	info: ComponentInfo;
	updateInfo: React.Dispatch<ComponentInfo>;
} | null>(null);

export default function ComponentContextProvider({
	id,
	children,
}: {
	id: string;
	children: React.ReactNode;
}) {
	const [info, updateInfo] = useState<ComponentInfo>({
		id: id,
		value: "",
	});
	return (
		<ComponentContext.Provider value={{ info, updateInfo }}>
			{children}
		</ComponentContext.Provider>
	);
}

export function useComponentContext() {
	const context = useContext(ComponentContext);
	if (!context) {
		throw new Error(
			"useComponentContext должен использоваться внутри ComponentContextProvider"
		);
	}

	return context;
}
