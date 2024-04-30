import mongoose from 'mongoose';
import Artist from './models/artist';
import Director from './models/director';
import User from './models/user';
import Movie from './models/movie';
import Comment from './models/comment';

// Connection to MongoDB

const MONGODB_URI = process.env.MONGODB_URI;

let cached = (global).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
    if (cached.conn) return cached.conn;

    if (!MONGODB_URI) throw new Error('MONGODB_URI is missing');

    cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
        dbName: "moviesweb",
        bufferCommands: true
    })

    cached.conn = await cached.promise;

    return cached.conn;
}