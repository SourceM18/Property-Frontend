export const scrollTo = (element: HTMLDivElement): void => {
	element.scrollIntoView({
		behavior: 'smooth',
	})
}
