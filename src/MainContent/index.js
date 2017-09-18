import React from 'react';
import PropTypes from 'prop-types';

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
          toggleConfirmation={props.toggleConfirmation}
          toggleEditing={props.toggleEditing}
          setName={props.setName}
          isFiltered={props.isFiltered}
          removeGuest={props.removeGuest}
          pendingGuest={props.pendingGuest}/>
      </div>

	MainContenet.propTypes ={
		toggleFilter: PropTypes.func.isRequired,
    totalInvited: PropTypes.number.isRequired,
    numbertending: PropTypes.number.isRequired,
    numberUnConfirmed: PropTypes.number.isRequired,
    guests: PropTypes.number.isRequired,
    setName: PropTypes.func.isRequired,
    toggleConfirmation: PropTypes.func.isRequired,
    toggleEditing: PropTypes.func.isRequired,
    removeGuest: PropTypes.func.isRequired,
		pendingGuest: PropTypes.string.isRequired
	}

export default MainContenet;
