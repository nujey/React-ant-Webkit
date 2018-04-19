import * as home from './action-type'

let initialState = {
  // 姓名 账户名
  name: '',
  // 手机号
  phoneNo: ''
}

// 首页的表单数据
export const formData = (state = initialState, action = {}) => {
  switch(action.type) {
    case home.SAVEFORMDATA:
      return { ...state, ...{[action.datatype]: action.value}}
    default:
      return state
  }
}
