export default function About() {
  return (
    <div className="dashboard-container">
      <h2>About XYZ Dashboard</h2>

      <div className="card">
        <h3>Purpose</h3>
        <p>
          This portal provides business insights through interactive Sales and
          Quality dashboards built using Tableau and React.
        </p>
      </div>

      <div className="card">
        <h3>Features</h3>
        <ul>
          <li>Sales KPI Monitoring</li>
          <li>Quality Performance Analysis</li>
          <li>Outlet-wise Comparison</li>
          <li>Interactive Filtering</li>
        </ul>
      </div>
    </div>
  );
}
