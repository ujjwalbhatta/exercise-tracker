const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

//middlewares
app.use(cors());
app.use(express.json());
require("dotenv").config();

//db connect
// const url = process.env.URL;
// mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true });

// const connection = mongoose.connection;
// connection.once("open", () => {
//   console.log("Mongodb connected...");
// });

const db = require("./config/keys.js").URI;

mongoose
  .connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => console.log("MongoDb connected.."))
  .catch((err) => console.log(err));

//routes
app.use("/users", require("./routes/users"));
app.use("/exercises", require("./routes/exercise"));

//port connect
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
