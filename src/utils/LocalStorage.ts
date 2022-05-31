export class LocalStorage {
	private STORAGE = localStorage

	private static instance: LocalStorage

	// eslint-disable-next-line no-empty-function,@typescript-eslint/no-empty-function
	private constructor() {}

	static getInstance(): LocalStorage {
		if (!LocalStorage.instance) {
			LocalStorage.instance = new LocalStorage()
		}
		return LocalStorage.instance
	}

	get(name: string): any {
		const value = this.STORAGE.getItem(name)
		if (value) {
			try {
				return JSON.parse(value)
			} catch (e) {
				return value
			}
		}
	}

	set(name: string, val: any): void {
		if (val && name) {
			this.STORAGE.setItem(name, JSON.stringify(val))
		}
	}

	remove(name: string): void {
		if (name) {
			this.STORAGE.removeItem(name)
		}
	}

	clear(): void {
		this.STORAGE.clear()
	}
}
