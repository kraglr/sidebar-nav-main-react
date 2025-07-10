import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import profiledefault from "../../assets/img/profile.jpeg";
const PatientInformation = () => {
  return (
    <>
      <div className="w-full h-full">
        <div className="grid lg:grid-cols-[11fr_1fr] grid-cols-1 mb-5">
          <div className="col-span-1 grid grid-cols-[1fr_11fr] gap-x-3  text-gray-900 lg:order-0 order-1">
            <div className="col-span-1 flex items-center justify-center align-middle border-2 rounded-lg border-gray-900 p-[3px]">
              <img
                src={profiledefault}
                alt="profile"
                className="rounded-sm w-full"
              />
            </div>
            <div className="col-span-1 flex flex-col">
              <div>
                <span>MRN:</span>
              </div>
              <div>
                <span>Name:</span>
              </div>
              <div>
                <span>Patient Type:</span>
              </div>
            </div>
          </div>
          <div className="col-span-1 lg:order-1 order-0 flex justify-end ">
            <CancelIcon className="text-red-900" />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-end">
            <nav className="">
              <ul className="list-none flex lg:flex-row flex-col">
                {[
                  "Patient Information",
                  "Background Information",
                  "Guarantor Information",
                  "Medical Information",
                  "Case Information",
                  "Case",
                ].map((navItem, idx) => {
                  return (
                    <li
                      className="px-2 py-1 bg-gray-700 hover:bg-gray-500 hover:text-gray-900 cursor-pointer [&:first-child]:rounded-tl-md  lg:[&:first-child]:rounded-tr-none [&:first-child]:rounded-tr-md
                      lg:[&:last-child]:rounded-tr-md [&:last-child]:rounded-tr-none "
                      role="button"
                      key={idx}
                    >
                      {navItem}
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default PatientInformation;
