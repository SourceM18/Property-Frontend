import React from 'react'

export const PeriodList: React.FC<{ periodList: string[] }> = ({ periodList }) => {
	const OptionPeriod = ({ period }: { period: string }) => {
		return (
			<option value={period} key={period}>
				{period}
			</option>
		)
	}

	return (
		<>
			{periodList.map((period: string) => (
				<OptionPeriod period={period} key={period} />
			))}
		</>
	)
}
