  export default function Sales() {
    return (
      <div className="dashboard-container">
        <iframe
          title="Sales Dashboard"
          src="https://public.tableau.com/views/SalesDashbord_17704438883150/Dashboard1?:embed=y&:showVizHome=no"
          style={{
            width: "100%",
            height: "100%",
            border: "none"
          }}
          allowFullScreen
        />
      </div>
    );
  }
