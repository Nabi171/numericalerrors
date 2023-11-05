/* eslint-disable prettier/prettier */
import React, { useState , useEffect } from "react";

export default function Mathprogram2() {
    const [relativeError, setRelativeError] = useState(null);

    const calculateRelativeError = (e) => {
      e.preventDefault();
      const approximateValue = parseFloat(e.target.approximateValue.value);
      const trueValue = parseFloat(e.target.trueValue.value);
  
      if (!isNaN(approximateValue) && !isNaN(trueValue) && trueValue !== 0) {
        const calculatedRelativeError = Math.abs((approximateValue - trueValue) / trueValue);
        setRelativeError(calculatedRelativeError);
      }
    };
  
    const resetForm = () => {
      setRelativeError(null);
    };


//      // Create a function to draw the chart
//   const drawChart = () => {
//     if (result !== null && absoluteError !== null) {
//       const data = google.visualization.arrayToDataTable([
//         ["Data", "Value"],
//         ["Result", result],
//         ["Absolute Error", absoluteError],
//       ]);

//       const options = {
//         title: "Absolute Error Chart",
//         legend: "none",
//       };

//       const chart = new google.visualization.BarChart(
//         document.getElementById("chart-container")
//       );
//       chart.draw(data, options);
//     }
//   };

//   useEffect(() => {
//     // Load the Google Charts library and set a callback to draw the chart
//     google.charts.load("current", { packages: ["corechart"] });
//     google.charts.setOnLoadCallback(drawChart);
//   }, [result, absoluteError]);



    return (
        <div className='rounded'  style={{backgroundColor: "#EDF5E1"}}>
        <p className="text-4xl font-bold text-gray-800 mb-6 text-center mt-2 pt-2">
        Relative Error Calculator
      </p>

      <hr />

      <div className="flex items-center justify-center">
        <div className="m-4">
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
              Calculate Relative Error
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
        <div className="m-4">
          <h5>Relative Error:</h5>
          {relativeError !== null && (
            <p> {relativeError}</p>
          )}
        </div>
      </div>
    </div>

      );
  }