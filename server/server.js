"use strict";

import express from "express";
import cors from "cors";
import mysql from "mysql2";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());

const port = 4000;

const db = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  database: "ecom",
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
});

db.connect((err) => {
  if (err) throw err;
  console.log("connection succesful");
});

app.get("/", (req, res) => {
  db.query("SELECT * FROM items", (err, result) => {
    if (err) return err;
    res.send(result);
  });
});

app.listen(port, (err) => {
  if (err) return err;
  console.log(`running on port ${port}...`);
});
