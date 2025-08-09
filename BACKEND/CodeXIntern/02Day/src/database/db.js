import mongoose from 'mongoose';

const connectDb = async() => {
    try {
        const response = await mongoose.connect('mongodb+srv://somilnegi:2025@cluster0.xp8ikis.mongodb.net/tempDB')
        console.log('Connected to MongoDB');
    }
    catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

export default connectDb;