import React from 'react'
import Contact from './Contact'
import '../styles/ContactList.css'
const ContactList = ({ contacts }) => {
	return (
		<div className='contact-list-container'>
			{contacts.map((contact) => (
				<Contact {...contact} key={contact.id} />
			))}
		</div>
	)
}

export default ContactList
