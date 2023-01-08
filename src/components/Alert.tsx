import { useContext, useEffect, useState } from "react";
import styles from "../styles/Alert.module.scss";
import { AlertContext } from "../contexts/AlertContext";

type MessageProps = {
  message: {
    id: string;
    message: string;
    status: "normal" | "success" | "warning" | "error";
  };
};

export default function Alert() {
  const { alerts } = useContext(AlertContext);

  return (
    <div className={styles.Alert}>
      {alerts?.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
}

function Message({ message }: MessageProps) {
  const [exit, setExit] = useState(false);
  const { deleteAlert } = useContext(AlertContext);
  useEffect(() => {
    const timer = setTimeout(() => {
      deleteAlert(message.id);
    }, 6500);
    return () => clearTimeout(timer);
  }, [message.id]);

  return (
    <div
      className={`${styles.Message} ${styles[message.status]}`}
      id={exit ? styles.exit : ""}
      title="닫기"
      onClick={() => setExit((prev) => !prev)}
    >
      {message.message}
    </div>
  );
}
