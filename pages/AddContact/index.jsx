import React from 'react';
import NewContact from '../../Page-Components/CreateContact';

export default function index() {
    const addContact = async (data) => {
        await fetch('/api/AddContact', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => console.log(data));
    };
    return (
        <>
            <NewContact addContact={addContact} />
        </>
    );
}
