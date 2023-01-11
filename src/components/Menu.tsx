import styles from "../styles/Menu.module.scss";
import { FaBars } from "react-icons/fa";
import { useContext, useState } from "react";
import Btn from "./Btn";
import rank from "../assets/icons/rank.webp";
import trophy from "../assets/icons/trophy.webp";
import news from "../assets/icons/news.webp";
import friend from "../assets/icons/people.webp";
import board from "../assets/icons/board.webp";
import report from "../assets/icons/robot2.webp";
import star from "../assets/icons/star.webp";
import { useNavigate } from "react-router-dom";
import { AlertContext } from "../contexts/AlertContext";
import { UserContext } from "../contexts/UserContext";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.Menu}>
      <div
        className={styles.menuBtn}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Btn>
          <div className={styles.faBars}>
            <FaBars />
          </div>
        </Btn>
      </div>
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
      <ListBtn title={"home"} icon={star} onClick={() => navigate("/")} />
      <ListBtn
        title={"poker"}
        icon={trophy}
        onClick={() => navigate("/poker")}
      />
      <ListBtn title={"my"} icon={rank} onClick={() => navigate("/my")} />

      {user.username === "guest" ? (
        <ListBtn
          title={"login"}
          icon={news}
          onClick={() => navigate("/auth")}
        />
      ) : (
        <ListBtn title={"logout"} icon={news} onClick={logoutClick} />
      )}

      <ListBtn
        title={"settings"}
        icon={rank}
        onClick={() => navigate("/settings")}
      />
      <ListBtn
        title={"friend"}
        icon={friend}
        onClick={underDev}
        disabled={true}
      />
      <ListBtn
        title={"board"}
        icon={board}
        onClick={underDev}
        disabled={true}
      />
      <ListBtn
        title={"not found"}
        icon={report}
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
