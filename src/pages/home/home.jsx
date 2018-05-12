import React from 'react'

import Slider from "./components/sider";
import HomeIntro from "./components/home-intro";
import Banner from './components/banner'
import { Link } from 'react-router-dom'
// import { saveFormData } from '../../store/home/action'
import Header from '../../components/header'

import './home.scss'

class Home extends React.Component {
  render() {
    return(
      <main className='home-main clearfix'>
        <Header />
        <div>
          <Banner />
        </div>
        <div className="home-intro clearfix">
          <HomeIntro />
        </div>
      </main>
    )
  }
}
export default Home
