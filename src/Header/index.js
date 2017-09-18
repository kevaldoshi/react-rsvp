import React from 'react';
import PropTypes from 'prop-types';

import NewGuestForm from './NewGuestForm';

const Header = props =>
	<header>
    <h1>RSVP</h1>
    <p>An app to manage event invites</p>
    <NewGuestForm
    	handleNameInput={props.handleNameInput}
    	newGuestSubmitHandler={props.newGuestSubmitHandler}
    	pendingGuest={props.pendingGuest}
    />
  </header>;

	Header.propTypes ={
		handleNameInput: PropTypes.func.isRequired,
		newGuestSubmitHandler: PropTypes.func.isRequired,
		pendingGuest: PropTypes.string.isRequired
	}

export default Header;
