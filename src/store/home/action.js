import * as home from './action-type'

// 保存表单数据
export const saveFormData = (value, datatype) => {
  console.log(value, datatype, 'home-action保存表单数据')
  return {
    type: home.SAVEFORMDATA,
    value,
    datatype
  }
}
