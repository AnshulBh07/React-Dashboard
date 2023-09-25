import { useState } from "react";
import "./modalStyles.css";
import ModalBodyBasic from "./ModalBodyBasic";
import ModalBodySocial from "./ModalBodySocial";

const Modal = (props) => {
  const [bodyBasic, setBodyBasic] = useState(true);
  const [bodySocial, setBodySocial] = useState(false);
  const [btns, setBtns] = useState([false, true, false]);
  //btns[0] - back
  //btns[0] - next
  //btn[0] - done
  const [basicHrStyle, setbasicHrStyle] = useState({
    backgroundColor: "#3F84F8",
  });
  const [socialHrStyle, setsocialHrStyle] = useState({
    backgroundColor: "#d9d9d9",
  });

  function handleNextClick() {
    setBtns([true, false, true]);
    setBodySocial(true);
    setBodyBasic(false);
    setbasicHrStyle({ backgroundColor: "#d9d9d9" });
    setsocialHrStyle({ backgroundColor: "#3F84F8" });
  }

  function handleBackClick() {
    setBtns([false, true, false]);
    setBodyBasic(true);
    setBodySocial(false);
    setbasicHrStyle({ backgroundColor: "#3F84F8" });
    setsocialHrStyle({ backgroundColor: "#d9d9d9" });
  }

  function handleDoneClick() {
    console.log(props.user);
    props.closeModal(false);
    props.setCard(true);
  }

  let name, value;

  function handleInput(e) {
    name = e.target.name;
    value = e.target.value;

    //using spread operator to update
    props.setUser({ ...props.user, [name]: value });
    console.log(props.user);
  }

  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="title">
          <p>Add new profile</p>
          <button onClick={() => props.closeModal(false)}>X</button>
        </div>
        {bodyBasic && (
          <ModalBodyBasic
            basicStyles={basicHrStyle}
            socialStyles={socialHrStyle}
            users={props.user}
            updateFunction={handleInput}
          />
        )}
        {bodySocial && (
          <ModalBodySocial
            socialStyles={socialHrStyle}
            basicStyles={basicHrStyle}
            users={props.user}
            updateFunction={handleInput}
          />
        )}
        <div className="footer">
          {btns[2] && (
            <button className="next-btn" onClick={handleDoneClick}>
              Done
            </button>
          )}
          {btns[1] && (
            <button className="next-btn" onClick={handleNextClick}>
              Next
            </button>
          )}
          {btns[0] && (
            <button className="back" onClick={handleBackClick}>
              Back
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default Modal;
