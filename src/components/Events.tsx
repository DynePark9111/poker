import styles from "../styles/Events.module.scss";
import robot from "../assets/icons/robot.webp";
import duel from "../assets/icons/duel.webp";
import { useNavigate } from "react-router-dom";
import InfoIcon from "./InfoIcon";
import locks from "../assets/images/bg_lock.webp";
import poker from "../assets/images/bg_poker.webp";
import { useContext } from "react";
import { AlertContext } from "../contexts/AlertContext";

export default function Events() {
  return (
    <div className={styles.Events}>
      <Event
        icon={duel}
        title="JACKS OR BETTER"
        subtitle="5 card poker game"
        time="01H 02M"
        link="poker"
        image={poker}
        color="#A60528"
      />
      <Event
        icon={"X"}
        title="title"
        subtitle="subtitle"
        time="1h 2m"
        link=""
        image="image"
        color="red"
        available={false}
      />
      <Event
        icon={"X"}
        title="title"
        subtitle="subtitle"
        time="1h 2m"
        link=""
        image="image"
        color="red"
        available={false}
      />
      <Event
        icon={"X"}
        title="title"
        subtitle="subtitle"
        time="1h 2m"
        link=""
        image="image"
        color="red"
        available={false}
      />
      <Event
        icon={"X"}
        title="title"
        subtitle="subtitle"
        time="1h 2m"
        link=""
        image="image"
        color="red"
        available={false}
      />
    </div>
  );
}

function Event({
  icon,
  title,
  subtitle,
  time,
  link,
  image,
  color = "red",
  available = true,
}: EventProps) {
  const { addAlert } = useContext(AlertContext);
  const navigate = useNavigate();
  let backgroundColor = available ? color : "#00000000";

  let navigateOrAlert = available
    ? () => navigate(link)
    : () => addAlert("Under development", "error");

  return (
    <div className={styles.Event} id={available ? "" : "disabled"}>
      <InfoIcon open={link} />
      <div className={styles.wrapper} onClick={navigateOrAlert}>
        <div className={styles.time}>
          New event: {available ? time : disabled.time}
        </div>

        <div className={styles.info} style={{ backgroundColor }}>
          <div className={styles.icon}>
            <img
              src={available ? icon : disabled.icon}
              alt={available ? title : "unavailable"}
            />
          </div>
          <div className={styles.text}>
            <div className={styles.title}>
              {available ? title : disabled.title}
            </div>
            <div className={styles.subtitle}>
              {available ? subtitle : disabled.subtitle}
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <img src={available ? image : disabled.image} alt={title} />
        </div>
      </div>
    </div>
  );
}

type EventProps = {
  icon: string;
  title: string;
  subtitle: string;
  time: string;
  image: string;
  link: string;
  color?: string;
  available?: boolean;
};

const disabled = {
  icon: robot,
  title: "LOCKED",
  subtitle: "currently unavailable...",
  time: "00H 00M",
  link: "none",
  image: locks,
};
