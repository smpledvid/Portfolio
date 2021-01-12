import { React } from 'react'

import Title from '../Title/title.component';
import Header from '../Header/header.component';
import About from '../About/about.component';
import Sidebar from '../Sidebar/sidebar.component';

import './home-page.scss';

function HomePage() {
  return (
    <section id="home-page">
      {/* <Header></Header> */}
      <Sidebar></Sidebar>
      <svg className="wave-svg" viewBox="0 0 500 250"> 
        <path d="M0,100 C250,200 350,100 500,100 L500,00 L0,1 Z" className="wave-path"></path>
      </svg>
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
      </div>
    </section>
    
  );
}

export default HomePage;
