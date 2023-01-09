import styles from "../styles/OnOff.module.scss";
import Btn from "./Btn";

type OnOffProps = {
  title?: string;
  isOn: boolean;
  toggle: () => void;
};

export default function OnOff({ title, toggle, isOn }: OnOffProps) {
  return (
    <div className={styles.OnOff} onClick={toggle}>
      <label>{title}</label>
      <div className={styles.switch}>
        <Btn color="green" disabled={isOn ? false : true}>
          <div className={styles.btn}>ON</div>
        </Btn>
        <Btn color="red" disabled={isOn ? true : false}>
          <div className={styles.btn}>OFF</div>
        </Btn>
      </div>
    </div>
  );
}
