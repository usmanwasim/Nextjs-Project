import React from 'react';
import { MongoClient } from 'mongodb';

import ContactsList from '../../Page-Components/ContactList';

export default function index({ contacts }) {
    return (
        <>
            <ContactsList contacts={contacts} />
        </>
    );
}
export async function getServerSideProps() {
    const client = await MongoClient.connect(
        'mongodb+srv://usman:8899@cluster0.9tsdnk0.mongodb.net/nextjs-practice?retryWrites=true&w=majority',
    );
    const db = client.db();
    const contactsCollection = db.collection('contacts');
    const data = await contactsCollection.find().toArray();

    client.close();
    return {
        props: {
            contacts: data.map((item) => ({
                _id: item._id.toString(),
                name: item.name,
                contact: item.contact,
                birth: item.birth,
                email: item.email,
                img: item.file,
            })),
        },
    };
}
