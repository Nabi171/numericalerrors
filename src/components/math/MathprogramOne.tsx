/* eslint-disable prettier/prettier */
import React, { useState , useEffect } from "react";
// import { Bar } from "react-chartjs-2";
export default function MathprogramOne() {
  const [result, setResult] = useState(null);
  const [absoluteError, setAbsoluteError] = useState(null);

  const calculateAbsoluteError = (e) => {
    e.preventDefault();
    const number1 = parseFloat(e.target.number1.value);
    const number2 = parseFloat(e.target.number2.value);

    if (!isNaN(number1) && !isNaN(number2)) {
      setResult(number1 - number2);
      setAbsoluteError(Math.abs(number1 - number2));
    }
  };

  const resetForm = () => {
    setResult(null);
    setAbsoluteError(null);
  };



     // Create a function to draw the chart
  const drawChart = () => {
    if (result !== null && absoluteError !== null) {
      const data = google.visualization.arrayToDataTable([
        ["Data", "Value"],
        ["Result", result],
        ["Absolute Error", absoluteError],
      ]);

      const options = {
        title: "Absolute Error Chart",
        legend: "none",
      };

      const chart = new google.visualization.BarChart(
        document.getElementById("chart-container")
      );
      chart.draw(data, options);
    }
  };

  useEffect(() => {
    // Load the Google Charts library and set a callback to draw the chart
    google.charts.load("current", { packages: ["corechart"] });
    google.charts.setOnLoadCallback(drawChart);
  }, [result, absoluteError]);



    return (
        <div className='rounded'  style={{backgroundColor: "#EDF5E1"}}>
      <h4 className="text-3xl font-bold text-gray-800 mb-6 text-center pt-2">
        Absolute Error Calculator
      </h4>
      
      <hr/>

      <div className="flex items-center justify-center">
        <div className="m-4">
          <form method="post" onSubmit={calculateAbsoluteError}>
            <label htmlFor="number1" className="block mb-2">
              Enter Number 1:
            </label>
            <input
              type="text"
              id="number1"
              name="number1"
              className="border p-2 rounded"
              placeholder="Enter a number"
              required
            />

            <label htmlFor="number2" className="block my-2">
              Enter Number 2:
            </label>
            <input
              type="text"
              id="number2"
              name="number2"
              className="border p-2 rounded"
              placeholder="Enter another number"
              required
            />

            <br />
            <button
              type="submit"
              className="bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded my-4"
            >
              Calculate
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
          <h5>The Answer is:</h5>
          {result && (
            <div>
              <p>Result: {result}</p>
              <p>Absolute Error: {absoluteError}</p>
            </div>
          )}
        </div>
        
      </div>
     <div>
     {result !== null && absoluteError !== null && (
          <div id="chart-container" style={{ height: "300px" }}></div>
        )}
    </div>
    </div>

      );
  }