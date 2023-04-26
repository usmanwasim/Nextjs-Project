import React from 'react';
import { MongoClient, ObjectId } from 'mongodb';
import ContactDetail from '../../Page-Components/ContactDetail';

export default function DetailPage({ contact }) {
    return (
        <>
            <ContactDetail contact={contact} />
        </>
    );
}

export async function getServerSideProps({ params: { detailId } }) {
    const client = await MongoClient.connect(
        'mongodb+srv://usman:8899@cluster0.9tsdnk0.mongodb.net/nextjs-practice?retryWrites=true&w=majority',
    );
    const db = client.db();
    const contactsCollection = db.collection('contacts');
    const data = await contactsCollection.findOne({ _id: new ObjectId(detailId) });
    client.close();
    return {
        props: {
            contact: {
                _id: data._id.toString(),
                name: data.name,
                contact: data.contact,
                birth: data.birth,
                email: data.email,
            },
        },
    };
}

// export async function getStaticPaths() {
//     const client = await MongoClient.connect(
//         'mongodb+srv://usman:8899@cluster0.9tsdnk0.mongodb.net/nextjs-practice?retryWrites=true&w=majority',
//     );
//     const db = client.db();
//     const contactsCollection = db.collection('contacts');
//     const data = await contactsCollection.find({}, { _id: 1 }).toArray();
//     client.close();
//     return {
//         paths: data.map((item) => ({
//             params: {
//                 detailId: item._id.toString(),
//             },
//         })),
//         fallback: 'blocking',
//         // true for imediate response just show empty page & Blocking for wait until content is ready
//     };
// }

// export async function getStaticProps({ params: { detailId } }) {
//     const client = await MongoClient.connect(
//         'mongodb+srv://usman:8899@cluster0.9tsdnk0.mongodb.net/nextjs-practice?retryWrites=true&w=majority',
//     );
//     const db = client.db();
//     const contactsCollection = db.collection('contacts');
//     const data = await contactsCollection.findOne({ _id: new ObjectId(detailId) });
//     client.close();
//     return {
//         props: {
//             contact: {
//                 _id: data._id.toString(),
//                 name: data.name,
//                 contact: data.contact,
//                 birth: data.birth,
//                 email: data.email,
//             },
//         },
//         revalidate: 1,
//     };
// }
