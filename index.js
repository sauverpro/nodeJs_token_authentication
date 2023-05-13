const mysql = require("mysql");
const { v4: uuid } = require("uuid");
const express = require("express");
const env = require("dotenv").config();
const cookieParser = require("cookie-parser");
const verifyToken = require("./middlewares/tokenCheck")

const userRoutes= require("./routes/users.route.js") //this is the users routes for login and signup
// const { connection } = require("./config/db.config.js")
const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use("/signup", userRoutes); // signup endpoint 
app.use("/login", userRoutes); // login endpoint 
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "post",
});
app.post("/save",verifyToken, (req, res) => {
  let content = req.body;
  let firstname= content.firstname;
  let lastname= content.lastname;
  let gender= content.gender;
  let address= content.address;
  const id = uuid();
  // res.status(200).json({data: content, id: id})
  // res.send(`firstname:${firstname}\n lastname:${lastname}\n gender:${gender}\n address:${address}\n id:${id}`);
  connection.connect(() => {
    console.log("connected");
    let sql = `INSERT INTO posts VALUES('','${id}','${firstname}','${lastname}','${gender}','${address}')`;
    connection.query(sql, (erro, result) => {
      if (erro) throw erro;
      res.json({ id: id, message: content, status: 200});
    });
  });
});
app.get("/view/:id", (req, res) => {
  let id = req.params.id;
  connection.connect(() => {
    console.log("connected");
    let sql = `SELECT * FROM posts WHERE student_id= '${id}'`;
    connection.query(sql, (error, response) => {
      if (error) throw error;
      console.log(response);
      res.send(response);
    });
  });
});
app.get("/all", (req, res) => {
  connection.connect(() => {
    console.log("connected");
    let sql = `SELECT * FROM posts`;
    connection.query(sql, (err,response) => {
      let all = [response];
    // console.log(all)
        console.log(response);
      res.send(all);
    });
  });
});
app.put("/update/:id",verifyToken,(req, res) => {
  const id = req.params.id;
  let content = req.body;
  let firstname= content.firstname;
  let lastname= content.lastname;
  let gender= content.gender;
  let address= content.address;
  connection.connect(() => {
    console.log("connected")
    let sql = `UPDATE posts SET firstname='${firstname}',lastname='${lastname}',gender='${gender}',address='${address}' WHERE student_id='${id}'`;
    connection.query(sql,(response) => {
      res.status(200).json({message: "updated well!!!",data: content});
    });
  });
});
app.delete("/delete/:id",verifyToken, (req, res) => {
  const id = req.params.id;
  connection.connect(() => {
    console.log("connected");
    let sql = `DELETE FROM posts WHERE student_id='${id}'`;
    connection.query(sql, (response) => {
      res.status(200).json({message:"deleted well"});
    });
  });
});
app.get("/", (req, res) => {
  res.send("welcome to the server");
});

app.listen(port, () =>
  console.log(`our server is running on http://localhost:${port}`)
);
