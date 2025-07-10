import React from "react";

const PatientInfoTab = ({ mrnSelected, formValues, handleChange }) => {
  return (
    <>
      <div className="grid grid-cols-1 bg-gray-100 text-gray-900 rounded-l-md rounded-tr-none rounded-br-md px-4 py-2 gap-y-3">
        <div className=" col-span-1 grid lg:grid-cols-2 grid-cols-1 gap-y-3">
          <div className="col-span-1 grid md:grid-cols-2 grid-cols-1 gap-x-3 lg:order-0 order-1">
            <div className="col-span-1 flex flex-col">
              <label className="font-bold" htmlFor="MRN">
                MRN:
              </label>
              <input
                type="text"
                id="MRN"
                name="CODE"
                value={mrnSelected !== "new" ? mrnSelected : ""}
                disabled
                className="border-1 cursor-not-allowed border-gray-400 rounded-full text-gray-900 px-4 py-2 w-full bg-white"
              />
            </div>
            <div className="col-span-1 flex flex-col">
              <label className="font-bold" htmlFor="prefix">
                Prefix:
              </label>
              <select
                name="CODE"
                className="border-1 border-gray-400 rounded-full text-gray-900 px-4 py-2 w-full bg-white"
              >
                <option>MR</option>
              </select>
            </div>
          </div>
          <div className="col-span-1 grid grid-cols-4 lg:order-1 order-0">
            <div className="col-span-1 grid grid-rows-2 justify-center">
              <label htmlFor="newborn" className="row-span-1 font-bold">
                Indigenous
              </label>
              <input
                type="checkbox"
                name="indigenous"
                className="row-span-1 font-bold"
                id="indigenous"
              />
            </div>
            <div className="col-span-1 grid grid-rows-2 justify-center">
              <label htmlFor="newborn" className="row-span-1 font-bold">
                PWD
              </label>
              <input
                type="checkbox"
                name="U_PWD"
                className="row-span-1 font-bold"
                id="U_PWD"
              />
            </div>
            <div className="col-span-1 grid grid-rows-2 justify-center">
              <label htmlFor="newborn" className="row-span-1">
                Senior Citizen
              </label>
              <input
                type="checkbox"
                name="U_SC"
                className="row-span-1"
                id="U_SC"
              />
            </div>
            <div className="col-span-1 grid grid-rows-2 justify-center">
              <label htmlFor="newborn" className="row-span-1">
                Newborn
              </label>
              <input
                type="checkbox"
                name="newborn"
                className="row-span-1"
                id="newborn"
              />
            </div>
          </div>
        </div>
        <div className="cols-span-1 grid grid-cols-1">
          <div className="col-span-1 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-3">
            <div className="col-span-1">
              <label className="font-bold" htmlFor="lastName">
                Last Name:
              </label>
              <input
                type="text"
                id="lastName"
                name="U_LASTNAME"
                className="border-1 border-gray-400 rounded-full text-gray-900 px-4 py-2 w-full bg-white"
                value={formValues.U_LASTNAME}
                onChange={handleChange}
              />
            </div>
            <div className="col-span-1">
              <label className="font-bold" htmlFor="firstName">
                First Name:
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="border-1 border-gray-400 rounded-full text-gray-900 px-4 py-2 w-full bg-white"
              />
            </div>
            <div className="col-span-1">
              <label className="font-bold" htmlFor="middleName">
                Middle Name:
              </label>
              <input
                type="text"
                id="middleName"
                name="middleName"
                className="border-1 border-gray-400 rounded-full text-gray-900 px-4 py-2 w-full bg-white"
              />
            </div>
            <div className="col-span-1 grid grid-cols-[1fr_2fr] gap-x-3">
              <div className="col-span-1">
                <label className="font-bold" htmlFor="extName">
                  Ext:
                </label>
                <input
                  type="text"
                  id="extName"
                  name="extName"
                  className="border-1 border-gray-400 rounded-full text-gray-900 px-4 py-2 w-full bg-white"
                />
              </div>
              <div className="col-span-1">
                <label className="font-bold" htmlFor="extName">
                  Ext:
                </label>
                <input
                  type="text"
                  id="extName"
                  name="extName"
                  className="border-1 border-gray-400 rounded-full text-gray-900 px-4 py-2 w-full bg-white"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="cols-span-1 grid grid-cols-1">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-3">
            <div className="col-span-1 flex flex-col">
              <label className="font-bold" htmlFor="birthDate">
                Birth Date:
              </label>
              <input
                type="date"
                name="birthDate"
                id="birthdate"
                className="border-1 border-gray-400 rounded-full text-gray-900 px-4 py-2 w-full bg-white"
              />
            </div>
            <div className="col-span-1 grid grid-cols-[1fr_2fr] gap-x-3">
              <div className="col-span-1">
                <label className="font-bold" htmlFor="birthDate">
                  Age:
                </label>
                <input
                  type="text"
                  name="age"
                  id="age"
                  className="border-1 border-gray-400 rounded-full text-gray-900 px-4 py-2 w-full bg-white"
                />
              </div>
              <div className="col-span-1">
                <label className="font-bold" htmlFor="birthDate">
                  Civil Status:
                </label>
                <select
                  id="U_CIVILSTATUS"
                  name="U_CIVILSTATUS"
                  className="border-1 border-gray-400 rounded-full text-gray-900 px-4 py-2 w-full bg-white"
                >
                  <option>Select Status</option>
                </select>
              </div>
            </div>
            <div className="col-span-1 flex flex-col">
              <label className="font-bold" htmlFor="birthDate">
                Place of Birth:
              </label>
              <input
                type="text"
                name="U_BIRTHPLACE"
                id="U_BIRTHPLACE"
                className="border-1 border-gray-400 rounded-full text-gray-900 px-4 py-2 w-full bg-white"
              />
            </div>
            <div className="col-span-1 flex flex-col">
              <label className="font-bold" htmlFor="birthDate">
                Occupation:
              </label>
              <input
                type="text"
                name="U_OCCUPATION"
                id="U_OCCUPATION"
                className="border-1 border-gray-400 rounded-full text-gray-900 px-4 py-2 w-full bg-white"
              />
            </div>
          </div>
        </div>
        <div className="cols-span-1 grid grid-cols-1">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-3">
            <div className="col-span-1">
              <label className="font-bold" htmlFor="birthDate">
                Nationality:
              </label>
              <select
                id="U_NATIONALITY"
                name="U_NATIONALITY"
                className="border-1 border-gray-400 rounded-full text-gray-900 px-4 py-2 w-full bg-white"
              >
                <option>Select Nationality</option>
              </select>
            </div>
            <div className="col-span-1">
              <label className="font-bold" htmlFor="birthDate">
                Religion:
              </label>
              <select
                id="U_RELIGION"
                name="U_RELIGION"
                className="border-1 border-gray-400 rounded-full text-gray-900 px-4 py-2 w-full bg-white"
              >
                <option>Select Religion</option>
              </select>
            </div>
            <div className="col-span-1">
              <label className="font-bold" htmlFor="birthDate">
                ID Type:
              </label>
              <select
                id="NE_IDTYPE"
                name="NE_IDTYPE"
                className="border-1 border-gray-400 rounded-full text-gray-900 px-4 py-2 w-full bg-white"
              >
                <option className="w-full">Select ID Type</option>
              </select>
            </div>
            <div className="col-span-1">
              <label className="font-bold" htmlFor="birthDate">
                ID Number:
              </label>
              <input
                type="text"
                id="NE_IDNUMBER"
                name="NE_IDNUMBER"
                className="border-1 border-gray-400 rounded-full text-gray-900 px-4 py-2 w-full bg-white"
              />
            </div>
          </div>
        </div>

        <h5 className="underline">Present Address:</h5>
        <div className="cols-span-1 grid grid-cols-1">
          <div className="grid  lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-3">
            <div className="col-span-1">
              <label className="font-bold" htmlFor="birthDate">
                Nationality:
              </label>
              <select
                id="U_NATIONALITY"
                name="U_NATIONALITY"
                className="border-1 border-gray-400 rounded-full text-gray-900 px-4 py-2 w-full bg-white"
              >
                <option>Select Nationality</option>
              </select>
            </div>
            <div className="col-span-1">
              <label className="font-bold" htmlFor="birthDate">
                Religion:
              </label>
              <select
                id="U_RELIGION"
                name="U_RELIGION"
                className="border-1 border-gray-400 rounded-full text-gray-900 px-4 py-2 w-full bg-white"
              >
                <option>Select Religion</option>
              </select>
            </div>
            <div className="col-span-1">
              <label className="font-bold" htmlFor="birthDate">
                ID Type:
              </label>
              <select
                id="NE_IDTYPE"
                name="NE_IDTYPE"
                className="border-1 border-gray-400 rounded-full text-gray-900 px-4 py-2 w-full bg-white"
              >
                <option className="w-full">Select ID Type</option>
              </select>
            </div>
            <div className="col-span-1">
              <label className="font-bold" htmlFor="birthDate">
                ID Number:
              </label>
              <input
                type="text"
                id="NE_IDNUMBER"
                name="NE_IDNUMBER"
                className="border-1 border-gray-400 rounded-full text-gray-900 px-4 py-2 w-full bg-white"
              />
            </div>
          </div>
        </div>
        <div className="cols-span-1 grid grid-cols-1 ">
          <div className="col-span-1 grid grid-cols-[3fr_1fr] gap-x-3">
            <div className="cols-span-1">
              <label className="font-bold" htmlFor="U_STREET">
                Street:
              </label>
              <input
                type="text"
                id="U_STREET"
                name="U_STREET"
                className="border-1 border-gray-400 rounded-full text-gray-900 px-4 py-2 w-full bg-white"
              />
            </div>
            <div className="cols-span-1">
              <label className="font-bold" htmlFor="MRN">
                Zip Code:
              </label>
              <input
                type="text"
                id="U_ZIP"
                name="U_ZIP"
                className="border-1 border-gray-400 rounded-full text-gray-900 px-4 py-2 w-full bg-white"
              />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-1 sm:grid-cols-1 gap-x-3">
          <div className="col-span-1 order-0 ">
            <h6 role="button" className="underline cursor-pointer">
              Permanent Address
            </h6>
          </div>
          <div className="col-span-1 gap-x-3 flex flex-row-reverse items-center align-middle justify-center ">
            <label className=" font-medium text-gray-700 order-1">
              Same With Present Address
            </label>
            <input
              type="checkbox"
              className="form-check h-5 w-5 mt-auto order-0 accent-[var(--bg)]"
            />
          </div>
        </div>
        <div
          className={`permanent-address-div transition-all duration-300 ease-in-out`}
        >
          {/* START OF PERMANENT COUNTRY, PROVINCE, CITY AND BRGY */}
          <div
            className={`grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-x-3 mb-3 `}
          >
            <div className="col-span-1">
              <label
                className=" font-medium text-gray-700"
                htmlFor="U_COUNTRY_PERMANENT"
              >
                Country<span className="text-[#dc3545]">*</span>
              </label>
              <select
                className="form-select bg-white w-full border-1 border-gray-400 rounded-full px-3 py-2 focus:outline-none focus:ring-2  mt-auto"
                name="U_COUNTRY_PERMANENT"
              ></select>
            </div>
            <div className="col-span-1">
              <label
                className=" font-medium text-gray-700"
                htmlFor="U_PROVINCE_PERMANENT"
              >
                Province<span className="text-[#dc3545]">*</span>
              </label>
              <select
                className="form-select bg-white w-full border-1 border-gray-400 rounded-full px-3 py-2 focus:outline-none focus:ring-2  mt-auto"
                name="U_PROVINCE_PERMANENT"
              >
                <option>Select Province</option>
              </select>
            </div>
            <div className="col-span-1">
              <label
                className=" font-medium text-gray-700"
                htmlFor="U_CITY_PERMANENT"
              >
                City/Municipality<span className="text-[#dc3545]">*</span>
              </label>
              <select
                className="form-select bg-white w-full border-1 border-gray-400 rounded-full px-3 py-2 focus:outline-none focus:ring-2  mt-auto"
                name="U_CITY_PERMANENT"
              ></select>
            </div>
            <div className="col-span-1">
              <label
                className=" font-medium text-gray-700"
                htmlFor="U_BARANGAY_PERMANENT"
              >
                Barangay<span className="text-[#dc3545]">*</span>
              </label>
              <select
                className="form-select bg-white w-full border-1 border-gray-400 rounded-full px-3 py-2 focus:outline-none focus:ring-2  mt-auto"
                name="U_BARANGAY_PERMANENT"
              ></select>
            </div>
          </div>
          {/* END OF PERMANENT COUNTRY, PROVINCE, CITY AND BRGY */}
          {/* START OF STREET AND ZIPCODE */}
          <div className="col-span-1 grid grid-cols-[3fr_1fr] gap-x-3">
            <div className="cols-span-1">
              <label className="font-bold" htmlFor="U_STREET">
                Street:
              </label>
              <input
                type="text"
                id="U_STREET"
                name="U_STREET"
                className="border-1 border-gray-400 rounded-full text-gray-900 px-4 py-2 w-full bg-white"
              />
            </div>
            <div className="cols-span-1">
              <label className="font-bold" htmlFor="MRN">
                Zip Code:
              </label>
              <input
                type="text"
                id="U_ZIP"
                name="U_ZIP"
                className="border-1 border-gray-400 rounded-full text-gray-900 px-4 py-2 w-full bg-white"
              />
            </div>
          </div>
        </div>
        <button> Save</button>
      </div>
    </>
  );
};

export default PatientInfoTab;
