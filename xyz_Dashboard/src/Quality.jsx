export default function Quality() {
  return (
    <div className="dashboard-container">
      <iframe
        title="Quality Dashboard"
        src="https://public.tableau.com/views/QUALITYDASHBOARD/Dashboard2?:embed=y&:showVizHome=no"
        style={{
          width: "100%",
          height: "800%",
          border: "none"
        }}
        allowFullScreen
      />
    </div>
  );
}
