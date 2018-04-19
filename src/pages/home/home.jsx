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
        </header>
        <Slider />
      </main>
    )
  }
}
export default Home
