import { UserType } from "./types";
import { getUserByName, updateUserByName } from "./impl";

export const getUser = (name: string) => getUserByName;

export const updateUser = (name: string, update: Partial<UserType>) => {
  updateUserByName(name, update);
};
