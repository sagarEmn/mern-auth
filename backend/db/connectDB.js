import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        console.log("mongo_uri: ", process.env.MONGO_URI);
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`); 
        console.log(process.env);
    } catch (error) {
        console.log("Error connection to MongoDB: ", error.message);
        process.exit(1);
    }
}