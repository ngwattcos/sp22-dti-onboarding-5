import { UserType } from "types";

import "../App.css";

type Props = UserType;

export const UserCard = ({ name, age }: Props) => {
  return (
    <>
      <div className="user-card">
        <div>{name}</div>
        <div>age: {age}</div>
      </div>
    </>
  );
};
