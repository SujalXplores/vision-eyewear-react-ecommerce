import { useEffect, useState } from 'react';

const useInput = (validateValue, inputValue = '') => {
  const [enteredValue, setEnteredValue] = useState(inputValue);
  const [isTouched, setIsTouched] = useState(false);

  useEffect(() => {
    setEnteredValue(inputValue);
  }, [inputValue]);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    !inputValue && setEnteredValue('');
    inputValue && setEnteredValue(inputValue);
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
