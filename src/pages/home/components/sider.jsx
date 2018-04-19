import React from 'react'
import { Menu, Icon, Button, Switch } from 'antd'
import MenuItem from 'antd/lib/menu/MenuItem';

const SubMenu = Menu.SubMenu
// 作品展示的侧边栏数组
const SubMenuWorksList = [{
  key: 2,
  text: '小程序项目'
}, {
  key: 3,
  text: 'Vue解析'
}, {
  key: 4,
  text: 'React解析'
}]
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
  render() {
    const worksList = SubMenuWorksList.map((item) => 
      <MenuItem key={item.key}>{item.text}</MenuItem>
    )
    return(
      <div className="slider-box" style={{ width: 200 }}>
        <Button type="primary" size="small" onClick={this.handleCollapsed} style={{ marginBottom: 16 }}>
          <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}></Icon>
        </Button>
        <Switch
          checked={this.state.theme === 'dark'}
          onChange={this.handleChangeTheme}
          checkedChildren="dark"
          unCheckedChildren="light"
          style={{ marginLeft: 10 }}
        />
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme={this.state.theme}
          inlineCollapsed={this.state.collapsed}>
          <MenuItem key='1'>
            <Icon type="pie-chart" />
            <span>首页</span>
          </MenuItem>
         <SubMenu key="2" title={<span><Icon type="mail" /><span>作品展示</span></span>}>
          {worksList}
         </SubMenu>
        </Menu>
      </div>
    )
  }
}

export default Slider
