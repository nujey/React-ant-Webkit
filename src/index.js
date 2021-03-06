import React from 'react';
import ReactDOM from 'react-dom';
import Route from './router/';
import Store from './store/store';
// 处理移动端点击延迟300ms的问题

import registerServiceWorker from './registerServiceWorker';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import './style/base.scss'

const render = Component => {
  ReactDOM.render(
    // 绑定dedux\热加载
    <Provider store={Store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    document.getElementById('root')
  )
}
render(Route)
registerServiceWorker();
