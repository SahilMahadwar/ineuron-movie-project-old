const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose.set("strictQuery", false);

  const conn = await mongoose.connect(process.env.MONGO_URL, {
    dbName: "movieapp",
  });
  console.log(`Mongodb Connected: ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;
