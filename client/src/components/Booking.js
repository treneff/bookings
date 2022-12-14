import React from 'react';
import { deleteGuest } from '../HotelService';

const Booking = ({ guest ,removeGuest }) => {
    const handleDelete = () => {
        deleteGuest(guest._id).then(() => {
            removeGuest(guest._id);
        });
    };

    return (
        <li>
            {guest.name}
            <button onClick={handleDelete}>Remove</button>
        </li>
    );
};

export default Booking;
