import React from 'react'
import { saveFormData } from '../../store/home/action'
import './home.scss'

class Home extends React.Component {
  render() {
    return(
      <main className='home-main'>
        <header className="home-header">欢迎来到缇蜜之家</header>
      </main>
    )
  }
}
export default Home
