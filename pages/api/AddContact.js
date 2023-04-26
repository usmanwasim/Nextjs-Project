// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient } from 'mongodb';
export default async function AddContact(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        const client = await MongoClient.connect(
            'mongodb+srv://usman:8899@cluster0.9tsdnk0.mongodb.net/nextjs-practice?retryWrites=true&w=majority',
        );
        const db = client.db();
        const contactsCollection = db.collection('contacts');
        await contactsCollection.insertOne(data);
        client.close();
        res.status(201).json({
            message: 'Contact added successfully',
        });
    }
}
