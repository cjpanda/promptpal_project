import mongoose from "mongoose";

let isConnected = false; //tracks the DB connection status

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);


  //Check for DB Connection 
  if(isConnected) {
    console.log('MongoDB is already Connected')
    return;
  }

  //if not Connected then: =>
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    isConnected = true
    console.log('MongoDB Connected')
  } catch (error) {
    console.log(error)
  }

}

