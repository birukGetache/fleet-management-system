import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faRoute, faUsers, faTools, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { Line } from 'react-chartjs-2';
import { useNavigate } from 'react-router-dom';
import { Chart as ChartJS } from 'chart.js/auto'
const Landing = () => {
  const navigate= useNavigate();
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'System Usage',
        fill: false,
        lineTension: 0.3, // Adjust the line tension here
        backgroundColor: '#ff0000',
        borderColor: '#ff0000',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#ff0000',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#ff0000',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  return (
    <div className="landing-page">
      <header>
        <h1>Welcome to Fleet Management System</h1>
        <p className="subheader">Efficiently manage your fleet with our advanced solutions</p>
      </header>
      <div className="main-content">
        <section className="features-section">
          <h2>Features:</h2>
          <ul class="features-list">
  <li>
    <div class="feature-card">
      <div class="icon">
        <FontAwesomeIcon icon={faMapMarkerAlt} />
      </div>
      <div class="content">
        <span>Real-time tracking of vehicles</span>
        <p>Monitor your fleet's location and status in real-time.</p>
      </div>
    </div>
  </li>
  <li>
    <div class="feature-card">
      <div class="icon">
        <FontAwesomeIcon icon={faRoute} />
      </div>
      <div class="content">
        <span>Route optimization</span>
        <p>Optimize routes to save time, fuel, and money.</p>
      </div>
    </div>
  </li>
  <li>
    <div class="feature-card">
      <div class="icon">
        <FontAwesomeIcon icon={faUsers} />
      </div>
      <div class="content">
        <span>Driver management</span>
        <p>Manage your drivers' schedules, tasks, and performance.</p>
      </div>
    </div>
  </li>
  <li>
    <div class="feature-card">
      <div class="icon">
        <FontAwesomeIcon icon={faTools} />
      </div>
      <div class="content">
        <span>Vehicle maintenance scheduling</span>
        <p>Schedule and track maintenance tasks to keep your vehicles in top condition.</p>
      </div>
    </div>
  </li>
  <li>
    <div class="feature-card">
      <div class="icon">
        <FontAwesomeIcon icon={faChartLine} />
      </div>
      <div class="content">
        <span>Reports and analytics</span>
        <p>Access detailed reports and analytics to make informed decisions and optimize operations.</p>
      </div>
    </div>
  </li>
</ul>

        </section>
        <section className="chart-section">
          <h2>System Usage Over Time:</h2>
          <div className="chart-container">
            <Line data={data} />
          </div>
        </section>
      </div>
      <section className="get-started-section">
        <h2>Get Started:</h2>
        <p>Start optimizing your fleet management today!</p>
        <button className="list-cars-button" onClick={()=>{
          navigate("/Card");
        }}>List Cars</button>
      </section>
    </div>
  );
};

export default Landing;
