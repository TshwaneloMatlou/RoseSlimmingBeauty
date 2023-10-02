import './index.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

import Navbar from './components/Navbar'
import Footer from './components/Footer';
import BookAppointment from './pages/BookAppointment';
import FirSaunaDome from './pages/FirSaunaDome';
import LaserLipo from './pages/LaserLipo';
import FaradicMachine from './pages/FaradicMachine';
import FatFreezing from './pages/FatFreezing';
import ButtandHipLift from './pages/ButtandHipLift';
import InbodyScan from './pages/InbodyScan';
import Services from './pages/Services';
import BottomBanner from './components/BottomBanner';
import Newsletter from './components/NewsLetter';

function App() {
  return (
    <Router>
      <div className='grid gap-3 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 p-2'>
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/Home">
              <Home />
            </Route>
            <Route exact path="/About">
              <About />
            </Route>
            <Route exact path="/Contact">
              <Contact />
            </Route>
            <Route exact path="/Services">
              <Services />
           </Route>
            <Route exact path="/BookAppointment">
              <BookAppointment />
            </Route>
            <Route exact path="/FirSaunaDome">
              <FirSaunaDome />
            </Route>
            <Route exact path="/LaserLipo">
              <LaserLipo />
            </Route>
            <Route exact path="/FaradicMachine">
              <FaradicMachine />
            </Route>
            <Route exact path="/FatFreezing">
              <FatFreezing />
            </Route>
            <Route exact path="/ButtandHipLift">
              <ButtandHipLift />
            </Route>
            <Route exact path="/InbodyScan">
              <InbodyScan />
           </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div> 
          <BottomBanner /> 
          <Newsletter />
          <Footer />
      </div>
    </Router>
  );
}

export default App;
