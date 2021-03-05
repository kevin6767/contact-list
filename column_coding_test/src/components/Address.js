import React from 'react'

const Address = (con) => {
	return (
		<div>
			<input type='text' value={con.c.contact_home} readOnly />{' '}
			<input
				type='text'
				value={con.c.contact_work ? con.c.contact_work : 'No work contact'}
				readOnly
			/>{' '}
		</div>
	)
}

export default Address
