import classes from "./ItemAddModal.module.css";
import ReactDOM from "react-dom";
import { useStateContext } from "../contexts/ContextProvider";

const BackDrop = (props) => {
  const { closeAddItemModalHandler } = useStateContext();
  return (
    <div className={classes.backdrop} onClick={closeAddItemModalHandler}></div>
  );
};

const ModalOverLay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const portalElement = document.getElementById("overlay");
const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<BackDrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverLay>{props.children}</ModalOverLay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
