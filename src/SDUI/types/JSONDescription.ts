export type Component = {
	props: Record<string, any>;
	name: string;
};
export interface JSONDescription {
	components: Component[];
}
