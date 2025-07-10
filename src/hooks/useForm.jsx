import React, { useReducer, useState } from "react";

const funcDispatch = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "ADD_INPUT":
      return { ...state, [action.name]: action.value };
    case "RESET_FORM":
      return action.payload;
    default:
      return state;
  }
};

const useForm = () => {
  const [values, setValues] = useState({});
  const [formValues, dispatch] = useReducer(funcDispatch, values);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: "ADD_INPUT",
      name: name,
      value: value,
    });

    setValues({ ...values, [name]: value });

    console.log(value, values, formValues);
  };

  const resetForm = () => {
    dispatch({
      type: "RESET_FORM",
      payload: values,
    });
  };

  const handleSubmit = (callback) => (e) => {
    e.preventDefault();
  };

  return {
    setValues,
    values,
    handleChange,
  };
};

export default useForm;
