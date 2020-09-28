require("dotenv").config();
const express = require("express"),
  cors = require("cors"),
  PORT = process.env.PORT || 4000,
  app = express();

//MIDDLEWARES
app.use(express.json());
app.use(cors());

//ROUTES

app.listen(4000, () => {
  console.log("Server up at http://localhost:4000");
});
