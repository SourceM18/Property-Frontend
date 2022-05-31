// We need to tell TypeScript that when we write "import styles from './styles.scss' we mean to load a module (to look for a './styles.scss.d.ts').
declare module '*.scss' {
	const styles: { [className: string]: string }
	export default styles
}

declare module '*.png' {
	const content: string
	export default content
}

declare module '*.jpg' {
	const content: string
	export default content
}

declare module '*.jpeg' {
	const content: string
	export default content
}

declare module '*.svg' {
	const content: string
	export default content
}

declare module '*.gif' {
	const content: string
	export default content
}
declare module '*.ico' {
	const content: string
	export default content
}

declare module '*.json' {
	const content: any
	export default content
}
