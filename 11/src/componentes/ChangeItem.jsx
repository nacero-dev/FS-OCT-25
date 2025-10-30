import { useState } from "react";
import "./ChangeItem.css";

const ChangeItem = ({ change }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <li
      className={isActive ? "active" : ""}
      onClick={handleClick}
    >
      {isActive ? change.title2 : change.title}
    </li>
  );
};

export default ChangeItem;
