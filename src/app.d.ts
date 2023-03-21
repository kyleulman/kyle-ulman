// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}

	interface Item {
		href: string;
		label?: string;
		description?: string;
		isExternal?: boolean;
		isTab?: boolean;
	}
}

export {};
