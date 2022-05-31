import { FC } from 'react'

import { Request, Response } from '@components/index'

export const ConsentScreens: FC<{ type: 'req' | 'res'; path: 'account' | 'payment' }> = ({ type, path }) => {
	if (type === 'res') {
		return <Response />
	}

	if (path === 'account') {
		return <Request path={path} />
	}

	return <Request path={path} />
}
