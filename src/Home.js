import React from 'react';
import Banner from './Banner';
import ProjectSection from './ProjectSection';
import Career from "./Career";
import Footer from './Footer';

function Home() {
  return (
    <>
      <div className="App">
        <Banner />
        <ProjectSection />
        <Career />
      </div>
      <Footer />
    </>
  )
}
export default Home;
