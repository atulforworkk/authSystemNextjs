import mongoose from "mongoose";
export async function connect() {
  try {
    mongoose.connect("mongodb+srv://atul:atul12345@cluster0.b4yipig.mongodb.net/");
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("THE DB HAS BEEN CONNECTED SUCCESSFULLY");
    });
    connection.on("error", (err) => {
      console.log("mongodb has an error", err);
    });
  } catch (error) {
    console.log("SOMETHING WENT WRONG ");
    console.log("MongoDB URI:", process.env.MONGO_URI);

  }
}


