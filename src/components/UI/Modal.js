import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.hideCartHandler} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      {/* props.children is what is being passed inside the modal when used */}
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

//second argument for portals, where we send it
const portalElement = document.getElementById("overlays");

function Modal(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop hideCartHandler={props.hideCartHandler} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
}

export default Modal;
