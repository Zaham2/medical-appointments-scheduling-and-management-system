import GoogleAuth from "./features/google-auth";
import Dashboards from "./features/dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./features/landing";

function App() {
  return (
    <div className="flex-container">
      <div className="container">
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/auth" element={<GoogleAuth />} />
            <Route path="/dashboards" element={<Dashboards />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
