import React from 'react';
import PropTypes from 'prop-types';

import ConfirmedFilter from './ConfirmedFilter'
import Counter from './Counter'
import GuestList from './GuestList'

const MainContent = props =>
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

	MainContent.propTypes ={
		toggleFilter: PropTypes.func.isRequired,
    totalInvited: PropTypes.number.isRequired,
    numberAttending: PropTypes.number.isRequired,
    numberUnConfirmed: PropTypes.number.isRequired,
    guests: PropTypes.array.isRequired,
    setName: PropTypes.func.isRequired,
    toggleConfirmation: PropTypes.func.isRequired,
    toggleEditing: PropTypes.func.isRequired,
    removeGuest: PropTypes.func.isRequired,
		pendingGuest: PropTypes.string.isRequired,
    isFiltered: PropTypes.bool.isRequired
	}

export default MainContent;
