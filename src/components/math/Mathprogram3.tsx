/* eslint-disable prettier/prettier */
import React, { useState , useEffect } from "react";

export default function Mathprogram3() {
    const [relativeError, setRelativeError] = useState(null);

    const calculateRelativeError = (e) => {
      e.preventDefault();
      const approximateValue = parseFloat(e.target.approximateValue.value);
      const trueValue = parseFloat(e.target.trueValue.value);
  
      if (!isNaN(approximateValue) && !isNaN(trueValue) && trueValue !== 0) {
        const calculatedRelativeError = Math.abs((approximateValue - trueValue) / trueValue) * 100;
        setRelativeError(calculatedRelativeError);
      }
    };
  
    const resetForm = () => {
      setRelativeError(null);
    };






    return (
        <div className='rounded'  style={{backgroundColor: "#EDF5E1"}}>
        <p className="text-2xl font-bold text-sky-500  mb-6 text-center mt-2 pt-3">
        Percentage Error Calculator
      </p>

      <hr />

      <div className="flex items-center justify-center">
        <div className="m-4 font-semibold text-gray-600 ">
          <form method="post" onSubmit={calculateRelativeError}>
            <label htmlFor="approximateValue" className="block mb-2">
              Enter Approximate Value:
            </label>
            <input
              type="text"
              id="approximateValue"
              name="approximateValue"
              className="border p-2 rounded"
              placeholder="Enter an approximate value"
              required
            />

            <label htmlFor="trueValue" className="block my-2">
              Enter True Value:
            </label>
            <input
              type="text"
              id="trueValue"
              name="trueValue"
              className="border p-2 rounded"
              placeholder="Enter the true value"
              required
            />

            <br />
            <button
              type="submit"
              className="px-4 py-2 border border-blue-500 rounded bg-white text-blue-500 hover:bg-blue-500 hover:text-white"
            >
              Calculate Percentage Error
            </button>
            <button
              type="reset"
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded my-4 ml-2"
              onClick={resetForm}
            >
              Reset
            </button>
          </form>
        </div>
        <div className="m-4 text-bold text-gray-600">
          <h5>Percentage Error:</h5>
          {relativeError !== null && (
            <p> {relativeError}%</p>
          )}
        </div>
      </div>
    </div>

      );
  }