import React, { useState } from 'react';

const CarbonForm = () => {
  const [electricity, setElectricity] = useState('');
  const [transport, setTransport] = useState('');
  const [waste, setWaste] = useState('');
  const [carbonFootprint, setCarbonFootprint] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalFootprint =
      Number(electricity) * 0.5 + Number(transport) * 0.3 + Number(waste) * 0.2;
    setCarbonFootprint(totalFootprint);
  };

  const handleReset = () => {
    setElectricity('');
    setTransport('');
    setWaste('');
    setCarbonFootprint(null);
  };

  return (
    <div className="p-6 bg-gray-100">
      <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Electricity Usage (kWh):</label>
          <input
            type="number"
            value={electricity}
            onChange={(e) => setElectricity(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Transport (km traveled):</label>
          <input
            type="number"
            value={transport}
            onChange={(e) => setTransport(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Waste (kg):</label>
          <input
            type="number"
            value={waste}
            onChange={(e) => setWaste(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white py-2 px-4 rounded mr-2"
        >
          Calculate Footprint
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="bg-red-600 text-white py-2 px-4 rounded"
        >
          Reset
        </button>
      </form>

      {carbonFootprint !== null && (
        <div className="mt-4 text-center">
          <h2 className="text-xl">Your Carbon Footprint</h2>
          <p className="text-2xl font-bold">{carbonFootprint.toFixed(2)} kg CO2</p>
        </div>
      )}
    </div>
  );
};

export default CarbonForm;
