import functions from "firebase-functions";
import express from "express";
import { newCustomer } from "./src/customers.js";

const app = express();
app.use(express.json());

app.post('/customers', newCustomer)

app.get('/test', (req, res) => res.send('API working!'))
export const api = functions.https.onRequest(app)
