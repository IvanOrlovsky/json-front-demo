import { Component } from "react";

export type ComponentInfo = {
	id: string;
	value: string | Record<string, any>;
	children?: Component[];
};
