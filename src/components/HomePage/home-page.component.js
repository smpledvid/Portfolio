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
