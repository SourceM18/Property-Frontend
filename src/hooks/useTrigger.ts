import React, { useState } from 'react'

type UseTrigger = (bool?: boolean) => [boolean, () => void, React.Dispatch<React.SetStateAction<boolean>>]

export const useTrigger: UseTrigger = (init = false) => {
	const [bool, setBool] = useState(init)
	const triggerBool = () => {
		setBool((prev) => !prev)
	}

	return [bool, triggerBool, setBool]
}
