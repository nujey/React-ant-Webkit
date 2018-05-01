import React from 'react'

import Slider from "./components/sider";
import HomeIntro from "./components/home-intro";
import Banner from './components/banner'
import { Link } from 'react-router-dom'
// import { saveFormData } from '../../store/home/action'
import './home.scss'

class Home extends React.Component {
  render() {
    return(
      <main className='home-main clearfix'>
        <header className="home-header">
          <span>兮电首页</span>
          <span>商务案例</span>
          <a className="logo"><i className="iconfont xd-shandian"></i></a>
          <Link to="/coopera" className="nav-to-menu"><span>合作共赢</span></Link>
          {/* <span>合作共赢</span> */}
          <span>联系小电</span>  
        </header>
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
