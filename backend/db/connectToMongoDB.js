import mongoose, { connect } from "mongoose";

const connectToMongoDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/chatApp', {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        console.log('MongoDB Connected Successfully!');
      } catch (error) {
        console.error('MongoDB Connection Failed:', error.message);
        process.exit(1); // Exit process with failure
      }
}

export default connectToMongoDB;