import React, { useState } from "react";

const defaultList = [
  {
    CODE: "2024-000011",
    U_LASTNAME: "JUNIO",
    U_FIRSTNAME: "MELECIO",
    U_MIDDLENAME: "MONTEMAYOR",
    U_EXTNAME: null,
    U_BIRTHDATE: "1957-09-14",
    U_GENDER: "Male",
    U_VISITCOUNT: 1,
  },
  {
    CODE: "2024-000012",
    U_LASTNAME: "LAMSEN",
    U_FIRSTNAME: "ZOSIMO",
    U_MIDDLENAME: "SEGUNDO",
    U_EXTNAME: null,
    U_BIRTHDATE: "1970-03-21",
    U_GENDER: "Male",
    U_VISITCOUNT: 1,
  },
  {
    CODE: "2024-000013",
    U_LASTNAME: "LUMACTOD",
    U_FIRSTNAME: "JAIME",
    U_MIDDLENAME: "DIAZ",
    U_EXTNAME: null,
    U_BIRTHDATE: "1981-03-19",
    U_GENDER: "Male",
    U_VISITCOUNT: 1,
  },
  {
    CODE: "2024-000014",
    U_LASTNAME: "MADARANG",
    U_FIRSTNAME: "JAY",
    U_MIDDLENAME: "COBANGCOBANG",
    U_EXTNAME: null,
    U_BIRTHDATE: "1978-11-04",
    U_GENDER: "Male",
    U_VISITCOUNT: 1,
  },
  {
    CODE: "2024-000015",
    U_LASTNAME: "CABILIN",
    U_FIRSTNAME: "RUBY",
    U_MIDDLENAME: "TULIAO",
    U_EXTNAME: null,
    U_BIRTHDATE: "1982-04-10",
    U_GENDER: "Female",
    U_VISITCOUNT: 1,
  },
  {
    CODE: "2024-000016",
    U_LASTNAME: "CAMORONGAN",
    U_FIRSTNAME: "CARMELITA",
    U_MIDDLENAME: "GARCIA",
    U_EXTNAME: null,
    U_BIRTHDATE: "1949-10-30",
    U_GENDER: "Female",
    U_VISITCOUNT: 1,
  },
  {
    CODE: "2024-000017",
    U_LASTNAME: "NANLABI",
    U_FIRSTNAME: "JUDILENE",
    U_MIDDLENAME: "MEJIA",
    U_EXTNAME: null,
    U_BIRTHDATE: "1993-10-16",
    U_GENDER: "Female",
    U_VISITCOUNT: 1,
  },
  {
    CODE: "2024-000018",
    U_LASTNAME: "BASCO",
    U_FIRSTNAME: "MARIA CLARA",
    U_MIDDLENAME: "PEREZ",
    U_EXTNAME: null,
    U_BIRTHDATE: "1969-08-15",
    U_GENDER: "Female",
    U_VISITCOUNT: 1,
  },
  {
    CODE: "2024-000019",
    U_LASTNAME: "FORTIN",
    U_FIRSTNAME: "CRISANTO",
    U_MIDDLENAME: "ROSARIO",
    U_EXTNAME: null,
    U_BIRTHDATE: "1981-11-22",
    U_GENDER: "Male",
    U_VISITCOUNT: 1,
  },
  {
    CODE: "2024-000020",
    U_LASTNAME: "PATA",
    U_FIRSTNAME: "JINGJING",
    U_MIDDLENAME: "POLICARPIO",
    U_EXTNAME: "",
    U_BIRTHDATE: "1984-07-08",
    U_GENDER: "Female",
    U_VISITCOUNT: 1,
  },
];

const PatientRegistration = () => {
  const [patientList, setPatientList] = useState(defaultList);

  return (
    <>
      {/* <div className="flex justify-between w-full flex-wrap transition-all duration-300 ease-in-out">
        <div className="flex flex-col flex-grow-2 text-gray-900 md:w-1/2  w-full">
          <label for="search">Search Patient:</label>
          <input
            type="text"
            className="flex-grow-1 border-1 border-gray-900 rounded-md px-2 py-1 ring-gray-900"
          />
        </div>
        <div className="flex flex-grow-1 justify-between align-baseline space-x-4 items-end md:w-1/2 w-full md:px-5 px-0">
          <button className="bg-gray-900 text-white px-2 py-1 rounded-md cursor-pointer hover:bg-gray-700  text-center">
            Add New Patient
          </button>
          <div className="flex flex-col text-gray-900">
            <label for="perPage">Patient Per Page:</label>
            <select
              name=""
              className="border-1 border-gray-900 rounded-md px-2 py-1 ring-gray-900"
              id=""
            ></select>
          </div>
        </div>
      </div> */}

      <div className="grid md:grid-cols-2 grid-cols-1 gap-x-4 transition-all duration-300 ease-in-out mb-3">
        <div className="col-span-1 grid grid-rows-2">
          <label for="search" className="row-span-1 text-gray-900">
            Search Patient:
          </label>
          <input
            type="text"
            className="row-span-1 border-1 border-gray-900 rounded-md px-2 py-1 ring-gray-900"
          />
        </div>
        <div className="col-span-1 grid grid-cols-2 gap-x-2">
          <div className="grid col-span-1 md:justify-center justify-start items-end   ">
            <button className=" bg-gray-900 text-white px-2 py-1 rounded-md cursor-pointer hover:bg-gray-700  text-center text-nowrap">
              Add New Patient
            </button>
          </div>
          <div className="col-span-1 grid  grid-rows-2 text-gray-900 ">
            <label for="perPage" className="row-span-1">
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

      <div className="w-full">
        <table className="w-full">
          <thead className="bg-gray-900 text-gray-300 ">
            <tr className="">
              <th className="py-2">MRN</th>
              <th className="py-2">Last Name</th>
              <th className="py-2">First Name</th>
              <th className="py-2">Middle Name</th>
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
      </div>
    </>
  );
};

export default PatientRegistration;
