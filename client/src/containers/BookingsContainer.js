import React, { useEffect, useState } from 'react';
import BookingInputForm from '../components/BookingInputForm';
import BookingsList from '../components/BookingsList';
import { getGuests } from '../HotelService';

const BookingsContainer = () => {
    const [allGuests, setAllGuests] = useState([]);

    useEffect(() => {
        getGuests().then((fetchedGuests) => {
            setAllGuests(fetchedGuests);
        });
    }, []);

    const addGuest = (guest) => {
        const newGuests = [...allGuests, guest];
        console.log(newGuests)
        setAllGuests(newGuests);
    };

    const removeGuest = (id) => {
        const newGuestsList = allGuests.map(guest => guest);
        const indexToDelete = newGuestsList.map(guest => guest._id).indexOf(id);
        newGuestsList.splice(indexToDelete, 1);
        setAllGuests(newGuestsList);
    };

    return (
        <>
            <BookingInputForm addGuest={addGuest} />
            <BookingsList allGuests={allGuests} removeGuest={removeGuest} />
        </>
    );
};

export default BookingsContainer;
