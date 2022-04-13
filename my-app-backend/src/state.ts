import { createUser } from "./data";
import { UserType } from "./types";

export const users: Record<string, UserType> = {
  a: createUser("a", 1),
  b: createUser("b", 2),
  c: createUser("c", 3),
};

export const lightsOn = true;
