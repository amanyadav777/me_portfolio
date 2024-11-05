import './App.css';
import React from 'react';
import Header from "./components/header/Header";
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Skill from './components/skills/Skills';
import Project from './components/project/Project';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ExperienceEducation from './components/experience&education/ExperienceEducation';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <About />
      <ExperienceEducation />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
