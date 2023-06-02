import React from 'react'
import BookList from '../components/BookList'
import AuthorList from '../components/AuthorList'

export const MainPage = function () {
	return (
		<>
			<span>Books:</span>
			<BookList />
			<span>Authors:</span>
			<AuthorList />
		</>
	)
}
