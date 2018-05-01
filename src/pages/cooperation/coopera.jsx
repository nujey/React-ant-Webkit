import React from 'react'

import './coopera.scss'
const cooperaList = require('./coopera-list')

const biteStr = '合作主要是线上形式，您可以直接微信找管理人员或者是直接qq联系客服人员了解详情都是可以的，兮电为大家准备了丰富的套餐选择套餐中的每一项都是可以根据自己的需要自己搭配的，小电为大家在专业的角度划分了三个套餐供大家选择参考'

class Coopera extends React.Component {
  state = {
    strHtml: ''
  }
  handleTyping = () => {
    console.log(cooperaList)
    const arr = []
    let num = 0
    for(let i = 0; i < biteStr.length; i++) {
      arr.push(biteStr[i])
    }
    let html = ''
    const timer = setInterval(() => {
      if (num < arr.length) {
        html += arr[num]
        this.setState({
          strHtml: html
        })
        num++
      } else {
        clearInterval(timer)
      }
    }, 100)
  }
  render() {
    return (
      <div>
        <header className="home-header">
          <span>兮电首页</span>
          <span>商务案例</span>
          <a className="logo"><i className="iconfont xd-shandian"></i></a>
          {/* <Link to="/coopera" className="nav-to-menu"><span>合作共赢</span></Link> */}
          <span onClick={this.handleTyping}>合作共赢</span>
          <span>联系小电</span>  
        </header>
        <p className="coopera">
          {this.state.strHtml}
        </p> 
      </div>
    )
  }
}
export default Coopera
