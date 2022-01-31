import monogoose from 'mongoose';

const connectToDatabase = async () => {
  try{
    await monogoose.connect(process.env.MONGO_URL),{
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
    console.log('connected to database');
  }catch(err){
    console.log(err);
  }
}

export default connectToDatabase;