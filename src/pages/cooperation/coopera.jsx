import React from 'react'

import './coopera.scss'
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
const cooperaList = require('./coopera-list')

const biteStr = '合作主要是线上形式，您可以直接微信找管理人员或者是直接qq联系客服人员了解详情都是可以的，兮电为大家准备了丰富的套餐选择套餐中的每一项都是可以根据自己的需要自己搭配的，小电为大家在专业的角度划分了三个套餐供大家选择参考'

class Coopera extends React.Component {
  state = {
    strHtml: biteStr
  }
  handleTyping = () => {
    let timer = null
    const arr = []
    let num = 0
    for(let i = 0; i < biteStr.length; i++) {
      arr.push(biteStr[i])
    }
    let html = ''
    this.setState({
      strHtml: biteStr
    })
    // timer = setInterval(() => {
    //   if (num < arr.length) {
    //     html += arr[num]
    //     // this.setState({
    //     //   strHtml: biteStr
    //     // })
    //     num++
    //   } else {
    //     clearInterval(timer)
    //   }
    // }, 100)
  }
  render() {
    const listContentHtml = cooperaList.lists.map((item) => {
      return <li key={item.pid}>
        <span>{item.name}</span>
        <span>{item.desc}</span>
        <span>{item.pid < 100 && item.mealA ? 'X' : item.pid > 100 && item.mealA  ? item.mealA : 'V'}</span>
        <span>{item.pid < 100 && item.mealB ? 'X' : item.pid > 100 && item.mealB  ? item.mealB : 'V'}</span>
        <span>{item.pid < 100 && item.mealC ? 'X' : item.pid > 100 && item.mealC  ? item.mealC : 'V'}</span>
      </li>
    })
    return (
      <div>
        <Header />
        <p className="coopera">
          {this.state.strHtml}
        </p> 
        <div className="list-box">
          <ol className="list list-title">
            <li>
              <span>商品名称</span>
              <span>商品描述</span>
              <span>套餐A</span>
              <span>套餐B</span>
              <span>套餐C</span>
            </li>
          </ol>
            {
              cooperaList.lists.length ? <ul className="list list-content">
              {listContentHtml}
              </ul> : <p className="empty-list">暂无数据</p>
            }
        </div>
        <Footer />
      </div>
    )
  }
}
export default Coopera
