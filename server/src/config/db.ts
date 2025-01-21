import mongoose from 'mongoose';

export const connectDB = async () => {
     try {
          await mongoose.connect(process.env.DATABASE_URL!);
          console.log('✅ Database connected');
     } catch (error) {
          console.log('❌ Failed to connect database: ', error);
          process.exit(1);
     }
}