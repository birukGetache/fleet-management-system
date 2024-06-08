import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const CarDashboard = () => {
    const navigate = useNavigate();
  const location = useLocation();
  const { image, title, description } = location.state;

  return (
    <div className="car-dashboard">
        <button style={{position:"absolute", top:"10px",backgroundColor:"#d32f2f", cursor:"pointer", right:"20px", marginRight:"0", width:"100px", height:"50px"}} onClick={()=>{
    
            navigate(-1);
        }}>back</button>
      <div className="car-details">
        <img src={image} alt={title} />
        <div className="car-info">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="controls">
        <button className="control-btn">Start Engine</button>
        <button className="control-btn">Lock Doors</button>
        <button className="control-btn">Turn On Lights</button>
      </div>
    </div>
  );
};

export default CarDashboard;
