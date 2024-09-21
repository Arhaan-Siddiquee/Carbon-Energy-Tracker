import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2'; // Import for Chart
import { jsPDF } from 'jspdf'; // Import for PDF generation

function Dashboard() {
  // States for emission inputs
  const [electricity, setElectricity] = useState(0);
  const [transportation, setTransportation] = useState(0);
  const [manufacturing, setManufacturing] = useState(0);
  const [waste, setWaste] = useState(0);

  // Calculate total emission based on inputs
  const calculateTotalEmission = () => {
    return (
      parseFloat(electricity) +
      parseFloat(transportation) +
      parseFloat(manufacturing) +
      parseFloat(waste)
    );
  };

  // Chart Data
  const data = {
    labels: ['Electricity', 'Transportation', 'Manufacturing', 'Waste'],
    datasets: [
      {
        label: 'Carbon Emission (tons)',
        data: [electricity, transportation, manufacturing, waste],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  // Suggestions for reducing carbon footprint
  const getSuggestions = () => {
    const total = calculateTotalEmission();
    if (total > 100) {
      return 'Consider reducing energy consumption by optimizing the use of electricity and improving transportation efficiency.';
    } else {
      return 'Your carbon footprint is within acceptable limits, but there’s always room for improvement.';
    }
  };

  // Generate PDF report
  const generateReport = () => {
    const doc = new jsPDF();
    doc.text('Carbon Footprint Report', 10, 10);
    doc.text(`Electricity: ${electricity} tons`, 10, 20);
    doc.text(`Transportation: ${transportation} tons`, 10, 30);
    doc.text(`Manufacturing: ${manufacturing} tons`, 10, 40);
    doc.text(`Waste: ${waste} tons`, 10, 50);
    doc.text(`Total Emissions: ${calculateTotalEmission()} tons`, 10, 60);
    doc.text(`Suggestions: ${getSuggestions()}`, 10, 70);
    doc.save('carbon_footprint_report.pdf');
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Company Dashboard</h2>

      {/* Input fields for emissions */}
      <div className="mb-4">
        <label>Electricity Consumption (tons):</label>
        <input
          type="number"
          className="border px-4 py-2 mr-2"
          value={electricity}
          onChange={(e) => setElectricity(e.target.value)}
        />

        <label>Transportation (tons):</label>
        <input
          type="number"
          className="border px-4 py-2 mr-2"
          value={transportation}
          onChange={(e) => setTransportation(e.target.value)}
        />

        <label>Manufacturing (tons):</label>
        <input
          type="number"
          className="border px-4 py-2 mr-2"
          value={manufacturing}
          onChange={(e) => setManufacturing(e.target.value)}
        />

        <label>Waste (tons):</label>
        <input
          type="number"
          className="border px-4 py-2 mr-2"
          value={waste}
          onChange={(e) => setWaste(e.target.value)}
        />
      </div>

      {/* Total Emissions */}
      <h3 className="text-xl font-semibold">Total Carbon Emission: {calculateTotalEmission()} tons</h3>

      {/* Chart for visualization */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Carbon Emission Breakdown</h3>
        <Pie data={data} />
      </div>

      {/* Suggestions */}
      <div className="mt-4">
        <h3 className="text-xl font-semibold mb-2">Suggestions</h3>
        <p>{getSuggestions()}</p>
      </div>

      {/* PDF Report Generation */}
      <button
        className="mt-4 bg-green-500 text-white px-4 py-2"
        onClick={generateReport}
      >
        Download Report (PDF)
      </button>
    </div>
  );
}

export default Dashboard;
