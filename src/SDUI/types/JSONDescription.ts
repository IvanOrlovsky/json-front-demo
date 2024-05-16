export interface Component {
	name: string;
	props: Record<string, any>;
	children?: Component[];
}

export interface JSONDescription {
	components: Component[];
}
