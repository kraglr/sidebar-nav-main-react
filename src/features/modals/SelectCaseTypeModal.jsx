import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
const SelectCaseTypeModal = ({ hideModal, data }) => {
  return (
    <div
      class="relative z-[9999]"
      aria-labelledby="dialog-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="fixed inset-0 bg-gray-500/75 transition-opacity"
        aria-hidden="true"
      ></div>

      <div class="flex fixed inset-0 z-10 min-w-screen min-h-screen overflow-y-auto align-middle items-center justify-center">
        <div className="modal flex flex-col  w-1/3 my-auto ">
          <div className="modal-header  flex justify-end items-end align-middle w-full py-3 bg-gray-900 text-white-300 rounded-t-lg">
            <ClearIcon />
          </div>
          <div className="modal-body flex bg-gray-200 justify-center items-center align-middle p-2">
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
          </div>
          <div className="modal-footer border-t-1 text-gray-900 border-gray-300 bg-gray-100 rounded-b-lg">
            asdasd
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectCaseTypeModal;
