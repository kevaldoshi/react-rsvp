import React from 'react';
import PropTypes from 'prop-types';

import NewGuestForm from './NewGuestForm';
import ConfirmedFilter from './ConfirmedFilter'
import Counter from './Counter'
import GuestList from './GuestList'

const MainContenet = props =>
	<div className="main">
        <div>
          <h2>Invitees</h2>
          <ConfirmedFilter
            toggleFilter={props.toggleFilter}
            isFiltered={props.isFiltered}
          />
        </div>

        <Counter
          totalInvited={props.totalInvited}
          numberAttending={props.numberAttending}
          numberUnConfirmed={props.numberUnConfirmed}/>

        <GuestList
          guests={props.guests}
          toggleConfirmationAt={props.toggleConfirmationAt}
          toggleEditingAt={props.toggleEditingAt}
          setNameAt={props.setNameAt}
          isFiltered={props.isFiltered}
          removeGuestAt={props.removeGuestAt}
          pendingGuest={props.pendingGuest}/>
      </div>

	MainContenet.propTypes ={
		toggleFilter: PropTypes.func.isRequired,
        totalInvited: PropTypes.number.isRequired,
        numberAttending: PropTypes.number.isRequired,
        numberUnConfirmed: PropTypes.number.isRequired,
        guests: PropTypes.number.isRequired,
        setNameAt: PropTypes.func.isRequired,
        toggleConfirmationAt: PropTypes.func.isRequired,
        toggleEditingAt: PropTypes.func.isRequired,
        removeGuestAt: PropTypes.func.isRequired,
		pendingGuest: PropTypes.string.isRequired
	}

export default MainContenet;
