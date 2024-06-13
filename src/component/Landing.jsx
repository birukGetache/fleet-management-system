

const Landing = () => {
  return (
    <div className="landing-page">
      <header>
        <h1>Welcome to Fleet Management System</h1>
        <p className="subheader">Efficiently manage your fleet with our advanced solutions</p>
      </header>
      <section>
        <h2>Features:</h2>
        <ul>
          <li><span>Real-time tracking of vehicles</span> - Monitor your fleet's location and status in real-time.</li>
          <li><span>Route optimization</span> - Optimize routes to save time, fuel, and money.</li>
          <li><span>Driver management</span> - Manage your drivers' schedules, tasks, and performance.</li>
          <li><span>Vehicle maintenance scheduling</span> - Schedule and track maintenance tasks to keep your vehicles in top condition.</li>
          <li><span>Reports and analytics</span> - Access detailed reports and analytics to make informed decisions and optimize operations.</li>
        </ul>
      </section>
      <section>
        <h2>Get Started:</h2>
        <p>Start optimizing your fleet management today!</p>
        <button>Sign Up</button>
      </section>
      <footer>
        <p>&copy; 2024 Fleet Management System</p>
      </footer>
    </div>
  );
};

export default Landing;
