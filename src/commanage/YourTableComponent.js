import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStickyNote } from '@fortawesome/free-solid-svg-icons';
import './YourTableComponent.css'; // Create a CSS file for styling

const YourTableComponent = () => {
  // Sample data for the table rows
  const tableData = [
    { serialNo: 1, problemName: 'Problem 1', youtubeRef: 'https://www.youtube.com/watch?v=Video1', leetCode: 'https://leetcode.com/problem/123', notes: 'Some notes for Problem 1' },
    { serialNo: 2, problemName: 'Problem 1', youtubeRef: 'https://www.youtube.com/watch?v=Video1', leetCode: 'https://leetcode.com/problem/123', notes: 'Some notes for Problem 1' },
    { serialNo: 3, problemName: 'Problem 1', youtubeRef: 'https://www.youtube.com/watch?v=Video1', leetCode: 'https://leetcode.com/problem/123', notes: 'Some notes for Problem 1' },
    { serialNo: 4, problemName: 'Problem 1', youtubeRef: 'https://www.youtube.com/watch?v=Video1', leetCode: 'https://leetcode.com/problem/123', notes: 'Some notes for Problem 1' },
    { serialNo: 5, problemName: 'Problem 2', youtubeRef: 'https://www.youtube.com/watch?v=Video2', leetCode: 'https://leetcode.com/problem/456', notes: 'Some notes for Problem 2' },
    { serialNo: 6, problemName: 'Problem 3', youtubeRef: 'https://www.youtube.com/watch?v=Video3', leetCode: 'https://leetcode.com/problem/789', notes: 'Some notes for Problem 3' },
    { serialNo: 7, problemName: 'Problem 3', youtubeRef: 'https://www.youtube.com/watch?v=Video3', leetCode: 'https://leetcode.com/problem/789', notes: 'Some notes for Problem 3' },
    { serialNo: 8, problemName: 'Problem 3', youtubeRef: 'https://www.youtube.com/watch?v=Video3', leetCode: 'https://leetcode.com/problem/789', notes: 'Some notes for Problem 3' },
    { serialNo: 9, problemName: 'Problem 3', youtubeRef: 'https://www.youtube.com/watch?v=Video3', leetCode: 'https://leetcode.com/problem/789', notes: 'Some notes for Problem 3' },
    { serialNo: 10, problemName: 'Problem 3', youtubeRef: 'https://www.youtube.com/watch?v=Video3', leetCode: 'https://leetcode.com/problem/789', notes: 'Some notes for Problem 3' },
    { serialNo: 11, problemName: 'Problem 3', youtubeRef: 'https://www.youtube.com/watch?v=Video3', leetCode: 'https://leetcode.com/problem/789', notes: 'Some notes for Problem 3' },
    { serialNo: 12, problemName: 'Problem 3', youtubeRef: 'https://www.youtube.com/watch?v=Video3', leetCode: 'https://leetcode.com/problem/789', notes: 'Some notes for Problem 3' },
    { serialNo: 13, problemName: 'Problem 3', youtubeRef: 'https://www.youtube.com/watch?v=Video3', leetCode: 'https://leetcode.com/problem/789', notes: 'Some notes for Problem 3' },
    { serialNo: 14, problemName: 'Problem 3', youtubeRef: 'https://www.youtube.com/watch?v=Video3', leetCode: 'https://leetcode.com/problem/789', notes: 'Some notes for Problem 3' },
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
                type="checkbox"
                checked={checkedItems[row.serialNo] || false}
                onChange={() => handleCheckboxChange(row.serialNo)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default YourTableComponent;
