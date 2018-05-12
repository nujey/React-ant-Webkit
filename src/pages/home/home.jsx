import React from 'react'

// import Slider from "./components/sider";
import HomeIntro from "./components/home-intro";
import Banner from './components/banner'
// import { Link } from 'react-router-dom'
// import { saveFormData } from '../../store/home/action'
import Header from '../../components/header/header'

import './home.scss'
import Footer from '../../components/footer/footer';

class Home extends React.Component {
  render() {
    return(
      <main className='home-main clearfix'>
        <Header anchorName="anchor"/>
        <div>
          <Banner />
        </div>
        <div className="home-intro clearfix">
          <HomeIntro />
        </div>
        <Footer />
        <a id="anchor"></a>
      </main>
    )
  }
}
export default Home
