import moment from 'moment'

type DateObjectType = {
	year: string
	month: {
		id: string
		name: string
	}
	day: string
}

export const dateFormatter = (date: string, format = 'DD MMM YYYY'): string =>
	moment(date).isValid() ? moment(date).utc().format(format) : ''

export function dateRangeFormatter(
	{ start, end }: { start?: string; end?: string },
	defaultVal = '',
	format?: string,
): string {
	if (start && end) {
		return `${dateFormatter(start, format)} - ${dateFormatter(end, format)}`
	}
	if (!start && !end) {
		return defaultVal
	}
	if (!start) {
		return `Till ${dateFormatter(end, format)}`
	}
	if (!end) {
		return `From ${dateFormatter(start, format)}`
	}
}

export const dateToStringFormatter = (date: DateObjectType): string => {
	return `${date.year}-${date.month.id}-${date.day}T00:00:00+00:00`
}

export const dateObjectFormatter = (date: string): DateObjectType => {
	return {
		year: dateFormatter(date, 'YYYY'),
		month: {
			id: dateFormatter(date, 'MM'),
			name: dateFormatter(date, 'MMM'),
		},
		day: dateFormatter(date, 'DD'),
	}
}
