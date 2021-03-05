import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
const Contact = (contact) => {
	return (
		<div onClick={(event) => contact.onClick(contact)}>
			<Card style={{ width: '18rem' }}>
				<Card.Img variant='top' src={contact.profile_picture} />
				<Card.Body>
					<Card.Title>
						{contact.first_name} {contact.last_name}
					</Card.Title>

					<ListGroup>
						<ListGroupItem>Home Number : {contact.contact_home}</ListGroupItem>
						{contact.contact_work ? (
							<ListGroupItem>
								Work Number : {contact.contact_work}
							</ListGroupItem>
						) : (
							'No contact for work'
						)}
					</ListGroup>
				</Card.Body>
			</Card>
		</div>
	)
}

export default Contact
