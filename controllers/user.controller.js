const bcrypt = require("bcrypt"); // hashing module
const jwt = require("jsonwebtoken");
const mysql = require("mysql"); // mysql module 
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "post",
});

// Class contains all user controller functions

class UserController {
  static async registerUser(req, res) { // register 
    const { username, password } = req.body;
    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);
    res.status(200).json({ username, password, hashedPassword });
    try {
      const saveUserData = await connection.connect(() => {
        console.log("connected");
        let sql = `INSERT INTO users VALUES('','${username}','${hashedPassword}')`;
        connection.query(sql, () => {
          res
            .status(200)
            .json({ id: hashedPassword, message: saveUserData, status: 200 });
        });
      });
    } catch (error) {
      res.status(400).json({ status: 400, message: error.message });
    }
  }
  static async logUser(req, res) { // Login
    const { username, password } = req.body;
    try {
      connection.connect(async () => {
        console.log("connected");
        let sql = `SELECT * FROM users WHERE username = '${username}'`;
        await connection.query(sql, (error, response) => {
          if (error) throw error;
          const hashedPassword = response[0].password;
          const user_id = response[0].id;
          const checkPwd = bcrypt.compare(password, hashedPassword);
          if (checkPwd) {
            const token = jwt.sign(
              { user_id, username },
              process.env.JWT_SECRET,
              { expiresIn: "1w" }
            );
            res.cookie("authToken", token, {
              httpOnly: true,
              maxAge: 1000 * 84000 * 7,
            });
            res
              .status(200)
              .json({ status: 200, message: "User logged in!", token });
          } else {
            res
              .status(400)
              .json({ status: 400, message: "Incorrect passowrd" });
          }
        });
      });
    } catch (error) {
      res.status(400).json({ status: 400, message: error.message });
    }
  }
}

module.exports = UserController;
