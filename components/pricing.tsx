import React from "react";
import Navbar from "../components/Navbar";

function PricingPage({ className = "" }: PricingPageProps) {
  return (
    <div className={`relative ${className}`}>
      <Navbar />

      <div className="inline-flex h-[3518px] w-[1440px] resize flex-row overflow-hidden">
        {/* ... rest of the code ... */}
      </div>
    </div>
  );
}

interface PricingPageProps {
  className: string;
}

export default PricingPage;  // Move the export statement to the end of the file
