import { useState } from "react";
import Hero from "../components/sections/Hero";
import Navbar from "../components/layout/navbar";
import BrandLayout from "../components/layout/BrandLayout";
import Footer from "../components/layout/Footer";


export default function Landing() {
  const [open, setOpen] = useState(false);

  return (
<>
    <Navbar />
      
      <Hero onJoinClick={() => setOpen(true)} />
      
      {open && <JoinModal onClose={() => setOpen(false)} />}
    <Footer />
    </>
  );
}
