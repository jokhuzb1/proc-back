import mongoose from 'mongoose';
import * as dotenv from 'dotenv'
dotenv.config()

const dbURI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.fhz8ge4.mongodb.net/store?retryWrites=true&w=majority`;

export default mongoose.connect(dbURI, () => console.log('Database connected'));


