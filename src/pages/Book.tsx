import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getAuthor } from '../api/authors'
import { getBook } from '../api/books'
import Author from '../models/Author'
import Book from '../models/Book'

export default function Book() {
	const { id } = useParams()
	const [book, setBook] = useState<Book>()
	const [author, setAuthor] = useState<Author>()

	useEffect(() => {
		if (!id) {
			return
		}
		getBook(id).then(setBook)
	}, [])
	useEffect(() => {
		if (!book) {
			return
		}
		getAuthor(book.authorId).then(setAuthor)
	}, [book])

	return (
		<>
			{book ? (
				<>
					<h1>{book.name}</h1>
					by <span>{author ? author.name : 'unknown'}</span>
				</>
			) : (
				'Loading data...'
			)}
		</>
	)
}
