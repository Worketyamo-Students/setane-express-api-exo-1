import express from "express";
import fs from "fs";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.listen(3000, () => {
  console.log("server is running on port 3000");
});

function readDB() {
  let database = fs.readFileSync("./database.json", "utf-8", (err, data) => {
    if (err) throw err;
  });
  database = JSON.parse(database);
  return database;
}
const gen = "100";

app.get("/student", (req, res) => {
  res.send(readDB());
  console.log(readDB());
  res.status(200);
});

app.post("/student", (req, res) => {
  const Id = "worketyamo-" + Math.floor(Math.random() * gen);
  const db = readDB();
  req.params.Id = Id;
  console.log(req.query.Id);
  // if (req.body.name || req.body.email || req.body.phone) {
  //   for (let i = 0; i < db.length; i++) {
  //     if (req.body.id != db[i].id) {
  //     }
  //   }
  // }
  return res.status(401).json({ msg: { error: "bad request" } });
  console.log(readDB());
});
