import { users } from "./state";
import { UserType } from "./types";

export const getUserByName = (name: string) => users[name];

export const updateUserByName = (name: string, update: Partial<UserType>) => {
  const userBeforeUpdate = getUserByName(name);
  users[name] = { ...update, ...userBeforeUpdate };
};
