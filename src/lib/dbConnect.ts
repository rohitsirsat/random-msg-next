import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect() {
  if (connection.isConnected) {
    console.log("Already connected");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || "", {});
    // TOTO: log(db) and log(db.connections)
    connection.isConnected = db.connections[0].readyState;

    console.log("DB Connected Successfully");
  } catch (error) {
    console.log("DB Connection Failed", error);

    process.exit(1);
  }
}

export default dbConnect;
