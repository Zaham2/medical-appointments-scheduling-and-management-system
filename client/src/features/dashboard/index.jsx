import React, { useEffect } from "react";
import ClinicDashboard from "./ClinicDashboard";
import PatientDashBoard from "./PatientDashBoard";
import Appointments from "./components/Appointments";
import Section from "./components/Section";

const Dashboards = () => {
  const [currentView, setCurrentView] = React.useState("patient");

  return (
    <>
      <div className="top-items">
        <Appointments />
        <Section />
      </div>
      {currentView === "patient" ? <PatientDashBoard /> : <ClinicDashboard />}
    </>
  );
};

export default Dashboards;
