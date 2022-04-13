import { UserType } from "./types";

export const createUser = (name: string, age: number): UserType => {
  return { name, age };
};
