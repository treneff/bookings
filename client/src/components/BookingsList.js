import React from 'react';
import Booking from './Booking';

const BookingsList = ({allGuests,removeGuest}) => {

    
    const guestsToDisplay = allGuests.map((guest) => {
        return <Booking key={guest._id} guest = {guest} removeGuest={removeGuest}/>
    })
    return (
        <ul>
        {guestsToDisplay}
        </ul>
    );
};

export default BookingsList;
