import { useState } from "react";

const useForm = (validate) => {
  const [input, setInput] = useState("");
  const [isInputTouched, setIsInputTouched] = useState(false);
  const isInputValid = validate(input);
  const hasError = !isInputValid && isInputTouched;

  const formInputHandler = (event) => {
    setInput(event.target.value);
  };
  const inputBlurHandler = (event) => {
    setIsInputTouched(true);
  };

  const reset = () => {
    setInput("");
    setIsInputTouched(false);
  };

  return {
    input,
    isInputTouched,
    isInputValid,
    hasError,
    formInputHandler,
    inputBlurHandler,
    reset,
  };
};

export default useForm;
