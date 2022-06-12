require('dotenv').config()
const connetToMongo = require("./db");
const express = require("express");
const cors=require('cors');
const authT=require('./routes/auth');
const notesT=require('./routes/notes');
connetToMongo();

const app = express();
const port = 5000|| process.env.PORT;

//
app.use(cors());
app.use(express.json());
// console.log(process.env.JWTSecret);
app.use("/api/auth", authT);
app.use("/api/notes", notesT);
app.listen(port, () => {
  console.log(`INotebook listening on port ${port}`);
});
