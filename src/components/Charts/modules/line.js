/*
 * @Author: your name
 * @Date: 2020-11-20 14:38:03
 * @LastEditTime: 2020-12-04 11:08:09
 * @LastEditors: lujunpeng
 * @Description: In User Settings Edit
 * @FilePath: /data-management-web/src/components/Charts/modules/line.js
 */

/**
 * @description:三轴加速度统计图
 * @param {*} chart
 * @return {*}
 */
export const triaxialway = chart => {
  chart.tooltip({
    title: 'tool',
    showCrosshairs: true,
    shared: true
  })
  chart.option('slider', {
    start: 0,
    end: 1,
    trendCfg: {
      isArea: false
    }
  })
  chart
    .line()
    .position('i*value')
    .color('key')
    .shape('smooth')
  chart.interaction('element-highlight')
}
