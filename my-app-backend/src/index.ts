import express from "express";
import path from "path";
import cors from "cors";

import { UserType } from "../../types/types";
import { createUser } from "./data";

const app = express();
const port = 8080; // default port to listen

let state: any = {};
state.users = {
  Alice: createUser("Alice", 1),
  Bob: createUser("Bob", 2),
  Charlie: createUser("Charlie", 3),
};

state.lightsOn = false;

let actions: any = {};
actions.getAllUsers = () =>
  Object.keys(state.users).map((name) => state.users[name]);

actions.getUserByName = (name: string) => state.users[name];

actions.updateUserByName = (name: string, update: Partial<UserType>) => {
  const userBeforeUpdate = state.users[name];
  state.users[name] = { ...userBeforeUpdate, ...update };
};

actions.toggleLights = () => {
  state.lightsOn = !state.lightsOn;
};

// Configure Express to use EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const allowedOrigins = ["http://localhost:3000"];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};
app.use(cors(options));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("potato butt");
});
app.get("/users/", (req, res) => {
  res.send(actions.getUsers());
});

app.get("/user/:name", (req, res) => {
  res.send(actions.getUser(req.params.name));
});

app.post("/user/:name", (req, res) => {
  const userName = req.params.name;
  actions.updateUser(userName, req.body as Partial<UserType>);
  res.send(actions.getUser(userName));
});

// add one year to everyone else
app.post("/sabotage/add-one-year/:name", (req, res) => {
  const userName = req.params.name;
  res.send("success?");
});

// toggle the lights
app.post("/sabotage/toggle-lights", (req, res) => {
  res.send("success?");
});

// start the express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
