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

    return (
        <>
            <BookingInputForm />
            <BookingsList />
        </>
    );
};

export default BookingsContainer;
