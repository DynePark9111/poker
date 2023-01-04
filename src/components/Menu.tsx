import styles from "../styles/Menu.module.scss";
import { FaBars } from "react-icons/fa";
import { ReactNode, useState } from "react";
import Btn from "./Btn";

type ListBtnProps = {
  title: string;
  icon: ReactNode;
};

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
      {isOpen && (
        <ul className={styles.menuItems}>
          <ListBtn title={"Settings"} icon={<FaBars />} />
          <ListBtn title={"Settings"} icon={<FaBars />} />
          <ListBtn title={"Settings"} icon={<FaBars />} />
          <ListBtn title={"Settings"} icon={<FaBars />} />
          <ListBtn title={"Settings"} icon={<FaBars />} />
          <ListBtn title={"Settings"} icon={<FaBars />} />
          <ListBtn title={"Settings"} icon={<FaBars />} />
          <ListBtn title={"Settings"} icon={<FaBars />} />
          <ListBtn title={"Settings"} icon={<FaBars />} />
          <ListBtn title={"Settings"} icon={<FaBars />} />
          <ListBtn title={"Settings"} icon={<FaBars />} />
          <ListBtn title={"Settings"} icon={<FaBars />} />
          <ListBtn title={"Settings"} icon={<FaBars />} />
          <ListBtn title={"Settings"} icon={<FaBars />} />
          <ListBtn title={"Settings"} icon={<FaBars />} />
          <ListBtn title={"Settings"} icon={<FaBars />} />
          <ListBtn title={"Settings"} icon={<FaBars />} />
          <ListBtn title={"Settings"} icon={<FaBars />} />
          <ListBtn title={"Settings"} icon={<FaBars />} />
          <ListBtn title={"Settings"} icon={<FaBars />} />
          <ListBtn title={"Settings"} icon={<FaBars />} />
          <ListBtn title={"Settings"} icon={<FaBars />} />
          <ListBtn title={"Settings"} icon={<FaBars />} />
          <ListBtn title={"Settings"} icon={<FaBars />} />
          <ListBtn title={"Settings"} icon={<FaBars />} />
          <ListBtn title={"Settings"} icon={<FaBars />} />
          <ListBtn title={"Settings"} icon={<FaBars />} />
          <ListBtn title={"Settings"} icon={<FaBars />} />
          <ListBtn title={"Settings"} icon={<FaBars />} />
          <ListBtn title={"Settings"} icon={<FaBars />} />
          <ListBtn title={"Settings"} icon={<FaBars />} />
          <ListBtn title={"Settings"} icon={<FaBars />} />
          <ListBtn title={"Settings"} icon={<FaBars />} />
          <ListBtn title={"Settings"} icon={<FaBars />} />
          <ListBtn title={"Settings"} icon={<FaBars />} />
          <ListBtn title={"Settings"} icon={<FaBars />} />
        </ul>
      )}
    </div>
  );
}

function ListBtn({ title, icon }: ListBtnProps) {
  return (
    <li className={styles.ListBtn}>
      <Btn>
        <div className={styles.wrapper}>
          <div className={styles.icon}>{icon}</div>
          <div className={styles.text}>{title.toUpperCase()}</div>
        </div>
      </Btn>
    </li>
  );
}
