import React, { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [modal, setModal] = useState({});

  const showModal = (name, data = {}) => {
    // console.log(name, data);
    setModal({ name: name, data: data });

    setIsModalOpen(true);
  };
  const hideModal = () => {
    setIsModalOpen(false);
  };
  return (
    <ModalContext.Provider value={{ isModalOpen, showModal, hideModal, modal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
