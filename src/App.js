import React from 'react';
import './App.css';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import Process from './components/Process/Process';
import Resume from './components/Resume/Resume';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';
import Testimonials from './components/Testimonials/Testimonials';
import Header from './components/Header/Header';

function App() {
  
  return (
    <React.Fragment>
      <Header />
      <hr />
      <Home />
      <hr />
      <About />
      <hr />
      <Portfolio />
      <hr />
      <Resume />
      <hr />
      <Skills />
      <hr />
      <Testimonials />
      <hr />
      <Process />
      <hr />
      <Contacts />
      <hr />
      <Footer />
    </React.Fragment>
  );
}

export default App;
