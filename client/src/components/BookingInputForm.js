import React, { useState } from 'react';
import { postGuest } from '../HotelService';

const BookingInputForm = ({ addGuest }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
    });

    const onChange = (event) => {
        const newFormData = Object.assign({}, formData);
        newFormData[event.target.name] = event.target.value;
        setFormData(newFormData);
        console.log(formData);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        postGuest(formData).then((data) => {
            addGuest(data);
        });
    };

    return (
        <form onSubmit={onSubmit}>
            <h2>New guest</h2>
            <label htmlFor='name'>Name</label>
            <input onChange={onChange} type='text' id='name' name='name' value={formData.name} />
            <label htmlFor='email'>Email</label>
            <input onChange={onChange} type='text' id='email' name='email' value={formData.email} />
            <input type='submit' value='Save' id='save' />
        </form>
    );
};

export default BookingInputForm;
