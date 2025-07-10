import React, { useCallback, useEffect, useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import profiledefault from "../../assets/img/profile.jpeg";
import PatientInfoTab from "../PatientInformation/PatientInfoTab";
import { useParams } from "react-router";
import axios from "axios";

const PatientInformation = () => {
  const { action, mrnSelected, caseType } = useParams();
  const [activeTab, setActiveTab] = useState("pit");

  const [patientInfo, setPatientInfo] = useState({});

  const fetchPatientInfo = useCallback(async () => {
    const res = await axios.get(
      "http://localhost:8000/api/patients/get-patient-information",
      {
        params: {
          mrn: mrnSelected,
          caseType: caseType,
        },
      }
    );

    setPatientInfo(res.data?.infoPatient);
    // console.log(patient);
  }, [mrnSelected, caseType]);

  useEffect(() => {
    console.log(mrnSelected, caseType);

    if ((mrnSelected, caseType)) fetchPatientInfo();
  }, [mrnSelected, caseType, fetchPatientInfo]);

  // useEffect(() => {
  //   fetchPatientInfo();
  //   console.log(mrnSelected);
  // }, [mrnSelected]);

  const tabs = [
    {
      tab: "Patient Information",
      tabIdx: "pit",
      comp: <PatientInfoTab />,
    },
    {
      tab: "Background Information",
      tabIdx: "bit",
      comp: null,
    },
    {
      tab: "Guarantor Information",
      tabIdx: "git",
      comp: null,
    },
    {
      tab: "Medical Information",
      tabIdx: "mit",
      comp: null,
    },
    {
      tab: "Case Information",
      tabIdx: "cit",
      comp: null,
    },
    {
      tab: "Case",
      tabIdx: "ct",
      comp: null,
    },
  ];
  useEffect(() => {
    console.log(action, mrnSelected, caseType);
  }, [action, mrnSelected, caseType]);

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
              <div className="flex space-x-3">
                <span>MRN:</span>
                <span className="capitalize">{mrnSelected}</span>
              </div>
              <div>
                <span>Name:</span>
              </div>
              <div className="flex space-x-3">
                <span>Patient Type:</span>
                <span className="capitalize">{caseType}</span>
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
                {tabs.map((navItem, idx) => {
                  return (
                    <li
                      className="px-2 py-1 bg-gray-700 hover:bg-gray-500 hover:text-gray-900 cursor-pointer [&:first-child]:rounded-tl-md  lg:[&:first-child]:rounded-tr-none [&:first-child]:rounded-tr-md
                      lg:[&:last-child]:rounded-tr-md [&:last-child]:rounded-tr-none lg:[&:last-child]:rounded-b-none  [&:last-child]:rounded-b-md "
                      role="button"
                      key={idx}
                      onClick={() => setActiveTab(navItem.tabIdx)}
                    >
                      {navItem.tab}
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
          {activeTab === "pit" && <PatientInfoTab mrnSelected={mrnSelected} />}
          {activeTab === "bit" && <PatientInfoTab />}
        </div>
      </div>
    </>
  );
};

export default PatientInformation;
