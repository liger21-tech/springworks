import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Walkthrough from "./pages/Walkthrough";
import Galleries from "./pages/Galleries";
import Corporate from "./pages/Corporate";
import Membership from "./pages/Membership";
import Shop from "./pages/Shop";
import Aboutus from "./pages/Aboutus";
import Contactus from "./pages/Contactus";
import Event from "./pages/Event";
import LegalPage from "./pages/LegalPage";

export default function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/walkthrough" element={<Walkthrough />} />
        <Route path="/galleries" element={<Galleries />} />
        <Route path="/corporate" element={<Corporate />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/event" element={<Event />} />
        <Route path="/legalPage" element={<LegalPage />} />
      </Routes>
    
  )
}
