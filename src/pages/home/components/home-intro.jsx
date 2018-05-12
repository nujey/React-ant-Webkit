import React from 'react'
import DecbgTwo from '../../../assets/images/decbg2.jpg'


import './home-intro.scss'

class HomeIntro extends React.Component {
  render() {
    return (
      <div className="home-content">
        <div className="home-desc-one">
          <div className="dec-meng">
            <div className="content-title">
              <span>我们是谁？能做什么</span>
              <p className="content-line"></p>
            </div>
            <p className="content-detail">兮电之家专门给店铺、公司、餐厅、休闲场等线上线下的店家提供专业制作网站的服务</p>
            <p className="content-detail">
              无论您是<strong className="content-red-color">线上：</strong>淘宝店铺、京东店铺、微信商家<br/>还是
              <strong className="content-red-color">线下：</strong>餐厅、咖啡厅、茶艺馆、KTV、舞蹈室、健身房<br/>
              再或者您是<strong className="content-red-color">私人、公司：</strong>演员模特、空姐空少、服装公司</p>
            <p className="content-detail">
              我们都可以为您做一个私人化的<span className="personal-make-color">专属定制</span>网站，用来陈列、旋转展示、轮播展示您的产品和美食、甚至是写真集，
              我们会根据不同的需求、不同的场景、不同的季节、来对您的产品进行网站一站式的服务</p>
            <p className="content-detail">只有您想不到的点，没有我们不做的站！</p>
            <p className="content-detail">无论你是什么身份、什么行业、什么店铺、什么产品，只要您想！只要您需要为自己、为自己的产品打造一款网站之家，就可以和我们合作</p>
            <p className="content-detail"><span className="webkit-color">炫酷休闲电脑网页:</span>居家上网聊天必备，聊天的时候即时宣传自己的小店，只需要发送我们给您做的网站之家</p>
            <p className="content-detail"><span className="webkit-color">迷你便捷手机网页:</span>只需要提前收藏好自己的网页，不论您是在高铁、汽车、邮轮，还是在公园、操场、树荫，都可以通过我们的网站随时宣传自己的小店</p>
            <p className="content-detail"><span className="webkit-color">时尚简约微信小程序:</span>无论何时何地，只要您有网，只要打开微信，就可以让同学、同事、甚至陌生人扫一扫关注您的微信店铺，实时了解您的店铺信息</p>
          </div>
        </div>
        <div className="home-desc-two" style={{background: 'url('+DecbgTwo+') no-repeat 0 0', backgroundSize: '100% 100%'}}>
          <div className="dec-meng">
            <div className="content-title">
              <span>小电能带给您</span>
              <p className="content-line"></p>
            </div>
            <p className="content-detail">还在用嘴巴和白纸来为自己的店打广告嘛？</p>
            <p className="content-detail">还在一遍遍的给客人口述你的美食、衣服、化妆品嘛？</p>
            <p className="content-detail">还在为了自己的写真没办法实时分享给好友而苦恼嘛？</p>
            <p className="content-detail">还在为自己的摄影作品、模特宣传而一次次的跑打印店嘛？</p>
            <p className="content-detail">新的世纪！新的起点！</p>
            <p className="content-detail">拥有<span className="logo-color">兮电之家</span>，一个网站链接，轻松宣传自己的店铺产品、点击产品图片随时冲进线上商铺买！买！买！</p>
            <p className="content-detail">拥有<span className="logo-color">兮电之家</span>，小小二维码，分秒代替数以千计张的宣传大字报、传单，环保！便捷！价廉！</p>
            <p className="content-detail">拥有<span className="logo-color">兮电之家</span>，小小二维码，您再也不用到处发传单、再也不用很多大学生每天发传单！</p>
          </div>
        </div>
      </div>
    )
  }
}
export default HomeIntro
