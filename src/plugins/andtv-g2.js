/*
 * @Date: 2020-11-13 15:54:37
 * @LastEditors: lujunpeng
 * @LastEditTime: 2020-11-27 16:25:11
 * @FilePath: /data-management-web/src/plugins/andtv-g2.js
 */
// 定义全新的主题结构
import { registerTheme, Chart } from '@antv/g2'
// Step 1: 注册主题
registerTheme('newTheme', {
  // defaultColor: 'red',
  // colors10: [
  //   '#FF6B3B',
  //   '#626681',
  //   '#FFC100',
  //   '#9FB40F',
  //   '#76523B',
  //   '#DAD5B5',
  //   '#0E8E89',
  //   '#E19348',
  //   '#F383A2',
  //   '#247FEA'
  // ],
  // colors20: [
  //   '#FF6B3B',
  //   '#626681',
  //   '#FFC100',
  //   '#9FB40F',
  //   '#76523B',
  //   '#DAD5B5',
  //   '#0E8E89',
  //   '#E19348',
  //   '#F383A2',
  //   '#247FEA',
  //   '#2BCB95',
  //   '#B1ABF4',
  //   '#1D42C2',
  //   '#1D9ED1',
  //   '#D64BC0',
  //   '#255634',
  //   '#8C8C47',
  //   '#8CDAE5',
  //   '#8E283B',
  //   '#791DC9'
  // ]
})

// Step 2: 使用

export default class VChart extends Chart {
  constructor(props) {
    super(props)
    super.theme('newTheme')
  }
}
