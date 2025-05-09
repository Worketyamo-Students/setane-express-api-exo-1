import express from "express";
import bodyParser from "body-parser";
import router from "./Routes/routes.js";

const app = express();

app.use(bodyParser.json());
app.listen(3000, () => {
  console.log("server is running on port 3000");
});
app.use(router);
