import { useContext } from "react";
import UserContext from "../context/UserContext";
import UserToggle from "./UserToggle";

const UserShow = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <UserToggle />
      {user ? `Estas logueado como ${user}` : "Estas deslogeado"}
    </div>
  );
};

export default UserShow;
