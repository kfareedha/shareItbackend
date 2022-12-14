import mongoose from "mongoose";
export const mongoconnection = mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("db connected");
  })
  .catch((e) => {
    console.log("db not connected");
  });
