import React, { useState } from 'react'
import data from '../data/contact_list.json'
import ContactList from './ContactList.js'

const Home = () => {
	const [display, setDisplay] = useState(false)
	const handleSubmit = () => {
		if (!display) {
			setDisplay(true)
		} else setDisplay(false)
	}
	return (
		<div>
			<button onClick={handleSubmit}>View Contact List</button>
			{display ? (
				<ContactList contacts={data} />
			) : (
				'Click the button to view contact list'
			)}
		</div>
	)
}

export default Home
