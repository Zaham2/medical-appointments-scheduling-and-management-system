import GoogleAuth from "./features/google-auth";
import Login from "./features/google-auth/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./features/landing";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path="/auth" element={<GoogleAuth />} />
      </Routes>
    </Router>
  );
}

export default App;
