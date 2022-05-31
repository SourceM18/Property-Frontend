export type PhotoInstanceProps = {
	className?: string
	setPhoto?: (photo: FormData) => void
	photo?: string
	hoverTexts?: {
		add: string
		replace: string
	}
	photoClassName?: string
	plugClassName?: string
	mobileIconClassName?: string
	mobileEditPhotoClassName?: string
	plug: string
	imgSizeName?: string
}
