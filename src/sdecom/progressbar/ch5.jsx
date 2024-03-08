import React, { useState, useEffect } from 'react';
import './progress.css';

const ProgressBartwo = () => {
  const [width, setWidth] = useState(0);
  const checklistProgressInterval = 100 / 5; // Assuming there are 5 checkboxes

  const handleCheckboxChange = () => {
    const checkboxes = document.querySelectorAll(".myCheckBoxfive");
    let checkedCount = 0;

    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        checkedCount++;
      }
    });

    const newWidth = checkedCount * checklistProgressInterval;
    setWidth(newWidth);
  };

  useEffect(() => {
    const checkboxes = document.querySelectorAll(".myCheckBoxfive");

    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", handleCheckboxChange);
    });

    return () => {
      checkboxes.forEach((checkbox) => {
        checkbox.removeEventListener("change", handleCheckboxChange);
      });
    };
  }, []); // Run the effect only once on mount

  return (
    <div className="progress-container">
      <div className="progress">
        <div className="progress-inner" style={{ width: `${width}%` }}>
          <span className="label">{`${Math.round(width)}/100`}</span>
        </div>
      </div>
    </div>
  );
};

const CheckboxList = () => {
  return (
    <>
      <input className="myCheckBoxfive" type="checkbox" />
      <input className="myCheckBoxfive" type="checkbox" />
      <input className="myCheckBoxfive" type="checkbox" />
      <input className="myCheckBoxfive" type="checkbox" />
      <input className="myCheckBoxfive" type="checkbox" />
    </>
  );
};

const ProgressApp = () => {
  return (
    <div>
      <ProgressBartwo />
      <CheckboxList />
    </div>
  );
};

export default ProgressApp;
