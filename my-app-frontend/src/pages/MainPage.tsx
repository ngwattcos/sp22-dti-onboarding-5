import axios from "axios";
import { useEffect, useState } from "react";
import { LightSwitch } from "../components/lightSwitch";
import { GET_USERS } from "../routes";
import { UserType } from "../../../types/types";
import { UserCard } from "../components/UserCard";

export const MainPage = () => {
  const [power, setPower] = useState(false);
  const [users, setUsers] = useState<UserType[]>([]);
  useEffect(() => {
    axios.get(GET_USERS).then((usersResp) => {
      setUsers(usersResp.data as UserType[]);
    });
  }, [power]);
  return (
    <>
      <LightSwitch toggle={() => setPower(!power)} on={power}></LightSwitch>
      <div className="user-diplay">
        {users.map((user) => (
          <UserCard name={user.name} age={user.age}></UserCard>
        ))}
      </div>
    </>
  );
};
