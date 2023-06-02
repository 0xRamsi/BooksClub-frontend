import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { MainPage } from './pages/MainPage'
import Book from './pages/Book'
import NavBar from './components/NavBar'
import BookList from './components/BookList'
import AuthorList from './components/AuthorList'

export default createBrowserRouter([
	{
		element: <NavBar />,
		children: [
			{
				path: '/',
				element: <MainPage />,
			},
			{
				path: '/books',
				element: <BookList />,
			},
			{
				path: '/authors',
				element: <AuthorList />,
			},
			{
				path: '/book/:id',
				element: <Book />,
			},
			{
				path: '*',
				element: <h1>404 - Page not found</h1>,
			},
		],
	},
])
