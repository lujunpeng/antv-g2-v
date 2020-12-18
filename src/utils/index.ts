/*
 * @Date: 2020-12-18 16:54:56
 * @LastEditors: lujunpeng
 * @LastEditTime: 2020-12-18 16:55:38
 * @FilePath: /algorithm/Users/lujunpeng/Documents/Code/7b/antv-g2-v/src/utils/index.ts
 */
/**
 * @description: 生成随机字符串
 * @param {number} length 生成字符串长度
 * @return {string}
 */
export const randomStr = (length = 6) => {
  const str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let result = ''
  for (let i = length; i > 0; --i) {
    result += str[Math.floor(Math.random() * str.length)]
  }
  return result
}