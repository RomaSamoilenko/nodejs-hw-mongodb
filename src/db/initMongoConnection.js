import { mongoose } from "mongoose";
import { env } from "../utils/env.js";

export const initMongoConnection = async () => {
    try {
      const user = env('MONGODB_USER');
    const pwd = env('MONGODB_PASSWORD');
    const url = env('MONGODB_URL');
    const db = env('MONGODB_DB');
                   
    if (!user || !pwd || !url || !db) {
        throw new Error('Missing environment variables for MongoDB connection');
    }
   
          
        await mongoose.connect(
            `mongodb+srv://${user}:${pwd}@${url}/${db}?retryWrites=true&w=majority&appName=Cluster0`);
        console.log('Mongo connection successfully established!');
    } catch (error) {
        console.log('Error while setting up mongo connection', error);
        throw error;
    }

};