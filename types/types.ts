export type UserType = {
  name: string;
  age: number;
};

export type UsersRecord = Record<string, UserType>;
export type lightType = boolean

export type GameState = {
  users: UsersRecord;
  lightsOn: lightType;
}

export interface Actions {
  getAllUsers: () => UsersRecord,
  getUserByName: (name: string) => UserType,
  getGameState: () => GameState,
  updateUserByName: (name: string, update: Partial<UserType>) => void,
  toggleLights: () => void

}