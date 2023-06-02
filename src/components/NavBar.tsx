import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function NavBar() {
	return (
		<>
			<nav style={{ background: '#eee', padding: '5px' }}>
				<ol style={{ listStyleType: 'none', display: 'flex', gap: '10px' }}>
					<li>
						<Link to={'/'}>Home</Link>
					</li>
					<li>
						<Link to={'/books'}>Books</Link>
					</li>
					<li>
						<Link to={'/authors'}>Authors</Link>
					</li>
				</ol>
			</nav>
			<div style={{ margin: '5px' }}>
				<Outlet />
			</div>
		</>
	)
}
