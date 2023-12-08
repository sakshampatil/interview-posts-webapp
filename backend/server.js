const express = require("express");
require("dotenv").config();
const cors = require("cors");
const mongo = require("mongoose");

const app = express();
app.use(cors());

//connecting to mongoose
const connect = async () => {
  try {
    await mongo.connect(process.env.MONGO_CONNECT);
    console.log("connected to mongodb");
  } catch (error) {
    console.log(error);
  }
};
connect();

//routes
require("./app/routes/index").default(app);

//starting server
const port = process.env.PORT || 3001;
app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else [console.log(`Server is running on PORT = ${port}`)];
});
