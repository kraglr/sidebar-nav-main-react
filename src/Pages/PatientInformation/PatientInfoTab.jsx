import axios from "axios";
import React from "react";

const PatientInfoTab = ({
  action,
  mrnSelected,
  formValues,
  handleChange,
  patientSubmit,
  patientError,
  showError,
}) => {
  const handleSubmit = async (values) => {
    console.log("here");

    try {
      const data = await axios.post(
        `http://localhost:8000/api/patients/save-patient-info`,
        {
          data: values,
          action: action,
        }
      );

      console.log(data);
    } catch (error) {
      patientError(error.message);
      console.log(showError);
    }
  };
  return (
    <>
      <div
        className={`ptxinfo-content relative h-full p-3 text-left gap-3 shadow bg-white rounded-tl-md rounded-b-md`}
      >
        <form id="basic-personal-info-form">
          {/* START OF MRN, PREFIX, CHECKBOX */}
          {!!showError && <span className="text-red-900">{showError}</span>}
          <div className={`grid lg:grid-cols-2 grid-cols-1 gap-2 mb-3`}>
            <div className="col-span-1 grid gap-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 order-1 lg:order-0">
              <div className="col-span-1 ">
                <label className=" font-medium text-gray-700" htmlFor="mrn">
                  Medical Record Number
                </label>
                <input
                  type="text"
                  name="CODE"
                  value={formValues.CODE || ""}
                  onChange={handleChange}
                  className="bg-gray-200 text-gray-900 w-full border cursor-not-allowed rounded-full px-3 py-2 focus:outline-none focus:ring-2  mt-auto "
                />
              </div>

              <div className="col-span-1">
                <label className=" font-medium text-gray-700" htmlFor="prefix">
                  Prefix
                </label>
                <input
                  type="text"
                  name="U_PREFIX"
                  value={formValues.U_PREFIX || ""}
                  onChange={handleChange}
                  className="bg-gray-200 text-gray-900 w-full border  rounded-full px-3 py-2 focus:outline-none focus:ring-2  mt-auto"
                />
              </div>
            </div>

            <div className="col-span-1 flex gap-2 order-0 lg:order-1">
              <div className="w-[25%] flex flex-col items-center text-center">
                <label className=" font-medium text-gray-700">Newborn</label>
                <input
                  type="checkbox"
                  name="U_NEWBORNSTAT"
                  checked={formValues.U_NEWBORNSTAT == 1}
                  className="form-check h-5 w-5 mt-auto"
                />
              </div>

              <div className="w-[25%] flex flex-col items-center text-center">
                <label className=" font-medium text-gray-700">
                  Sr. Citizen
                </label>
                <input
                  type="checkbox"
                  name="U_SCDISC"
                  checked={formValues.U_SCDISC == 1}
                  className="form-check h-5 w-5 mt-auto"
                />
              </div>

              <div className="w-[25%] flex flex-col items-center text-center">
                <label className=" font-medium text-gray-700">Indigenous</label>
                <input
                  type="checkbox"
                  name="U_INDIGENOUS"
                  checked={formValues.U_INDIGENOUS == 1}
                  className="form-check h-5 w-5 mt-auto"
                />
              </div>

              <div className="w-[25%] flex flex-col items-center text-center">
                <label className=" font-medium text-gray-700">PWD</label>
                <input
                  type="checkbox"
                  name="U_PWD"
                  checked={formValues.U_PWD == 1}
                  className="form-check h-5 w-5 mt-auto"
                />
              </div>
            </div>
          </div>
          {/* END OF MRN, PREFIX, CHECKBOX */}

          {/* START OF NAME AND GENDER INPUTS  */}
          <div
            className={`grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-2 mb-3 `}
          >
            <div className="col-span-1">
              <label className=" font-medium text-gray-700" htmlFor="mrn">
                Last Name <span className="text-[#dc3545]">*</span>
              </label>
              <input
                type="text"
                name="U_LASTNAME"
                value={formValues.U_LASTNAME || ""}
                onChange={handleChange}
                disabled={mrnSelected != "new"}
                className={`bg-gray-200 text-gray-900 w-full border  rounded-full px-3 py-2 focus:outline-none focus:ring-2  mt-auto ${
                  mrnSelected != "new" && "cursor-not-allowed"
                }`}
              />
            </div>
            <div className="col-span-1">
              <label className=" font-medium text-gray-700" htmlFor="mrn">
                First Name <span className="text-[#dc3545]">*</span>
              </label>
              <input
                type="text"
                name="U_FIRSTNAME"
                value={formValues.U_FIRSTNAME || ""}
                onChange={handleChange}
                disabled={mrnSelected != "new"}
                className={`bg-gray-200 text-gray-900 w-full border  rounded-full px-3 py-2 focus:outline-none focus:ring-2  mt-auto ${
                  mrnSelected != "new" && "cursor-not-allowed"
                }`}
              />
            </div>
            <div className="col-span-1">
              <label className=" font-medium text-gray-700" htmlFor="mrn">
                Middle Name <span className="text-[#dc3545]">*</span>
              </label>
              <input
                type="text"
                name="U_MIDDLENAME"
                value={formValues.U_MIDDLENAME || ""}
                onChange={handleChange}
                className="bg-gray-200 text-gray-900 w-full border  rounded-full px-3 py-2 focus:outline-none focus:ring-2  mt-auto"
              />
            </div>
            <div className=" col-span-1 grid grid-cols-3 gap-2">
              <div className="col-span-1">
                <label className=" font-medium text-gray-700" htmlFor="mrn">
                  Ext Name
                </label>
                <input
                  type="text"
                  name="U_EXTNAME"
                  value={formValues.U_EXTNAME || ""}
                  onChange={handleChange}
                  className="bg-gray-200 text-gray-900 w-full border  rounded-full px-3 py-2 focus:outline-none focus:ring-2  mt-auto"
                />
              </div>
              <div className="col-span-2">
                <label className=" font-medium text-gray-700" htmlFor="mrn">
                  Gender<span className="text-[#dc3545]">*</span>
                </label>
                <select
                  className="bg-gray-200 text-gray-900 w-full border  rounded-full px-3 py-2 focus:outline-none focus:ring-2  mt-auto"
                  name="U_GENDER"
                  value={formValues.U_GENDER || ""}
                  onChange={handleChange}
                >
                  <option value="">Select Gender</option>
                </select>
              </div>
            </div>
          </div>
          {/* END OF NAME AND GENDER INPUTS  */}
          {/* START OF BIRTHDATE, AGE, CIVIL STATUS, PLACE OF BIRTH, OCCUPATION */}
          <div
            className={`grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-2 mb-3 `}
          >
            <div className="col-span-1">
              <label className=" font-medium text-gray-700" htmlFor="mrn">
                Birthdate <span className="text-[#dc3545]">*</span>
              </label>
              <input
                type="date"
                name="U_BIRTHDATE"
                value={formValues.U_BIRTHDATE}
                onChange={handleChange}
                disabled={mrnSelected != "new"}
                className={`bg-gray-200 text-gray-900 w-full border  rounded-full px-3 py-2 focus:outline-none focus:ring-2  mt-auto ${
                  mrnSelected != "new" && "cursor-not-allowed"
                }`}
              />
            </div>
            <div className="col-span-1 grid grid-cols-3 gap-2">
              <div className="col-span-1">
                <label className=" font-medium text-gray-700" htmlFor="mrn">
                  Age
                </label>
                <input
                  type="text"
                  name="U_PREFIX"
                  value={formValues.AGE || ""}
                  onChange={handleChange}
                  className="bg-gray-200 text-gray-900 w-full border  rounded-full px-3 py-2 focus:outline-none focus:ring-2  mt-auto"
                />
              </div>
              <div className="col-span-2">
                <label className=" font-medium text-gray-700" htmlFor="mrn">
                  Civil Status<span className="text-[#dc3545]">*</span>
                </label>
                <select
                  className="bg-gray-200 text-gray-900 w-full border  rounded-full px-3 py-2 focus:outline-none focus:ring-2  mt-auto"
                  name="U_CIVILSTATUS"
                  value={formValues.U_CIVILSTATUS || ""}
                  onChange={handleChange}
                >
                  <option value="">Select Status</option>
                </select>
              </div>
            </div>
            <div className="col-span-1">
              <label className=" font-medium text-gray-700" htmlFor="mrn">
                Place of Birth
              </label>
              <input
                type="text"
                name="U_BIRTHPLACE"
                value={formValues.U_BIRTHPLACE || ""}
                onChange={handleChange}
                className="bg-gray-200 text-gray-900 w-full border  rounded-full px-3 py-2 focus:outline-none focus:ring-2  mt-auto"
              />
            </div>
            <div className="col-span-1">
              <label className=" font-medium text-gray-700" htmlFor="mrn">
                Occupation
              </label>
              <input
                type="text"
                name="U_OCCUPATION"
                value={formValues.U_OCCUPATION || ""}
                onChange={handleChange}
                className="bg-gray-200 text-gray-900 w-full border  rounded-full px-3 py-2 focus:outline-none focus:ring-2  mt-auto"
              />
            </div>
          </div>
          {/* END OF BIRTHDATE, AGE, CIVIL STATUS, PLACE OF BIRTH, OCCUPATION */}

          {/* START OF NATIONALITY, RELIGION, ID TYPE, ID NUMBER */}
          <div
            className={`grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-2 mb-3 `}
          >
            <div className="col-span-1">
              <label className=" font-medium text-gray-700" htmlFor="mrn">
                Nationality <span className="text-[#dc3545]">*</span>
              </label>
              <select
                className="bg-gray-200 text-gray-900 w-full border  rounded-full px-3 py-2 focus:outline-none focus:ring-2  mt-auto"
                name="U_NATIONALITY"
                value={formValues.U_NATIONALITY || ""}
                onChange={handleChange}
              >
                <option value="">Select Nationality</option>
              </select>
            </div>
            <div className="col-span-1">
              <label className=" font-medium text-gray-700" htmlFor="mrn">
                Religion<span className="text-[#dc3545]">*</span>
              </label>
              <select
                className="bg-gray-200 text-gray-900 w-full border  rounded-full px-3 py-2 focus:outline-none focus:ring-2  mt-auto"
                name="U_RELIGION"
                value={formValues.U_RELIGION || ""}
                onChange={handleChange}
              >
                <option value="">Select Religion</option>
              </select>
            </div>
            <div className="col-span-1">
              <label className=" font-medium text-gray-700" htmlFor="mrn">
                ID Type
              </label>
              <input
                type="text"
                name="U_PREFIX"
                value={formValues.U_PREFIX || ""}
                onChange={handleChange}
                className="bg-gray-200 text-gray-900 w-full border  rounded-full px-3 py-2 focus:outline-none focus:ring-2  mt-auto"
              />
            </div>
            <div className="col-span-1">
              <label className=" font-medium text-gray-700" htmlFor="mrn">
                ID Number
              </label>
              <input
                type="text"
                name="U_PREFIX"
                value={formValues.U_PREFIX || ""}
                onChange={handleChange}
                className="bg-gray-200 text-gray-900 w-full border  rounded-full px-3 py-2 focus:outline-none focus:ring-2  mt-auto"
              />
            </div>
          </div>
        </form>
        <hr className="my-3" />
        {/* END OF BIRTHDATE, AGE, CIVIL STATUS, PLACE OF BIRTH, OCCUPATION */}
        <div className="grid  grid-cols-1">
          <div className="col-span-1  order-1  lg:order-0 md:order-0">
            <h6 className=" underline ">Present Address</h6>
          </div>
          {/* <div className="col-span-3 order-0 lg:order-1 md:order-1">
              <hr className="my-3" />
            </div> */}
        </div>

        <form id="present-address-form">
          {/* START OF PRESENT COUNTRY, PROVINCE, CITY AND BRGY */}
          <div
            className={`grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-2 mb-3 `}
          >
            <div className="col-span-1">
              <label className=" font-medium text-gray-700" htmlFor="U_COUNTRY">
                Country<span className="text-[#dc3545]">*</span>
              </label>
              <select
                className="bg-gray-200 text-gray-900 w-full border  rounded-full px-3 py-2 focus:outline-none focus:ring-2  mt-auto"
                name="U_COUNTRY"
                value={formValues.U_COUNTRY || ""}
                onChange={handleChange}
              ></select>
            </div>
            <div className="col-span-1">
              <label
                className=" font-medium text-gray-700"
                htmlFor="U_PROVINCE"
              >
                Province<span className="text-[#dc3545]">*</span>
              </label>
              <select
                className="bg-gray-200 text-gray-900 w-full border  rounded-full px-3 py-2 focus:outline-none focus:ring-2  mt-auto"
                name="U_PROVINCE"
                value={formValues.U_PROVINCE || ""}
                onChange={handleChange}
              >
                <option>Select Province</option>
              </select>
            </div>
            <div className="col-span-1">
              <label className=" font-medium text-gray-700" htmlFor="U_CITY">
                City/Municipality<span className="text-[#dc3545]">*</span>
              </label>
              <select
                className="bg-gray-200 text-gray-900 w-full border  rounded-full px-3 py-2 focus:outline-none focus:ring-2  mt-auto"
                name="U_CITY"
                value={formValues.U_CITY || ""}
                onChange={handleChange}
              ></select>
            </div>
            <div className="col-span-1">
              <label
                className=" font-medium text-gray-700"
                htmlFor="U_BARANGAY"
              >
                Barangay<span className="text-[#dc3545]">*</span>
              </label>
              <select
                className="bg-gray-200 text-gray-900 w-full border  rounded-full px-3 py-2 focus:outline-none focus:ring-2  mt-auto"
                name="U_BARANGAY"
                value={formValues.U_BARANGAY || ""}
                onChange={handleChange}
              ></select>
            </div>
          </div>
          {/* END OF PRESENT COUNTRY, PROVINCE, CITY AND BRGY */}
          {/* START OF STREET AND ZIPCODE */}
          <div
            className={`grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-2 mb-3 `}
          >
            <div className="col-span-2">
              <label className=" font-medium text-gray-700" htmlFor="U_STREET">
                Street<span className="text-[#dc3545]">*</span>
              </label>
              <input
                type="text"
                id="U_STREET"
                name="U_STREET"
                value={formValues.U_STREET}
                className="bg-gray-200 text-gray-900 w-full border  rounded-full px-3 py-2 focus:outline-none focus:ring-2  mt-auto"
              />
            </div>
            <div className="col-span-1">
              <label className=" font-medium text-gray-700" htmlFor="U_ZIP">
                Zip Code<span className="text-[#dc3545]">*</span>
              </label>
              <input
                type="text"
                id="U_ZIP"
                name="U_ZIP"
                value={formValues.U_ZIP}
                disabled
                className="bg-gray-200 text-gray-900 w-full border  rounded-full px-3 py-2 focus:outline-none focus:ring-2  mt-auto cursor-not-allowed"
              />
            </div>
          </div>
          {/* END OF STREET AND ZIPCODE*/}
        </form>
        <hr className="my-3" />

        <form id="permanent-address-form">
          <div className="grid lg:grid-cols-4 md:grid-cols-1 sm:grid-cols-1 gap-2">
            <div className="col-span-1 order-0 ">
              <h6
                role="button"
                className="underline cursor-pointer"
                // onClick={isSameAddress ? changeSameWPresent : undefined}
              >
                Permanent Address
              </h6>
            </div>
            <div className="col-span-1 gap-2 flex flex-row-reverse items-center align-middle justify-center ">
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
            className={`permanent-address-div transition-all duration-300 ease-in-out `}
          >
            {/* START OF PERMANENT COUNTRY, PROVINCE, CITY AND BRGY */}
            <div
              className={`grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-2 mb-3 `}
            >
              <div className="col-span-1">
                <label
                  className=" font-medium text-gray-700"
                  htmlFor="U_COUNTRY_PERMANENT"
                >
                  Country<span className="text-[#dc3545]">*</span>
                </label>
                <select
                  className="bg-gray-200 text-gray-900 w-full border  rounded-full px-3 py-2 focus:outline-none focus:ring-2  mt-auto"
                  name="U_COUNTRY_PERMANENT"
                  value={formValues.U_COUNTRY_PERMANENT || ""}
                  onChange={handleChange}
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
                  className="bg-gray-200 text-gray-900 w-full border  rounded-full px-3 py-2 focus:outline-none focus:ring-2  mt-auto"
                  name="U_PROVINCE_PERMANENT"
                  value={formValues.U_PROVINCE_PERMANENT || ""}
                  onChange={handleChange}
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
                  className="bg-gray-200 text-gray-900 w-full border  rounded-full px-3 py-2 focus:outline-none focus:ring-2  mt-auto"
                  name="U_CITY_PERMANENT"
                  value={formValues.U_CITY_PERMANENT || ""}
                  onChange={handleChange}
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
                  className="bg-gray-200 text-gray-900 w-full border  rounded-full px-3 py-2 focus:outline-none focus:ring-2  mt-auto"
                  name="U_BARANGAY_PERMANENT"
                  value={formValues.U_BARANGAY_PERMANENT || ""}
                  onChange={handleChange}
                ></select>
              </div>
            </div>
            {/* END OF PERMANENT COUNTRY, PROVINCE, CITY AND BRGY */}
            {/* START OF STREET AND ZIPCODE */}
            <div
              className={`grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-2 mb-3 `}
            >
              <div className="col-span-2">
                <label
                  className=" font-medium text-gray-700"
                  htmlFor="U_STREET_PERMANENT"
                >
                  Street<span className="text-[#dc3545]">*</span>
                </label>
                <input
                  type="text"
                  id="U_STREET_PERMANENT"
                  name="U_STREET_PERMANENT"
                  value={formValues.U_STREET_PERMANENT}
                  className="bg-gray-200 text-gray-900 w-full border  rounded-full px-3 py-2 focus:outline-none focus:ring-2  mt-auto"
                />
              </div>
              <div className="col-span-1">
                <label
                  className=" font-medium text-gray-700"
                  htmlFor="U_ZIP_PERMANENT"
                >
                  Zip Code<span className="text-[#dc3545]">*</span>
                </label>
                <input
                  type="text"
                  id="U_ZIP_PERMANENT"
                  name="U_ZIP_PERMANENT"
                  value={formValues.U_ZIP_PERMANENT}
                  disabled
                  className="bg-gray-200 text-gray-900 w-full border  rounded-full px-3 py-2 focus:outline-none focus:ring-2  mt-auto cursor-not-allowed"
                />
              </div>
            </div>
          </div>
        </form>
        {/* END OF STREET AND ZIPCODE*/}
        <hr className="my-3" />
        <div className="flex py-2 px-1 items-end">
          <button
            className="bg-gray-900 hover:bg-gray-700"
            onClick={patientSubmit(handleSubmit)}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default PatientInfoTab;
