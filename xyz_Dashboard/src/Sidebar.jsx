import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">

      {/* Logo Section */}
      <div className="sidebar-logo">
        <img
          src="/xyz_Logo.png"
          alt="XYZ Logo"
          className="sidebar-logo-img"
        />
        <h2>XYZ Portal</h2>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">
        <Link to="/">Home</Link>
        <Link to="/sales">Sales Dashboard</Link>
        <Link to="/quality">Quality Dashboard</Link>
        <Link to="/about">About</Link>
      </nav>

    </div>
  );
}
