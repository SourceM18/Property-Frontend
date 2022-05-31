import moment from 'moment'

import { LocalStorage } from 'src/utils'

const ls = LocalStorage.getInstance()

export const dateParamsCreator = (): string => {
	if (ls.get('period')?.start && ls.get('period')?.end) {
		return `from=${encodeURIComponent(moment(ls.get('period').start).format('YYYY-MM-DD'))}&to=${encodeURIComponent(
			moment(ls.get('period').end).format('YYYY-MM-DD'),
		)}`
	}
	if (ls.get('period')?.start) {
		return `from=${encodeURIComponent(moment(ls.get('period').start).format('YYYY-MM-DD'))}`
	}
	return `to=${encodeURIComponent(moment(ls.get('period').end).format('YYYY-MM-DD'))}`
}
