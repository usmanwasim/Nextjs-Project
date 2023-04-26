import { MongoClient, ObjectId } from 'mongodb';

export default async function Contact(req, res) {
    const {
        method,
        body,
        query: { id },
    } = req;

    if (method === 'DELETE') {
        const client = await MongoClient.connect(
            'mongodb+srv://usman:8899@cluster0.9tsdnk0.mongodb.net/nextjs-practice?retryWrites=true&w=majority',
        );
        const db = client.db();
        const contactsCollection = db.collection('contacts');
        const data = await contactsCollection.deleteOne({ _id: new ObjectId(id) });
        client.close();
        res.status(200).json({
            message: 'Item Delete Successfully',
            data: data,
        });
    }

    if (method === 'PUT') {
        try {
            const client = await MongoClient.connect(
                'mongodb+srv://usman:8899@cluster0.9tsdnk0.mongodb.net/nextjs-practice?retryWrites=true&w=majority',
            );
            const db = client.db();
            const contactsCollection = db.collection('contacts');
            const data = await contactsCollection.updateOne(
                { _id: new ObjectId(id) },
                { $set: body },
            );
            client.close();
            res.status(200).json({
                message: 'Item Update Successfully',
                data: data,
            });
        } catch (err) {
            res.status(500).json({
                message: 'Something went wrong',
            });
        }
    }
    // if (method === 'Update') {
    //     const client = await MongoClient.connect(
    //         'mongodb+srv://usman:8899@cluster0.9tsdnk0.mongodb.net/nextjs-practice?retryWrites=true&w=majority',
    //     );
    //     const db = client.db();
    //     const contactsCollection = db.collection('contacts');
    //     const data = await contactsCollection.updateOne({ _id: new ObjectId(id) }, { $set: body });
    //     client.close();
    //     res.status(200).json({
    //         message: 'Item Update Successfully',
    //         data: data,
    //     });
    // }
}
