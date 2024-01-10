import mongoose from "mongoose";
import colors from "colors";

const dbConnection = async () => {
  try {
    let con = await mongoose.connect(
      `${process.env.CONNECTION_STRING}`
    );
    console.log(
      `Database Connected Successfully ${con.connection.host}`.bgGreen.white
    );
  } catch (error) {
    console.log(`Error while connecting database ${error}`.bgRed.white);
  }
};

export default dbConnection;
