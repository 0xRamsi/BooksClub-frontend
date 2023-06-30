import Post from '../models/Post'

export const getPostsForBook = (bookId: string) =>
	fetch('http://localhost:8081/post/' + bookId).then((json) => json.json())
export const sendPostForBook = (payload: Post) =>
	fetch('http://localhost:8081/newPost', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(payload),
	}).then((json) => json.json())
