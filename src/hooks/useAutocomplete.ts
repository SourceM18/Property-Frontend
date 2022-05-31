import { FormEvent, useState } from 'react'

export const useAutocomplete = (
	init = true,
): { onBlur: (e: FormEvent) => void; readOnly: boolean; onFocus: (e: FormEvent) => void } => {
	const [readOnly, setReadOnly] = useState(init)
	// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
	const onFocus = (e: FormEvent) => {
		setReadOnly(false)
	}
	// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
	const onBlur = (e: FormEvent) => {
		setReadOnly(true)
	}

	return {
		readOnly,
		onFocus,
		onBlur,
	}
}
