import React, { useState } from "react";

function Mathprogram4() {
  const [x, setX] = useState(0);
  const [n, setN] = useState(0);
  const [eApproximation, setEApproximation] = useState(null);
  const [sinApproximation, setSinApproximation] = useState(null);

  const calculateApproximations = () => {
    const xValue = parseFloat(x);
    const nValue = parseInt(n);

    if (!isNaN(xValue) && !isNaN(nValue)) {
      // Calculate the e^x approximation using the Maclaurin series
      const eApproximationValue = calculateEApproximation(xValue, nValue);

      // Calculate the sin(x) approximation using the Maclaurin series
      const sinApproximationValue = calculateSinApproximation(xValue, nValue);

      setEApproximation(eApproximationValue);
      setSinApproximation(sinApproximationValue);
    }
  };

  const calculateEApproximation = (x, n) => {
    let approximation = 1; // Start with the first term of the series
    let term = 1;

    for (let i = 1; i <= n; i++) {
      term *= x / i;
      approximation += term;
    }

    return approximation;
  };

  const calculateSinApproximation = (x, n) => {
    let approximation = 0;

    for (let i = 0; i < n; i++) {
      const term = ((-1) ** i * x ** (2 * i + 1)) / factorial(2 * i + 1);
      approximation += term;
    }

    return approximation;
  };

  const factorial = (number) => {
    if (number === 0) return 1;
    let result = 1;
    for (let i = 1; i <= number; i++) {
      result *= i;
    }
    return result;
  };

  return (
    <div className="bg-gray-100 min-h-screen mt-2 p-6" style={{backgroundColor: "#EDF5E1"}}>
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Taylor Series Approximation and Error Analysis
      </h1>
      <hr className="my-6" />

      <div className="flex justify-center items-center space-x-4">
        <div className="w-1/2">
          <div className="mb-4">
            <label className="block mb-2" htmlFor="xValue">
              Enter the value of x:
            </label>
            <input
              type="text"
              id="xValue"
              name="xValue"
              className="border p-2 rounded w-full"
              value={x}
              onChange={(e) => setX(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2" htmlFor="nValue">
              Enter the number of terms (n):
            </label>
            <input
              type="text"
              id="nValue"
              name="nValue"
              className="border p-2 rounded w-full"
              value={n}
              onChange={(e) => setN(e.target.value)}
            />
          </div>

          <button
            onClick={calculateApproximations}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Calculate
          </button>
        </div>

        <div className="w-1/2">
          {eApproximation !== null && sinApproximation !== null && (
            <div>
              <h2 className="text-2xl font-semibold my-4">Approximations:</h2>
              <p>e^x ≈ {eApproximation}</p>
              <p>sin(x) ≈ {sinApproximation}</p>

              <h2 className="text-2xl font-semibold my-4">Error Analysis:</h2>
              <p>Actual e^x = {Math.exp(x)}</p>
              <p>Actual sin(x) = {Math.sin(x)}</p>
              <p>Error in e^x ≈ {Math.abs(Math.exp(x) - eApproximation)}</p>
              <p>Error in sin(x) ≈ {Math.abs(Math.sin(x) - sinApproximation)}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Mathprogram4;
