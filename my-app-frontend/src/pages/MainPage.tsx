import axios from "axios";
import { useEffect, useState } from "react";
import { LightSwitch } from "../components/lightSwitch";
import { GET_USERS } from "../routes";
import { UserType, lightType, UsersRecord } from "../../../types/types";
import { UserCard } from "../components/UserCard";

export const MainPage = () => {
  const [power, setPower] = useState(false);
  const [users, setUsers] = useState<UserType[]>([]);
  const userRecordToArr = (users: UsersRecord) => Object.keys(users).map((name) => users[name]);

  const compareAndSetUsers = (prev: UsersRecord, curr: UsersRecord) => {
    setUsers(userRecordToArr({...prev, ...curr}))
  }
  const compareAndSetPower = (prev: lightType, curr: lightType) => {
    if (prev != curr) {
      setPower(curr);
    }
  }
  useEffect(() => {
    axios.get(GET_USERS).then(usersResp => {
      const userData = usersResp.data;
      setUsers(userRecordToArr(userData));
    });
  }, [power, users]);
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
