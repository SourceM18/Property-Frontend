import { ChangeEvent, useState, Dispatch, SetStateAction } from 'react'

export type ValidatorType = (prev: string, val: string) => string
type HandleChangeType = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
export type UseInput = (
	init: string,
	validator?: ValidatorType,
) => [string, HandleChangeType, Dispatch<SetStateAction<string>>]

export const useInput: UseInput = (init = '', validator?) => {
	const [val, setVal] = useState(init)
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (validator) {
			const validatedValue = validator(val, e.target.value)
			setVal(validatedValue)
		} else {
			setVal(e.target.value)
		}
	}
	return [val, handleChange, setVal]
}
