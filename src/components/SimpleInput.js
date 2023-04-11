import { useState } from "react";
import "../index.css";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isInputNameTouched, setIsInputNameTouched] = useState(false);
  const [isInputPasswordTouched, setIsInputPasswordTouched] = useState(false);
  const isEnteredNameValid = enteredName.trim().length !== 0;
  const isEnteredPasswordValid =
    enteredPassword.trim().length !== 0 && enteredPassword.trim().includes("@");
  const isInpuNametInvalid = !isEnteredNameValid && isInputNameTouched;
  const isInputPasswordInvalid =
    !isEnteredPasswordValid && isInputPasswordTouched;
  let text;
  const nameInputHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const passwordInputHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const blurInputNameHandler = (event) => {
    setIsInputNameTouched(true);
  };
  const blurInputPasswordHandler = (event) => {
    setIsInputPasswordTouched(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(enteredPassword);
    setIsInputNameTouched(true);
    if (!isEnteredNameValid) {
      return;
    }
    if (!isEnteredPasswordValid) {
      return;
    }

    console.log(enteredName);
    console.log(enteredPassword);
    setEnteredName("");
    setIsInputNameTouched(false);

    setEnteredPassword("");
    setIsInputPasswordTouched(false);
  };

  if (isInpuNametInvalid) {
    text = <p className="error-text">Name Cannot be left empty</p>;
  } else if (isInputPasswordInvalid) {
    text = <p className="error-text">Password Cannot be left empty</p>;
  }

  const nameInputClass = isInpuNametInvalid
    ? "form-control invalid"
    : "form-control";

  const pwdInputClass = isInputPasswordInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onBlur={blurInputNameHandler}
          onChange={nameInputHandler}
        />
      </div>
      <div className={pwdInputClass}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={enteredPassword}
          onBlur={blurInputPasswordHandler}
          onChange={passwordInputHandler}
        />
        {text}
      </div>

      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
