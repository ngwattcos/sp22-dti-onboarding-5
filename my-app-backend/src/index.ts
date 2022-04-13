import express from "express";
import path from "path";
import cors from "cors";

import { Actions, GameState, UserType } from "../../types/types";
import { createUser } from "./data";

const app = express();
const port = 8080; // default port to listen

const state: GameState = {
  users: {
    Alice: createUser("Alice", 1),
    Bob: createUser("Bob", 2),
    Charlie: createUser("Charlie", 3),
  },
  lightsOn: false
};

const actions: Actions = {
  getAllUsers: () => state.users,

  getUserByName: (name: string) => state.users[name],

  getGameState: () => state,

  updateUserByName: (name: string, update: Partial<UserType>) => {
    const userBeforeUpdate = state.users[name];
    state.users[name] = { ...userBeforeUpdate, ...update };
  },

  toggleLights: () => {
    state.lightsOn = !state.lightsOn;
  },
};


// Configure Express to use EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const allowedOrigins = ["http://localhost:3000"];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};
app.use(cors(options));

app.get("/", (req, res) => {
  res.send(actions.getGameState());
});
app.get("/users/", (req, res) => {
  res.send(actions.getAllUsers());
});

app.get("/user/:name", (req, res) => {
  res.send(actions.getUserByName(req.params.name));
});

app.post("/user/:name", (req, res) => {
  const userName = req.params.name;
  actions.updateUserByName(userName, req.body as Partial<UserType>);
  const partialUpdate = actions.getUserByName(userName);

  res.send(partialUpdate);
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
