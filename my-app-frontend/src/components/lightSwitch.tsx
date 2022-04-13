import { useState } from "react";

type Props = {
  toggle: () => void;
  on: boolean;
};

/**
 * A switch simulating a multi-switch in a home.
 * The switch can control the main power but also has its own state.
 * A circuit is closed if an odd number of switches are set to the "up" position.
 * @param param0
 * @returns
 */
export const LightSwitch = ({ toggle, on }: Props) => {
  const [position, setPosition] = useState(false);
  const clickButton = () => {
    toggle();
    setPosition(!position);
  };
  return (
    <>
      <button onClick={clickButton}>power: {on ? "on" : "off"}</button>
      <div>position: {position ? "up" : "down"}</div>
    </>
  );
};
