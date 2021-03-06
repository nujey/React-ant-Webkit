import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';


class Header extends React.Component {
  scrollToAnchor = (anchor) => {
    let anchorName = this.props.anchorName;
    if (anchorName) {
      let anchorNameElement = document.getElementById(anchorName);
      anchorNameElement.scrollIntoView({
        behavior: 'smooth'
      })
    }
  }
  render() {
    return(
      <header className="home-header">
        <Link to="/"><span>兮电首页</span></Link>
        <span>商务案例</span>
        <a className="logo"><i className="iconfont xd-shandian"></i></a>
        <Link to="/coopera" className="nav-to-menu"><span>合作共赢</span></Link>
        {/* <span>合作共赢</span> */}
        <span onClick={this.scrollToAnchor}>联系小电</span>
      </header>
    )
  }
}
export default Header