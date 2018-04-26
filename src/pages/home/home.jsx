import React from 'react'

import Slider from "./components/sider";
import HomeIntro from "./components/home-intro";

// import { saveFormData } from '../../store/home/action'
import './home.scss'

class Home extends React.Component {
  render() {
    return(
      <main className='home-main clearfix'>
        <header className="home-header">
          <a href="javascript:()" className="logo"></a>
          行走在互联网世界的店铺之家
        </header>
        <Slider />
        <HomeIntro />
      </main>
    )
  }
}
export default Home
