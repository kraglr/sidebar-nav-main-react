import React, { useReducer, useState } from "react";

const funcDispatch = (state, action) => {
  switch (action.type) {
    case "ADD_INPUT":
      return { ...state, [action.name]: action.value };
    case "SEARCH_INPUT":
      return state;
    case "RESET_FORM":
      return action.payload;
    default:
      return state;
  }
};

const useForm = () => {
  const [values, setValues] = useState({});
  const [formValues, dispatch] = useReducer(funcDispatch, values);

  const handleChange = (e, type = "ADD_INPUT") => {
    const { name, value } = e.target;
    dispatch({
      type: type,
      name: name,
      value: value,
    });
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
