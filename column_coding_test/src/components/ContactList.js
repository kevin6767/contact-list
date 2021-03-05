import React, { useEffect, useState } from 'react'
import Contact from './Contact'
import '../styles/ContactList.css'
import Address from './Address'

const ContactList = ({ contacts }) => {
	const [currentContact, setCurrentContact] = useState(null)
	return (
		<div className='contact-list-container'>
			{currentContact ? (
				<Address c={currentContact} />
			) : (
				contacts.map((contact) => (
					<Contact
						{...contact}
						key={contact.id}
						onClick={(value) => setCurrentContact(value)}
					/>
				))
			)}
		</div>
	)
}

export default ContactList
