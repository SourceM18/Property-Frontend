import currency from 'currency.js'

type CurrencyFormatterTypes = (value: number, symbol?: string) => string

export const currencyFormatter: CurrencyFormatterTypes = (value = 0, symbol = '£') => {
	const cur = currency(value / 100, {
		separator: '\t',
		decimal: '.',
		symbol,
	})

	return cur.format()
}
