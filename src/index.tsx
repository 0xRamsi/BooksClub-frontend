import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import routes from './routes'

const container = document.getElementById('app')
if (container) {
	const root = createRoot(container) // createRoot(container!) if you use TypeScript
	root.render(
		<React.StrictMode>
			<RouterProvider router={routes} />
		</React.StrictMode>
	)
} else {
	alert("Error, div disb't exist.")
}
