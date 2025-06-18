import React, { useEffect } from "react";
import Header from "./components/Header";
import AboutMe from './components/AboutMe';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="App">
      <Header />
      <AboutMe />
    </div>
  );
}

export default App;