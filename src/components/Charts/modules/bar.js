/*
 * @Date: 2020-11-20 13:40:02
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-12-02 22:37:45
 * @FilePath: /data-management-web/src/components/Charts/modules/bar.js
 */
/**
 * @description:基础柱状图
 * @param {object} chart
 * @return {*}
 */

/**
 * @description:多排柱状图
 * @param {object} chart
 * @return {*}
 */
export const double = chart => {
  chart.scale('x', {
    nice: true,
    type: 'timeCat'
  })
  chart.tooltip({
    showMarkers: false,
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
    .interval()
    .position('x*y')
    .color('type')
    .adjust([
      {
        type: 'dodge',
        marginRatio: 0
      }
    ])
  chart.interaction('active-region')
}
