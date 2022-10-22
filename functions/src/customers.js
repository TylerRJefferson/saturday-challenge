import { dbConnect } from "./dbConnect.js";

export async function newCustomer(req, res) {
  const db = dbConnect();
  const doc = await db.collection('customers').add(req.body)
    .catch(err => res.status(500).send({ success: false, message: err }));
  res.status(201).send({ success: true, message: 'New customer added: ' + doc.id});
}