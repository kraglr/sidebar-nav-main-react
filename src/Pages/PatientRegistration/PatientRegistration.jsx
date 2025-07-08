import React from "react";

const PatientRegistration = () => {
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
          <thead className="text-gray-900">
            <tr>
              <th>MRN</th>
              <th>Last Name</th>
              <th>First Name</th>
              <th>Middle Name</th>
              <th>Ext.</th>
              <th>Birthdate</th>
              <th>Sex</th>
              <th>No. of Case</th>
            </tr>
          </thead>
        </table>
      </div>
    </>
  );
};

export default PatientRegistration;
