import useForm from "./useForm";

const BasicForm = (props) => {
  const {
    input: firstNameInput,
    isInputValid: isfirstNameInputValid,
    hasError: firstNameInputInvalid,
    formInputHandler: firstNameHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: firstNameReset,
  } = useForm((firstNameInput) => firstNameInput.trim().length !== 0);

  const {
    input: lastNameInput,
    isInputValid: isLastNameInputValid,
    hasError: lastNameInputInvalid,
    formInputHandler: lastNameHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: lastNameReset,
  } = useForm((lastNameInput) => lastNameInput.trim().length !== 0);

  const {
    input: emailInput,
    isInputValid: isEmailInputValid,
    hasError: emailInputInvalid,
    formInputHandler: emailHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useForm((emailInput) => emailInput.includes("@"));

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!isfirstNameInputValid) {
      return;
    }
    if (!isLastNameInputValid) {
      return;
    }
    if (!isEmailInputValid) {
      return;
    }
    console.log(firstNameInput);
    console.log(lastNameInput);
    console.log(emailInput);
    firstNameReset();
    lastNameReset();
    emailReset();
  };

  let isformValid = false;
  if (isfirstNameInputValid && isLastNameInputValid && isEmailInputValid) {
    isformValid = true;
  }

  const firstNameClasses = firstNameInputInvalid
    ? "form-control invalid"
    : "form-control";

  const lastNameClasses = lastNameInputInvalid
    ? "form-control invalid"
    : "form-control";

  const emailClasses = emailInputInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstNameInput}
            onChange={firstNameHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameInputInvalid && (
            <p className="error-text">First Name can't be empty</p>
          )}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastNameInput}
            onChange={lastNameHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameInputInvalid && (
            <p className="error-text">Last Name can't be empty</p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          value={emailInput}
          onChange={emailHandler}
          onBlur={emailBlurHandler}
        />
        {emailInputInvalid && (
          <p className="error-text">Email can't be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!isformValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
