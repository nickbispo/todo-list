import mongoose from "mongoose";

export default () => {
  const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI as string);
      console.log('>connectDB: conectado ao banco de dados');
    } catch (error) {
      console.log(`>connectDB: ${error}`);
    }
  };
  const disconnectDB = () => {
    try {
      mongoose.disconnect();
      console.log('>disconnectDB: desconectado com sucesso');
    } catch (error) {
      console.log(`>disconnectDB: ${error}`);
    }
  };
  
  return {
    connectDB,
    disconnectDB
  }
};