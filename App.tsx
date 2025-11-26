import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import HowItWorks from './components/HowItWorks';
import Advantages from './components/Advantages';
import AiDemo from './components/AiDemo';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans bg-white text-black min-h-screen selection:bg-black selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <HowItWorks />
        <Advantages />
        <AiDemo />
      </main>
      <Footer />
    </div>
  );
}

export default App;