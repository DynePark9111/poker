import { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";
import Modal from "./Modal";
import PayTable from "./poker/PayTable";
import Window from "./Window";

export default function EventsModal() {
  const { activeModal } = useContext(ModalContext);
  return (
    <>
      <Modal isOpen={activeModal === "poker"}>
        <Window>
          <PayTable />
        </Window>
      </Modal>
    </>
  );
}
