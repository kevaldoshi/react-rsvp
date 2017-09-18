import React from 'react';
import PropTypes from 'prop-types';

const NewGuestForm = props =>
  <form onSubmit={props.newGuestSubmitHandler}>
      <input
        type="text"
        onChange={props.handleNameInput}
        value={props.pendingGuest}
        placeholder="Invite Someone"
        />
      <button
        type="submit" name="submit" value="submit">Submit</button>
  </form>

	NewGuestForm.propTypes ={
		pendingGuest: PropTypes.string.isRequired,
		newGuestSubmitHandler: PropTypes.func.isRequired,
		handleNameInput: PropTypes.func.isRequired
	}

export default NewGuestForm;
