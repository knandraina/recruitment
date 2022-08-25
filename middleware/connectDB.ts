import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

const url_mongo: any = process.env.NEXT_PUBLIC_MONGODB_URL;

const connectDB = (handler: Function) => async (req: any, res: any) => {
    if (mongoose.connections[0].readyState) {
        // Use current db connection
        console.log('Already connected');
        return handler(req, res);
    }
    // Use new db connection
    await mongoose.connect(url_mongo);
    console.log('Connection in progress... Done');
    return handler(req, res);
};

export default connectDB;