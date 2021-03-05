import React from 'react'
import data from '../data/contact_list.json'
import ContactList from './ContactList.js'

const Home = () => {
	return (
		<div>
			<button>View Contact List</button>
			<ContactList contacts={data} />
		</div>
	)
}

export default Home
