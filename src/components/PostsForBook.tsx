import React, { useEffect, useState } from 'react'
import { getPostsForBook } from '../api/posts'
import Post from '../models/Post'
import AddPostToBook from './AddPostToBook'

interface Props {
	bookId: string
}

const PostsForBook_paragraph = { marginLeft: '1rem', marginTop: '0.5rem', marginBottom: '0.5rem' }
const PostsForBook_header = { marginTop: '0.5rem', marginBottom: '0.5rem' }
const PostsForBook_listitem = { padding: '0 0.5rem', border: '1px solid #ccc', borderRadius: '0.5rem' }

export default function PostsForBook({ bookId }: Props) {
	const [posts, setPosts] = useState<Post[]>([])
	useEffect(() => {
		getPostsForBook(bookId).then(setPosts)
	}, [])
	return (
		<>
			<ul style={{ listStyleType: 'none' }}>
				{posts.map((post) => (
					<li style={PostsForBook_listitem}>
						<h4 style={PostsForBook_header}>
							{post.header}
							<span style={{ fontSize: '0.8rem', float: 'right' }}>by: {post.userName}</span>
						</h4>
						<p style={PostsForBook_paragraph}>{post.body}</p>
					</li>
				))}
			</ul>
			<AddPostToBook bookId={bookId} />
		</>
	)
}
