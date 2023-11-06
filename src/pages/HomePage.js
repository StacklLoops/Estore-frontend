import React from "react";
import CategorysFeature from "../components/CategorysFeature";
import Navbar from "../components/Navbar";
function HomePage() {
  return (
    <div>
      <Navbar>
        <CategorysFeature></CategorysFeature>
      </Navbar>
    </div>
  );
}

export default HomePage;
