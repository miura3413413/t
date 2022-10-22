import mongoose from 'mongoose';
import { TweetType } from '../src/models/TweetModel';


const connectMongo = async () => mongoose.connect(process.env.MONGODB_URI as string);


const db = { connectMongo };

export default db