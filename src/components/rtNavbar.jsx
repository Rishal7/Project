import Navbar from "./navbar";
import Complaints from "./pages/complaints";
import History from "./pages/history";
import Provision from "./pages/provision";
import { Route, Routes } from "react-router-dom";

function Nav() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Provision />} />
          <Route path="/history" element={<History />} />
          <Route path="/complaints" element={<Complaints />} />
        </Routes>
      </div>
    </>
  );
}

export default Nav;
