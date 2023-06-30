import React from 'react'
import { sendPostForBook } from '../api/posts'

interface Props {
	bookId: string
}

export default function ({ bookId }: Props) {
	const sendOpintion = () => {
		const userName = (document.getElementById('userName') as HTMLInputElement).value
		const header = (document.getElementById('header') as HTMLInputElement).value
		const opinion = (document.getElementById('opinion') as HTMLTextAreaElement).value
		console.log(userName, opinion)

		const payload = { id: '123', userName, bookId, header, body: opinion }

		sendPostForBook(payload)
	}

	return (
		<>
			<h4>Tells us what you think</h4>
			<form style={{ display: 'grid', gridTemplateColumns: 'auto 3fr', gap: '0.5rem' }}>
				Your name
				<input id="userName" />
				Your header
				<input id="header" />
				Your opinion
				<textarea id="opinion" />
				<button type="button" style={{ gridColumnStart: 'span 2' }} onClick={sendOpintion}>
					Send
				</button>
			</form>
		</>
	)
}
