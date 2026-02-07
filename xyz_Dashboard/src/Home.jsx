import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="dashboard-container">
      <h1>XYZ Analytics Portal</h1>

      <div className="card">
        <h3>Welcome</h3>
        <p>
          Welcome to the XYZ Analytics Dashboards. Use the sidebar to explore
          Sales Performance and Quality Metrics across outlets.
        </p>
      </div>

      <div className="card">
        <h3>Available Dashboards</h3>

        <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
          <Link to="/sales" style={{ textDecoration: "none" }}>
            <div className="kpi" style={{ cursor: "pointer" }}>📊 Sales Dashboard</div>
          </Link>
          <Link to="/quality" style={{ textDecoration: "none" }}>
            <div className="kpi" style={{ cursor: "pointer" }}>✅ Quality Dashboard</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
