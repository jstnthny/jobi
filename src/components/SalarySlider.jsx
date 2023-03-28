import React, { useState } from 'react';
// import JobData from "./JobData.jsx";



const SalarySlider = ({ jobData, onSalaryChange }) => {

  const [minSalary, setMinSalary] = useState(0);
  const [maxSalary, setMaxSalary] = useState(Math.max(...jobData.map(job => job.salary)));

  const handleSalaryChange = (event, newValue) => {
    onSalaryChange(newValue);
  };

  return (
    <div>
      <h2>Salary Range: ${minSalary} - ${maxSalary}</h2>
      <input 
        type="range" 
        min={0} 
        max={maxSalary} 
        value={minSalary} 
        onChange={(event) => setMinSalary(parseInt(event.target.value))}
        step={1000}
      />
      <input 
        type="range" 
        min={minSalary} 
        max={Math.max(...jobData.map(job => job.salary))} 
        value={maxSalary} 
        onChange={(event) => setMaxSalary(parseInt(event.target.value))}
        step={1000}
      />
    </div>
  );
};

export default SalarySlider;