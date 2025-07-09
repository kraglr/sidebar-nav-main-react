import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { useNavigate } from "react-router";

const SelectCaseTypeModal = ({ hideModal, data }) => {
  const navigate = useNavigate();
  return (
    <div
      class="relative z-[9999] min-h-screen"
      aria-labelledby="dialog-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="fixed inset-0 bg-gray-500/75 transition-opacity"
        aria-hidden="true"
      ></div>

      <div class="flex fixed inset-0 z-10 min-w-screen min-h-screen overflow-y-auto align-middle items-center justify-center">
        <div className="modal flex flex-col 2xl:w-1/5 xl:w-1/4 lg:w-1/3  w-1/2 my-auto ">
          <div className="modal-header  flex justify-end items-end px-2 align-middle w-full py-3 bg-gray-900 text-white-300 rounded-t-lg">
            <ClearIcon onClick={hideModal} />
          </div>
          <div className="modal-body flex flex-col space-y-5 rounded-b-lg bg-gray-200 text-gray-900 justify-center items-center align-middle px-2 py-4 transition-all ease-in-out duration-300">
            <div className="relative  w-20 h-20">
              {/* Spinner ring */}
              <div
                className="absolute inset-0 border-4 border-gray-900 border-t-transparent rounded-full animate-spin"
                role="status"
              ></div>

              {/* Exclamation mark fixed in center */}
              <span className="absolute inset-0 flex items-center justify-center text-gray-900 text-6xl font-bold">
                !
              </span>
            </div>

            <div className="grid lg:grid-cols-3 grid-cols-1 justify-center items-center lg:gap-y-0 gap-y-3">
              <button
                className="col-span-1 px-2 py-1 border-1 lg:rounded-l-md lg:rounded-r-none rounded-md  "
                onClick={() => {
                  navigate("/patient-information");
                }}
              >
                Emergency
              </button>
              <button
                className="col-span-1 px-2 py-1 border-1 lg:rounded-none rounded-md"
                onClick={() => {
                  navigate("/patient-information");
                }}
              >
                Inpatient
              </button>
              <button
                className="col-span-1 px-2 py-1 border-1 lg:rounded-r-md lg:rounded-l-none rounded-md  "
                onClick={() => {
                  navigate("/patient-information");
                }}
              >
                Outpatient
              </button>
            </div>
          </div>
          {/* <div className="modal-footer border-t-1 text-gray-900 border-gray-300 bg-gray-100 rounded-b-lg">
            
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SelectCaseTypeModal;
