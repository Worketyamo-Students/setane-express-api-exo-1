import fs from "fs";

const gen = "100";
function readDB() {
  let database = fs.readFileSync("./database.json", "utf-8", (err, data) => {
    if (err) throw err;
  });
  database = JSON.parse(database);
  return database;
}
export const controller = {
  getStudents: (req, res) => {
    console.log(readDB());
    res.status(200).json(readDB());
  },
  postStudent: (req, res) => {
    if (req.body.name || req.body.email || req.body.phone) {
      const Id = "worketyamo-" + Math.floor(Math.random() * gen);
      const student = {
        id: Id,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
      };
      const db = readDB();
      db.push(student);
      fs.writeFileSync("./database.json", JSON.stringify(db), (err) => {
        if (err) throw err;
      });
      return res.status(200).json({ success: student });
    }
    return res.status(401).json({ error: "bad request" });
  },
};
