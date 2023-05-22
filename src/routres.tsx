import { PATH } from '@configs/path'
import React from 'react'
import { RouteObject } from 'react-router-dom'

const HomePage = React.lazy(() => import('@pages'))
export const routers: RouteObject[] = [
	{
		path: PATH.HOME,
		element: <HomePage />,
	},
]
