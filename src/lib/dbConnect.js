import mongoose, { connection } from "mongoose"

const connection = {};

async function bdConnect() {
  if (connection.isConnected) {
    console.log("Aleready connected to database");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGOBD_URI || "", {});

    connection.isConnected =  db.connection[0].readyState

    console.log("DB Connected Successfully");
  } catch (error) {
    console.log("Database connection failed ", error)
    process.exit(1)
  }
}

export default bdConnect;