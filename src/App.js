import React, { Component } from 'react';
import './App.css';

import Header from './Header'
import MainContent from './MainContent'


class App extends Component {

  state = {
    guests : [],
    isFiltered: false,
    pendingGuest: ""
  }

  lastGuestId = 0;

  newGuestId = () => {
    const id = this.lastGuestId + 1;
    this.lastGuestId += 1;
    return id;
  }

  toggleGuestProperty = (property, id) =>
    this.setState({
      guests : this.state.guests.map((guest) => {
        if (id === guest.id) {
          return{
            ...guest,
            [property] : !guest[property]
          }
        }
        return guest;
      })
    });

  toggleConfirmation = id =>
    this.toggleGuestProperty("isConfirmed", id);

  removeGuest = id =>
    this.setState({
      guests: this.state.guests.filter(guest => id !== guest.id)
    });

  toggleEditing = id =>
    this.toggleGuestProperty("isEditing", id);

  setName = (name, id) =>
    this.setState({
      guests : this.state.guests.map((guest) => {
        if (id === guest.id) {
          return{
            ...guest,
            name
          }
        }
        return guest;
      })
    });

  getTotalInvited = () => this.state.guests.length;

  toggleFilter = () =>
    this.setState({isFiltered: !this.state.isFiltered});

  handleNameInput = e =>
    this.setState({pendingGuest: e.target.value})

  newGuestSubmitHandler = e => {
    e.preventDefault();
    const id = this.newGuestId();
    this.setState({
      guests: [
        {
          name: this.state.pendingGuest,
          isConfirmed: false,
          isEditing: false,
          id
        },
        ...this.state.guests
      ],
      pendingGuest: ''
    });
  };

  getAttendingGuests = () =>
    this.state.guests.reduce((total, guest) => guest.isConfirmed ? total + 1 : total,
    0
  );
  // getTotalGuests = ()
  render() {
    const totalInvited = this.getTotalInvited();
    const numberAttending = this.getAttendingGuests();
    const numberUnConfirmed = totalInvited - numberAttending;
    console.log(this.state.pendingGuest);
    return (
      <div className="App">
      <Header
        newGuestSubmitHandler={this.newGuestSubmitHandler}
        handleNameInput={this.handleNameInput}
        pendingGuest={this.state.pendingGuest} />

      <MainContent
        toggleFilter={this.toggleFilter}
        totalInvited={totalInvited}
        numberAttending={numberAttending}
        numberUnConfirmed={numberUnConfirmed}
        guests={this.state.guests}
        toggleConfirmation={this.toggleConfirmation}
        toggleEditing={this.toggleEditing}
        setName={this.setName}
        isFiltered={this.state.isFiltered}
        removeGuest={this.removeGuest}
        pendingGuest={this.state.pendingGuest}/>
      </div>
    );
  }
}

export default App;
