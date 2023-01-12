import styles from "../styles/Menu.module.scss";
import { FaBars, FaHome } from "react-icons/fa";
import { useContext, useState } from "react";
import Btn from "./Btn";
import shop from "../assets/icons/shop.webp";
import trophy from "../assets/icons/trophy.webp";
import friend from "../assets/icons/people.webp";
import robot from "../assets/icons/robot.webp";
import profile from "../assets/icons/profile.webp";
import { useNavigate } from "react-router-dom";
import { AlertContext } from "../contexts/AlertContext";
import { UserContext } from "../contexts/UserContext";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.Menu}>
      <Btn onClick={() => setIsOpen((prev) => !prev)}>
        <div className={styles.faBars}>
          <FaBars />
        </div>
      </Btn>
      {isOpen && <MenuItems />}
    </div>
  );
}

function MenuItems() {
  const { addAlert } = useContext(AlertContext);
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  function underDev() {
    addAlert("Under development", "error");
  }
  function logoutClick() {
    addAlert(`Goodbye ${user.username}`, "success");
    logout();
  }

  return (
    <ul className={styles.MenuItems}>
      <ListBtn title={"home"} onClick={() => navigate("/")} />
      {user.username === "guest" ? (
        <ListBtn title={"login"} onClick={() => navigate("/auth")} />
      ) : (
        <ListBtn title={"logout"} onClick={logoutClick} />
      )}
      <ListBtn title={"settings"} onClick={() => navigate("/settings")} />
      <ListBtn
        title={"poker"}
        icon={trophy}
        onClick={() => navigate("/poker")}
      />
      <ListBtn title={"shop"} icon={shop} onClick={() => navigate("/shop")} />
      <ListBtn title={"my"} icon={profile} onClick={() => navigate("/my")} />
      <ListBtn
        title={"friend"}
        icon={friend}
        onClick={underDev}
        disabled={true}
      />
      <ListBtn
        title={"not found"}
        icon={robot}
        onClick={() => navigate("notFound")}
      />
    </ul>
  );
}

function ListBtn({
  title,
  icon,
  disabled = false,
  onClick = () => console.log("ListBtn clicked"),
}: ListBtnProps) {
  return (
    <li
      className={styles.ListBtn}
      onClick={onClick}
      id={disabled ? styles.disabled : ""}
    >
      <Btn>
        <div className={styles.wrapper}>
          <div className={styles.icon}>
            <img src={icon} />
          </div>
          <div className={styles.text}>{title.toUpperCase()}</div>
        </div>
      </Btn>
    </li>
  );
}

type ListBtnProps = {
  title: string;
  icon?: string;
  onClick?: () => void;
  disabled?: boolean;
};
