import React from 'react';
import Roadmap from './Roadmap';

const RoadmapBox = ({ title, days, link, color }) => {
  const boxStyle = {
    padding: '20px',
    margin: '10px',
    backgroundColor: color,
    borderRadius: '8px',
    textAlign: 'center',
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
  };

  return (
    <div style={boxStyle}>
      <h2>{title}</h2>
      <p>Days: {days}</p>
      <a href={link} style={linkStyle} target="_blank" rel="noopener noreferrer">
        {link}
      </a>
    </div>
  );
};

const Rmap = () => {
  return (
    <>
    <Roadmap/>
    <div style={{ display: 'grid', justifyContent: 'space-around', flexWrap: 'wrap' }}>
      <RoadmapBox
        title="Self-Assessment"
        days="1-14"
        link="[Self-Assessment Resource]"
        color="#b3e0f2"
      />
      <RoadmapBox
        title="Skill Enhancement"
        days="15-28"
        link="[Skill Enhancement Courses]"
        color="#c9f2c9"
      />
      <RoadmapBox
        title="Resume Building"
        days="29-42"
        link="[Resume Building Tips]"
        color="#ffddb3"
      />
      <RoadmapBox
        title="Networking"
        days="43-56"
        link="[Networking Strategies]"
        color="#e1d7f0"
      />
      <RoadmapBox
        title="Job Search"
        days="57-70"
        link="[Job Search Platforms]"
        color="#ffc2e0"
      />
    </div>
    </>
  );
};

export default Rmap;
