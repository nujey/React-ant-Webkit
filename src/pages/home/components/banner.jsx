import React from 'react'
import bookBanner from '../../../assets/images/book3.jpg'
import coffeeBanner from '../../../assets/images/coffee.png'
import mochaBanner from '../../../assets/images/mocha2.jpg'

import './banner.scss'

const demoList = [{
  key: 1,
  value: '1',
  label: '甜蜜抹茶',
  imgurl: mochaBanner,
  decOne: `纤云弄巧，飞星传恨,银汉迢迢暗度`,
  decTwo: `金风玉露一相逢,便胜却、人间无数`,
}, {
  key: 2,
  value: '2',
  label: '静谧图书',
  imgurl: bookBanner,
  decOne: `灯火纸窗修竹里`,
  decTwo: `读无声`,
}, {
  key: 3,
  value: '3',
  label: '优雅咖啡',
  imgurl: coffeeBanner,
  decOne: `从别后，忆相逢`,
  decTwo: `几回魂梦与君同`,
}]
class Banner extends React.Component {
  render() {
    const demoListHtml = demoList.map((item) => {
      return <li className="banner-li" key={item.key}>
        <img src={item.imgurl} alt="demo图片"/>
        <div className="banner-meng">
          <p className="banner-label">{item.label}</p>
          <i className="iconfont xd-banner-add"></i>
          <p className="banner-decription">{item.decOne}</p>
          <p className="banner-decription">{item.decTwo}</p>
        </div>
      </li>
    })
    return (
      <div className="banner-swiper">
        {
          demoList.length ? <ul className="home-banner-list">
            {demoListHtml}
          </ul> : ''
        }
      </div>
    )
  }
}

export default Banner
