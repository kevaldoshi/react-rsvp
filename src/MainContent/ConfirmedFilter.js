import React from 'react';
import PropTypes from 'prop-types';

const ConfirmedFilter = props =>
	<label>
      <input
        onChange={props.toggleFilter}
        type="checkbox"
        checked={props.isFiltered}/> Hide those who haven't responded
    </label>

	ConfirmedFilter.propTypes ={
		isFiltered: PropTypes.bool.isRequired,
		toggleFilter: PropTypes.func.isRequired
	}

export default ConfirmedFilter;
