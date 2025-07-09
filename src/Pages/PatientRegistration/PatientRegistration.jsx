import React, { useState, useEffect } from "react";
import axios from "axios";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import { useModal } from "../../context/ModalContext";
import {
  LoadingThreeDots,
  LoadingThreeDotsRelative,
} from "../../components/Loader";
import SelectCaseTypeModal from "../../features/modals/SelectCaseTypeModal";

/**
 * Renders the patient registration page.
 * This component displays a list of patients in a table and provides UI for searching,
 * adding new patients, and controlling pagination.
 * @returns {JSX.Element} The rendered PatientRegistration component.
 */
const PatientRegistration = () => {
  const { showModal, hideModal, isModalOpen, modal } = useModal();
  /**
   * State to hold the list of patients to be displayed, initialized with mock data.
   * @type {[Patient[], Function]}
   */
  const [patientList, setPatientList] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [searchParam, setSearchParam] = useState("");

  const [sortCol, setSortCol] = useState("CODE");
  const [sortDir, setSortDir] = useState("ASC");

  const fetchPatientList = async (search, col, dir) => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `http://127.0.0.1:8000/api/patients/get-patient-list`,
        {
          params: {
            search: search,
            sortCol: col,
            sortDir: dir,
          },
        }
      );

      setPatientList(data?.patients?.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  const searchPatient = (e) => {
    setTimeout(() => {
      setSearchParam(e.target.value);
    }, 1000);

    clearTimeout();
  };

  useEffect(() => {
    fetchPatientList(searchParam, sortCol, sortDir);
  }, [searchParam, sortCol, sortDir]);

  return (
    <div className="flex flex-col ">
      <div className="sticky top-0 z-20 pb-4 bg-gray-300 flex-grow-0 grid md:grid-cols-2 grid-cols-1 gap-x-4 transition-all duration-300 ease-in-out mb-3">
        <div className="col-span-1 grid grid-rows-2">
          <label htmlFor="search" className="row-span-1 text-gray-900">
            Search Patient:
          </label>
          <input
            type="text"
            name="search"
            id="search"
            onChange={searchPatient}
            className="row-span-1 border-1 border-gray-900 rounded-md px-2 py-1 ring-gray-900"
          />
        </div>
        <div className="col-span-1 grid grid-cols-2 gap-x-2">
          <div className="grid col-span-1 md:justify-center justify-start items-end   ">
            <button
              className=" bg-gray-900 text-white px-2 py-1 rounded-md cursor-pointer hover:bg-gray-700  text-center text-nowrap"
              onClick={() => {
                showModal("select-case-type-modal", { casetype: "Inpatient" });
              }}
            >
              Add New Patient
            </button>
          </div>
          <div className="col-span-1 grid  grid-rows-2 text-gray-900 ">
            <label htmlFor="perPage" className="row-span-1">
              Patient Per Page:
            </label>
            <select
              name=""
              className="row-span-1 border-1 border-gray-900 rounded-md px-2 py-1 ring-gray-900"
              id="perPage"
            ></select>
          </div>
        </div>
      </div>

      <div className="flex relative overflow-auto z-1">
        {isLoading ? (
          <div className="h-[75vh] w-full">
            <LoadingThreeDotsRelative />
          </div>
        ) : (
          <table className="w-full ">
            <thead className="bg-gray-900 text-gray-300 sticky">
              <tr className="">
                <th
                  className="p-2  cursor-pointer"
                  onClick={() => {
                    setSortCol("CODE");
                    setSortDir(sortDir === "ASC" ? "DESC" : "ASC");
                  }}
                >
                  <span>MRN</span>
                  <span className="">
                    {" "}
                    {sortCol === "CODE" &&
                      (sortDir === "ASC" ? (
                        <ArrowUpwardIcon />
                      ) : (
                        <ArrowDownwardIcon />
                      ))}
                  </span>
                </th>
                <th
                  className="p-2  cursor-pointer"
                  onClick={() => {
                    setSortCol("U_LASTNAME");
                    setSortDir(sortDir === "ASC" ? "DESC" : "ASC");
                  }}
                >
                  {" "}
                  <span>Last Name</span>
                  <span>
                    {" "}
                    {sortCol === "U_LASTNAME" &&
                      (sortDir === "ASC" ? (
                        <ArrowUpwardIcon />
                      ) : (
                        <ArrowDownwardIcon />
                      ))}
                  </span>
                </th>
                <th
                  className="p-2  cursor-pointer"
                  onClick={() => {
                    setSortCol("U_FIRSTNAME");
                    setSortDir(sortDir === "ASC" ? "DESC" : "ASC");
                  }}
                >
                  {" "}
                  <span>First Name</span>
                  <span>
                    {" "}
                    {sortCol === "U_FIRSTNAME" &&
                      (sortDir === "ASC" ? (
                        <ArrowUpwardIcon />
                      ) : (
                        <ArrowDownwardIcon />
                      ))}
                  </span>
                </th>
                <th
                  className="p-2  cursor-pointer"
                  onClick={() => {
                    setSortCol("U_MIDDLENAME");
                    setSortDir(sortDir === "ASC" ? "DESC" : "ASC");
                  }}
                >
                  {" "}
                  <span>Middle Name</span>
                  <span>
                    {" "}
                    {sortCol === "U_MIDDLENAME" &&
                      (sortDir === "ASC" ? (
                        <ArrowUpwardIcon />
                      ) : (
                        <ArrowDownwardIcon />
                      ))}
                  </span>
                </th>
                <th className="py-2">Ext.</th>
                <th className="py-2">Birthdate</th>
                <th className="py-2">Sex</th>
                <th className="py-2">No. of Case</th>
              </tr>
            </thead>
            <tbody>
              {patientList.map((patient) => {
                return (
                  <tr
                    key={patient.CODE}
                    className="odd:bg-gray-100 even:bg-gray-200 border-b-1 border-gray-900 hover:bg-gray-300 cursor-pointer"
                  >
                    {Object.entries(patient).map(([key, value]) => {
                      return (
                        <td className="py-2 px-2  text-gray-900" key={key}>
                          {value}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>

      {isModalOpen && modal.name === "select-case-type-modal" && (
        <SelectCaseTypeModal modal={modal} hideModal={hideModal} />
      )}
    </div>
  );
};

export default PatientRegistration;
