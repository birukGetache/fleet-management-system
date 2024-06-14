import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faOilCan, faCog, faSync, faArrowAltCircleRight, faCarSide, faCogs } from '@fortawesome/free-solid-svg-icons';
import AllowPoosition from './AllowPoosition';
import Chart from './Chart';
import Location from './Location';
import Status from "./Status"
import Now from "./Now"
const CarDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { image, title, description } = location.state;
  const maintenanceData = [
    { id: 1, status: 'In maintenance', description: 'Engine check', date: '2024-06-12', where :"adama" },
    { id: 2, status: 'In maintenance', description: 'Brake repair', date: '2024-06-10',where :"jimma" },
    { id: 3, status: 'In work', description: 'Delivering goods', date: '2024-06-08',where:"hawassa" },
    { id: 4, status: 'In work', description: 'Taxi service', date: '2024-06-07', where:"bahirdar" },
    { id: 5, status: 'In work', description: 'City tours', date: '2024-06-05', where:"mekele" },
    { id: 6, status: 'In work', description: 'Airport transfers', date: '2024-06-03', where:"asosa" },
    { id: 7, status: 'Accident', description: 'Car collision', date: '2024-06-11', where:"jijiga" },
    { id: 8, status: 'In maintenance', description: 'Oil change', date: '2024-06-09', where:"addis abeba" },
    { id: 9, status: 'In maintenance', description: 'Tire rotation', date: '2024-06-08', where:"semera" },
    { id: 10, status: 'In work', description: 'Fleet management', date: '2024-06-06', where:"hamer" },
    { id: 11, status: 'In work', description: 'School transport', date: '2024-06-05', where:"nirobi" },
    { id: 12, status: 'Accident', description: 'Traffic incident', date: '2024-06-10', where:"some where" },
  ];
  

  return (
    <div className='main'>
      <div className='properties'>
      <div className="card">
        <p><FontAwesomeIcon icon={faTachometerAlt} size="2x" color="#ff0000" /> Mileage: 450KM</p>
      </div>

      <div className="card">
        <p><FontAwesomeIcon icon={faOilCan} size="20px" color="#ff0000" /> Oil type: Benzine</p>
      </div>

      <div className="card">
        <p><FontAwesomeIcon icon={faCog} size="2x" color="#ff0000" /> Engine type: 2.0L I4</p>
      </div>

      <div className="card">
        <p><FontAwesomeIcon icon={faSync} size="2x" color="#ff0000" /> Transmission type: Automatic</p>
      </div>

      <div className="card">
        <p><FontAwesomeIcon icon={faCarSide} size="2x" color="#ff0000" /> Drive type: FWD</p>
      </div>
      </div>
      <div className="car-dashboard">
         <button
          style={{ position: "absolute", bottom: "0", backgroundColor: "#d32f2f", cursor: "pointer", right: "20px", width: "100px", height: "50px" }}
          onClick={() => {
            navigate(-1);
          }}
        >
          Back
        </button> 

        <div className="car-details">
          <img src={image} alt={title} />
          <div className="car-info">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
   

        <div className="controls">
          <button className="control-btn">Start Engine</button>
          <button className="control-btn">Lock Doors</button>
          <button className="control-btn">Turn On Lights</button>
        </div>
        </div>
        <Location />
      </div>

     <Chart />

        <div className='items' style={{  width: "calc(100% - 40px)", backgroundColor: "#ffffff", padding: "20px", maxHeight: "calc(100vh - 100px)", overflowY: "auto",display:"grid" }}>
        {maintenanceData.map((item) => (
          <div key={item.id} style={{ marginBottom: "10px", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}>
            <h4> <span className='span'>status:</span> {item.status}</h4>
            <p> <span className='span'>why :</span>{item.description}</p>
            <p> <span className='span'>date :</span>{item.date}</p>
            <p> <span className='span'>where :</span>{item.where}</p>
          </div>
        ))}
      </div>
      <div className='allowlocation'>
        <p>allowed area and where the car went in past month</p>
        <div className='stat'>
        <AllowPoosition></AllowPoosition>
        <div className='dates'>
     <Status status="working" site="somting" city="bishoftu"  projectname="asphalt" ></Status>
     <Now last="12:12:2012" lastmodified="mentainance" lastmakedate= "12:04:2002" lastworkcity= "bishoftu" lastworkpro= "road" ></Now>
     </div>
        </div>
    
     </div> 
    </div>
  );
};

export default CarDashboard;