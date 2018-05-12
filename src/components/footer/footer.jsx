import React from 'react';
import Qrcode from '../../assets/images/qrcode.jpg'
import Qq from '../../assets/images/qq.jpg'
import './footer.scss';

class Footer extends React.Component {
  render() {
    return(
      <div className="home-bottom-qrcode">
        <div>
          <p>微信扫一扫联系小电</p>
          <img src={Qrcode} alt="" className="qrcode-img"/>
        </div>
        <div>
          <p>QQ联系专业客服哦</p>
          <img src={Qq} alt="" className="qrcode-img"/>
        </div>
        <div>
          <ul className="home-bottom-list">
            <li>© timih5 兮电 2018-2024. All Rights Reserved.</li>
            <li>浙ICP备1234567号</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Footer