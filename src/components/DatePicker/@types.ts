import React from 'react'

export type Date = {
	year: string
	month: {
		id: string
		name: string
	}
	day: string
}

export type DatePickerPropsType = {
	date: Date
	setDate: React.Dispatch<React.SetStateAction<Date>>
	start?: string
	end?: string
	disabled?: boolean
}
