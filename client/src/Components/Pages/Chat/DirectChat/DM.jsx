import React, { useEffect, useState } from 'react'
import { ChatEngine, getOrCreateChat } from 'react-chat-engine'

const DM = (props) => {
	const [username, setUsername] = useState('');
    
    console.log(props);
	function createDirectChat(creds) {
		getOrCreateChat(
			creds,
			{ is_direct_chat: true, usernames: props.userName },
			() => setUsername('')
		)
	}

	function renderChatForm(creds) {
		return (
			<div>
				<input 
					placeholder='Username' 
					value='Sigal1' 
					onChange={(e) => setUsername(e.target.value)} 
				/>
				<button onClick={() => createDirectChat(creds)}>
					Create
				</button>
			</div>
		)
	}

	return (
		<ChatEngine
			height='100vh'
			userName={username}
			userSecret='Liorlsa9'
			projectID='654ce782-8e95-433a-b3d6-11e63df52204'
			renderNewChatForm={(creds) => renderChatForm(creds)}
		/>
	)
}

export default DM;