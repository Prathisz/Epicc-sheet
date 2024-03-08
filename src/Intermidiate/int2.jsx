import  {  useEffect } from 'react';
// import '../progressbar/progress.css';
import '../sdecom/progressbar/progress.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStickyNote } from '@fortawesome/free-solid-svg-icons';
// import '../../commanage/YourTableComponent.css';
import '../commanage/YourTableComponent.css' ;

const ProgressBar = () => {
  const [width, setWidth] = useState(0);
  const checklistProgressInterval = 100 / 5; // Assuming there are 5 checkboxes

  const handleCheckboxChange = () => {
    const checkboxes = document.querySelectorAll(".myCheckBoxInt2");
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
    const checkboxes = document.querySelectorAll(".myCheckBoxInt2");

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




const Int2 = () => {
  // Sample data for the table rows
  const tableData = [
    { serialNo: 1, problemName: 'Problem 1', youtubeRef: 'https://www.youtube.com/watch?v=Video1', leetCode: 'https://leetcode.com/problem/123', notes: 'Some notes for Problem 1' },
    { serialNo: 2, problemName: 'Problem 2', youtubeRef: 'https://www.youtube.com/watch?v=Video1', leetCode: 'https://leetcode.com/problem/123', notes: 'Some notes for Problem 1' },
    { serialNo: 3, problemName: 'Problem 3', youtubeRef: 'https://www.youtube.com/watch?v=Video1', leetCode: 'https://leetcode.com/problem/123', notes: 'Some notes for Problem 1' },
    { serialNo: 4, problemName: 'Problem 4', youtubeRef: 'https://www.youtube.com/watch?v=Video1', leetCode: 'https://leetcode.com/problem/123', notes: 'Some notes for Problem 1' },
    { serialNo: 5, problemName: 'Problem 5', youtubeRef: 'https://www.youtube.com/watch?v=Video2', leetCode: 'https://leetcode.com/problem/456', notes: 'Some notes for Problem 2' },
    
  ];

  // State to track checkbox status
  const [checkedItems, setCheckedItems] = useState({});

  // Function to handle checkbox change
  const handleCheckboxChange = (id) => {
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [id]: !prevCheckedItems[id],
    }));
  };

  // Function to handle clicking the notes icon
  const handleNotesClick = (notes) => {
    alert(notes); // You can replace this with your logic to handle the notes click
  };

  return (
    <>
    <ProgressBar/>
    <table className="your-table">
      <thead>
        <tr>
          <th>Serial No</th>
          <th>Problem Name</th>
          <th>Youtube Ref / Solution</th>
          <th>LeetCode</th>
          <th>Notes</th>
          <th>Checkbox</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row) => (
          <tr key={row.serialNo}>
            <td>{row.serialNo}</td>
            <td>{row.problemName}</td>
            <td>
              <a href={row.youtubeRef} target="_blank" rel="noopener noreferrer">
                {row.youtubeRef}
              </a>
            </td>
            <td>
              <a href={row.leetCode} target="_blank" rel="noopener noreferrer">
                {row.leetCode}
              </a>
            </td>
            <td>
              <FontAwesomeIcon
                icon={faStickyNote}
                className="notes-icon"
                onClick={() => handleNotesClick(row.notes)}
              />
            </td>
            <td>
              <input
                className='myCheckBoxInt2'
                type="checkbox"
                checked={checkedItems[row.serialNo] || false}
                onChange={() => handleCheckboxChange(row.serialNo)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  );
};

export default Int2;

