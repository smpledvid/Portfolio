import { React } from 'react'

import Title from '../Title/title.component';
import Header from '../Header/header.component';
import About from '../About/about.component';
import Sidebar from '../Sidebar/sidebar.component';
import Projects from '../Projects/projects.component';
import Experience from '../Experience/experience.component';

import './home-page.scss';

function HomePage() {
  return (
    <section id="home-page">
      {/* <Header></Header> */}
      <Sidebar></Sidebar>
      {/* <svg className="wave-svg" viewBox="0 0 500 250" preserveAspectRatio="none"> 
        <path d="M0,100 C250,200 350,100 500,100 L500,00 L0,1 Z" className="wave-path"></path>
      </svg> */}
      {/* <div id="wave-container">
        <svg id="wave-svg" preserveAspectRatio="none" width="1440" height="74" viewBox="0 0 1440 74" >
          <path d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z" className="wave-path"></path>
        </svg>
      </div> */}
      
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Title></Title>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <About></About>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Projects></Projects>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Experience></Experience>
          </div>
        </div>
      </div>
    </section>
    
  );
}

export default HomePage;
