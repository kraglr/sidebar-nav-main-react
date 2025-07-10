import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { useNavigate } from "react-router";
import ModalWrapper from "@/components/ModalWrapper";

const SelectCaseTypeModal = ({ hideModal, data }) => {
  const navigate = useNavigate();
  return (
    <ModalWrapper
      contentClassName={"bg-white text-gray-900"}
      open={open}
      onClose={hideModal}
    >
      <div className="flex flex-col items-center justify-center bg-white space-y-4">
        <div className="relative  w-20 h-20 mb-3">
          <div
            className="absolute inset-0 border-4 border-gray-900 border-t-transparent rounded-full animate-spin"
            role="status"
          ></div>
          <span className="absolute inset-0 flex items-center justify-center text-gray-900 text-6xl font-bold">
            !
          </span>
        </div>

        <div className="text-center">
          <h4 className="text-xl font-bold">Select Case Type</h4>
        </div>
        <div className="grid grid-cols-3  justify-center items-center lg:gap-y-0 gap-y-3">
          <button
            className="col-span-1 px-2 py-1 border-1 rounded-l-md   "
            onClick={() => {
              navigate("/patient-information");
            }}
          >
            Emergency
          </button>
          <button
            className="col-span-1 px-2 py-1 border-1 "
            onClick={() => {
              navigate("/patient-information");
            }}
          >
            Inpatient
          </button>
          <button
            className="col-span-1 px-2 py-1 border-1 rounded-r-md  "
            onClick={() => {
              navigate("/patient-information");
            }}
          >
            Outpatient
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default SelectCaseTypeModal;
