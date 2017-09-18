import React, { Component } from 'react';
import './App.css';

import GuestList from './GuestList';
import Counter from './Counter';

class App extends Component {

  state = {
    guests : [
      {
        name: 'Hari',
        isConfirmed: false,
        isEditing: false
      },
      {
        name: 'Sam',
        isConfirmed: true,
        isEditing: false
      },
      {
        name: 'Shashi',
        isConfirmed: true,
        isEditing: true
      }
    ],
    isFiltered: false,
    pendingText: ""
  }

  toggleGuestPropertyAt = (property, indexToChange) =>
    this.setState({
      guests : this.state.guests.map((guest, index) => {
        if (index === indexToChange) {
          return{
            ...guest,
            [property] : !guest[property]
          }
        }
        return guest;
      })
    });

  toggleConfirmationAt = index =>
    this.toggleGuestPropertyAt("isConfirmed", index);

  removeGuestAt = index =>
    this.setState({
      guests: [
        ...this.state.guests.slice(0,index),
        ...this.state.guests.slice(index+1)
      ]
    })

  toggleEditingAt = index =>
    this.toggleGuestPropertyAt("isEditing", index);

  setNameAt = (name, indexToChange) =>
    this.setState({
      guests : this.state.guests.map((guest, index) => {
        if (index === indexToChange) {
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
    this.setState({
      guests: [
        {
          name: this.state.pendingGuest,
          isConfirmed: false,
          isEditing: false
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
    return (
      <div className="App">


      <div className="main">
        <div>
          <h2>Invitees</h2>
          <label>
            <input
              onChange={this.toggleFilter}
              type="checkbox"
              checked={this.state.isFiltered}/> Hide those who haven't responded
          </label>
        </div>

        <Counter
          totalInvited={totalInvited}
          numberAttending={numberAttending}
          numberUnConfirmed={numberUnConfirmed}/>

        <GuestList
          guests={this.state.guests}
          toggleConfirmationAt={this.toggleConfirmationAt}
          toggleEditingAt={this.toggleEditingAt}
          setNameAt={this.setNameAt}
          isFiltered={this.state.isFiltered}
          removeGuestAt={this.removeGuestAt}
          pendingGuest={this.state.pendingGuest}/>
      </div>
      </div>
    );
  }
}

export default App;
