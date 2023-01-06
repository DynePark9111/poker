import styles from "../styles/Events.module.scss";
import about from "../assets/cards/info.webp";
import robot from "../assets/cards/robot.webp";
import duel from "../assets/cards/duel.webp";
import { useNavigate } from "react-router-dom";
// import star from "../assets/cards/star.webp";
// import trophy from "../assets/cards/trophy.webp";
// import zone from "../assets/cards/zone.webp";

type EventProps = {
  icon: string;
  title: string;
  subtitle: string;
  time: string;
  info: string;
  image: string;
  link: string;
  color?: string;
  available?: boolean;
};

export default function Events() {
  return (
    <div className={styles.Events}>
      <Event
        icon={"X"}
        title="title"
        subtitle="subtitle"
        time="1h 2m"
        info="TODO"
        link="poker"
        image="image"
        color="red"
        available={false}
      />
      <Event
        icon={"X"}
        title="title"
        subtitle="subtitle"
        time="1h 2m"
        info="TODO"
        link="poker"
        image="image"
        color="red"
        available={false}
      />
      <Event
        icon={duel}
        title="DUEL"
        subtitle="I CHALLENGE YOU TO A DULE"
        time="01H 02M"
        info="TODO"
        link="poker"
        image="https://pbs.twimg.com/media/FThIj9QWAAAFjE7.jpg"
        color="#A60528"
      />
      <Event
        icon={"X"}
        title="title"
        subtitle="subtitle"
        time="1h 2m"
        info="TODO"
        link="poker"
        image="image"
        color="red"
        available={false}
      />
      <Event
        icon={"X"}
        title="title"
        subtitle="subtitle"
        time="1h 2m"
        info="TODO"
        link="poker"
        image="image"
        color="red"
        available={false}
      />
    </div>
  );
}

const disabled = {
  icon: robot,
  title: "LOCKED",
  subtitle: "CURRENTLY UNAVAILABLE...",
  time: "00H 00M",
  info: "unavailabe",
  link: "none",
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqC9qNk6IVY87Fr3odfRdadng4eWfULTtjng&usqp=CAU",
};

function Event({
  icon,
  title,
  subtitle,
  time,
  info,
  link,
  image,
  color = "purple",
  available = true,
}: EventProps) {
  const navigate = useNavigate();

  return (
    <div className={styles.Event} id={available ? "" : "disabled"}>
      <div className={styles.infoIcon}>
        <img src={about} alt={about} />
      </div>
      <div className={styles.wrapper} onClick={() => navigate(link)}>
        <div className={styles.time}>
          New event: {available ? time : disabled.time}
        </div>
        <div className={styles.info} style={{ backgroundColor: color }}>
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
