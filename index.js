require('dotenv').config()
const connetToMongo = require("./db");
const express = require("express");
const cors=require('cors');
const authT=require('./routes/auth');
const notesT=require('./routes/notes');
connetToMongo();

const app = express();
const port = 5000|| process.env.PORT;


app.use(express.json());
app.use("/api/auth", authT);
app.use("/api/notes", notesT);
if(process.env.NODE_ENV=="production"){
  app.use(express.static("frontend/build"));

  const path = require("path");

  app.get("*", (req, res) => {

      res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));

  })
}




// console.log(process.env.JWTSecret);

app.listen(port, () => {
  console.log(`INotebook listening on port ${port}`);
});
