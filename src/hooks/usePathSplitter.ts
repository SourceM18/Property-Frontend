import { useCallback, useMemo } from 'react'

import { useLocation } from 'react-router-dom'

export const usePathSplitter = (
	position = 1,
): {
	path: string
	pathSplitter: () => RegExpMatchArray
	pathTail: string
	pathWithoutTail: (num?: number) => string
	pathHead: (num?: number) => string
} => {
	const { pathname } = useLocation()
	const pathSplitter = useCallback(() => pathname.match(/\/[^\/]+/g), [pathname])
	const findPath = useCallback((pos: number) => pathSplitter()[pos], [pathSplitter(), pathname])

	const pathTail = useMemo(() => findPath(pathSplitter().length - 1), [pathname, pathSplitter()])
	const path = useMemo(() => findPath(position > 0 ? position - 1 : 0), [pathname, position])
	const pathWithoutTail = useCallback((num = 1) => {
		return pathSplitter().slice(0, -num).join('')
	}, [])
	const pathHead = useCallback((num = 1) => {
		return pathSplitter().slice(0, num).join('')
	}, [])

	return { path, pathTail, pathWithoutTail, pathHead, pathSplitter }
}
