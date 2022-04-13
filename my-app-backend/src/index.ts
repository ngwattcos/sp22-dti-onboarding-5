import express from "express";
import path from "path";

import * as actions from "./actions";
import { UserType } from "./types";

const app = express();
const port = 8080; // default port to listen

// Configure Express to use EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/users/:name", (req, res) => {
  res.send(actions.getUser(req.params.name));
});

app.post("/users/:name", (req, res) => {
  const userName = req.params.name;
  actions.updateUser(userName, req.body as Partial<UserType>);
  res.send(actions.getUser(userName));
});

app.post("/sabotage/add-one-year/:name", (req, res) => {
  const userName = req.params.name;
  res.send("success?");
});

app.post("/sabotage/toggle-lights", (req, res) => {
  res.send("success?");
});

// start the express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
