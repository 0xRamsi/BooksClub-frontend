import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Book from '../models/Book'
import { getBooks } from '../api/books'

export default function BookList() {
	const [books, setBooks] = useState<Book[]>([])
	useEffect(() => {
		getBooks().then(setBooks)
	}, [])

	return (
		<ul>
			{books.map((book) => (
				<li key={`${book.id}`}>
					<Link to={`/book/${book.id}`}>{book.name}</Link>
				</li>
			))}
		</ul>
	)
}
