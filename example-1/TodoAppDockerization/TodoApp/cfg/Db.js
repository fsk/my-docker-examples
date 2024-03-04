import mongoose from "mongoose";
import pkg from 'colors';
const {stripColors} = pkg;


const connectToDb = async () => {
    try {

        const conn = await mongoose.connect(process.env.MONGO_URI)

        console.log(`MongoDB connected: ${conn.connection.host}`.stripColors.cyan)

    }catch (error) {
        console.log('error: ', error )
        process.exit(1)
    }
}

export { connectToDb }