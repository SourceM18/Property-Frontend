export class SessionStorage {
	private STORAGE = sessionStorage

	private static instance: SessionStorage

	private constructor() {}

	static getInstance() {
		if (!SessionStorage.instance) {
			SessionStorage.instance = new SessionStorage()
		}
		return SessionStorage.instance
	}

	get(name: string) {
		const value = this.STORAGE.getItem(name)
		if (value) {
			try {
				return JSON.parse(value)
			} catch (e) {
				return value
			}
		}
	}

	set(name: string, val: any) {
		if (val && name) {
			this.STORAGE.setItem(name, JSON.stringify(val))
		}
	}

	remove(name: string) {
		if (name) {
			this.STORAGE.removeItem(name)
		}
	}

	clear() {
		this.STORAGE.clear()
	}
}
