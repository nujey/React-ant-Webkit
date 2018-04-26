import React from 'react'
// import { Menu, Icon, Button, Switch } from 'antd'
import { Link } from 'react-router-dom'
// import MenuItem from 'antd/lib/menu/MenuItem';

// const SubMenu = Menu.SubMenu
// 作品展示的侧边栏数组
const SubMenuList = [{
  key: 1,
  text: '首页介绍',
  toPage: '/home'
}, {
  key: 2,
  text: '店铺案例',
  toPage: '/home'
}, {
  key: 3,
  text: '合作共赢',
  toPage: '/home'
}, {
  key: 4,
  text: '节日活动',
  toPage: '/home'
}, {
  key: 5,
  text: '联系小电',
  toPage: '/home'
}]
// 个人中心列表侧边栏数组
// const SubmenuUserList = [{
//   key: 6,
//   text: '我的世界',
//   toPage: '/drag-demo'
// }]
class Slider extends React.Component {
  state = {
    // 侧边栏展开还是收起
    collapsed: false,
    // theme主题
    theme: 'dark',
  }
  handleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }
  handleChangeTheme = (value) => {
    this.setState({
      theme: value ? 'dark' : 'light'
    })
  }
  handleSeclect = (val) => {
    if(val.key === '2') {
      this.props.history.push('/drag-demo')
    }
  }
  render() {
    return(
      <div className="slider-box" style={{ width: 240 }}>
        <Link to="/home">
          {
            SubMenuList.length ? <ul className="slider-pro-list">
            {
              SubMenuList.map((item, index) => {
                return <li key={index} className="slider-li" style={{top: 80 * index +'px'}}>{item.text}</li>
              })
            }
            </ul> : ''
          }
        </Link>
      </div>
    )
  }
}

export default Slider
