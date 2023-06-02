import React from 'react'
import { useEffect, useState } from 'react'
import { getAuthors } from '../api/authors'
import Author from '../models/Author'

export default function AuthorList() {
	const [authors, setAuthors] = useState<Author[]>([])
	useEffect(() => {
		getAuthors().then(setAuthors)
	}, [])

	return (
		<ul>
			{authors.map((author) => (
				<li key={`${author.id}`}>{author.name}</li>
			))}
		</ul>
	)
}
