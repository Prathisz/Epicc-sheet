import React from 'react'

function Rightside() {
  return (
    <div style={{ position: 'relative', marginTop: '50px', width: '560px',marginLeft:'30px' }}>
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/tmg6d3T_T6Q?si=xvVLhETkj4H5Pw0I&amp;start=77"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
    style={{
      position: 'absolute',
      right: 0,
      transition: 'transform 0.3s ease-in-out',
    }}
    onMouseEnter={(e) => {
      e.target.style.transform = 'translateX(-10px)';
    }}
    onMouseLeave={(e) => {
      e.target.style.transform = 'translateX(0)';
    }}
  ></iframe>
</div>
  )
}

export default Rightside
