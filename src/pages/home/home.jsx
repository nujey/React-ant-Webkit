import React from 'react'

import Slider from "./components/sider";
import HomeIntro from "./components/home-intro";
import Banner from './components/banner'

// import { saveFormData } from '../../store/home/action'
import './home.scss'

class Home extends React.Component {
  render() {
    return(
      <main className='home-main clearfix'>
        <header className="home-header">
          <span>兮电首页</span>
          <span>商务案例</span>
          <a className="logo">兮电之家</a>
          <span>合作共赢</span>
          <span>联系小电</span>  
        </header>
        <div>
          <Banner />
        </div>
        <div className="home-intro clearfix">
          <HomeIntro />
        </div>
        {/* <HomeIntro /> */}
        <div className="home-footer">浙c 备案</div>
      </main>
    )
  }
}
export default Home
