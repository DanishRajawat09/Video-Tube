// require('dotenv').config({path : './env'})

import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";

dotenv.config({
  path: "./env",
});

connectDB().then((params) => {
    app.on("error", (error) => {
      console.log("err : ", error);
      process.exit(1);
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at Port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Mongo DB connection failed !! ", err);
  });















  
// import express from "express";
// const app = express()(async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("error", error);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("ERROR : ", error);
//     throw error;
//   }
// })();
