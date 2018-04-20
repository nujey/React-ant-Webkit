import React from 'react'
import Slider from "./components/sider";

import { saveFormData } from '../../store/home/action'
import './home.scss'

class Home extends React.Component {
  render() {
    return(
      <main className='home-main'>
        <header className="home-header">
          <a href="#" className="logo"></a>
          <p className="wel-title">欢迎来到切图仔世界</p>
        </header>
        <Slider />
      </main>
    )
  }
}
export default Home
