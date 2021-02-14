import { React } from 'react'

import Title from '../Title/title.component';
import Header from '../Header/header.component';
import About from '../About/about.component';
import Sidebar from '../Sidebar/sidebar.component';
import Projects from '../Projects/projects.component';
import Experience from '../Experience/experience.component';
import Contact from '../Contact/contact.component';
import { animateScroll as scroll } from 'react-scroll';
import NavigationIcon from '@material-ui/icons/Navigation';
import IconButton from '@material-ui/core/IconButton';

import './home-page.scss';

function HomePage() {

  function scrollToTop() {
    scroll.scrollToTop();
  }

  return (
    <section id="home-page">
      {/* <Sidebar></Sidebar> */}
      {/* <div className="wave-container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F3F4F5" fill-opacity="1" d="M0,64L26.7,74.7C53.3,85,107,107,160,133.3C213.3,160,267,192,320,186.7C373.3,181,427,139,480,128C533.3,117,587,139,640,149.3C693.3,160,747,160,800,144C853.3,128,907,96,960,96C1013.3,96,1067,128,1120,138.7C1173.3,149,1227,139,1280,128C1333.3,117,1387,107,1413,101.3L1440,96L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
      </div> */}
      <div className="container-fluid content-container">
        <Header></Header>
        <div className="row above-wave">
          <div className="col-md-12">
            <Title></Title>
          </div>
        </div>
        <div className="row wave-row">
          <div className="col-md-12 svg-col">
            <div className="wave-container">
              <svg id="wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#161d2f" fillOpacity="1" d="M0,64L26.7,74.7C53.3,85,107,107,160,133.3C213.3,160,267,192,320,186.7C373.3,181,427,139,480,128C533.3,117,587,139,640,149.3C693.3,160,747,160,800,144C853.3,128,907,96,960,96C1013.3,96,1067,128,1120,138.7C1173.3,149,1227,139,1280,128C1333.3,117,1387,107,1413,101.3L1440,96L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
            </div>
          </div>
        </div>
        <div className="row below-wave">
          <div className="col-md-12 ">
            <About></About>
          </div>
        </div>
        <div className="row below-wave">
          <div className="col-md-12 ">
            <Projects></Projects>
          </div>
        </div>
        <div className="row  below-wave">
          <div className="col-md-12">
            <Experience></Experience>
          </div>
        </div>
        <div className="row below-wave">
          <div className="col-md-12 ">
            <Contact></Contact>
          </div>
        </div>
      </div>
      <div className="scroll-top-container">
        <IconButton onClick={scrollToTop} id="scroll-top-button">
          <NavigationIcon className="navigation-arrow-button"/>
        </IconButton>
      </div>
    </section>
  );
}

export default HomePage;
