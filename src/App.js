import React from "react";
import Navbar from "./Components/Navbar"
import HeroSection from "./Components/HeroSection"
import Footer from "./Components/Footer"
import FeaturesSection from "./Components/FeaturesSection";
import NewSection from "./Components/NewSection";
import PricingSection from "./Components/PricingSection";
import CommentSection from "./Components/CommentSection";
import Signup from "./Components/Signup";



function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <Footer />
      <FeaturesSection/>
      <NewSection/>
      <PricingSection/>
      <CommentSection/>
      <Signup/>
      
    </div>
  );
}

export default App;
