import { ChangeEvent } from 'react'

export type UseFileUpload = (e: ChangeEvent<HTMLInputElement>, name?: string) => FormData

export const useFileUpload: UseFileUpload = (e, name = '') => {
	e.preventDefault()
	const selectedFile = e.target.files[0]
	const fileData = new FormData()
	// eslint-disable-next-line no-bitwise
	const extension = selectedFile.name.slice(((selectedFile.name.lastIndexOf('.') - 1) >>> 0) + 2)
	const fileName = name.trim() ? `${name}.${extension}` : selectedFile.name

	fileData.set('file', selectedFile, fileName)

	return fileData
}
