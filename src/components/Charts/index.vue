<!--
 * @Author: your name
 * @Date: 2020-11-20 14:17:39
 * @LastEditTime: 2020-12-18 17:20:59
 * @LastEditors: lujunpeng
 * @Description: In User Settings Edit
 * @FilePath: /algorithm/Users/lujunpeng/Documents/Code/7b/antv-g2-v/src/components/Charts/index.vue
-->
<template>
  <div :id="id"></div>
</template>

<script>
import VChart from '@/plugins/andtv-g2'
import { watch } from 'vue'
import { randomStr } from '@/utils'
import * as barModules from './modules/bar'
import * as lineodules from './modules/line'
export default {
  name: 'VChart',
  props: {
    // 绑定id
    id: {
      type: String,
      default: `chart_${randomStr()}`
    },
    // chart绑定数据
    data: {
      type: Array,
      default: () => [],
      required: true
    },
    width: {
      type: Number,
      default: 500
    },
    height: {
      type: Number,
      default: 500
    },
    modules: {
      type: String,
      default: 'barBasic',
      validator: value => {
        if (barModules[value]) {
          return true
        } else if (lineodules) {
          return true
        } else {
          console.warn(`Chart组件属性值modules=${value}不存在`)
          return false
        }
      }
    }
  },
  setup(props) {
    let chart
    const chartBasic = {
      ...lineodules,
      ...barModules
    }

    // 监听数据变化
    // watch(
    //   () => props.data,
    //   (newData, oldData) => {
    //     if (oldData.length === 0) {
    //       chart.data(newData)
    //       chart.render() // 更新图表
    //     } else {
    //       chart.changeData(newData)
    //     }
    //   }
    // )
    watch(
      () => props.data,
      newData => {
        chart.data(newData)
        chart.render() // 更新图表
      }
    )

    const restart = chartType => {
      // chart.clear() // 清理所有图形
      chart.data(props.data)
      chartBasic[chartType](chart)
      chart.render() // 更新图表
    }

    const onload = () => {
      chart = new VChart({
        container: props.id,
        forceFit: true,
        width: props.width,
        height: props.height
      })
      chartBasic[props.modules](chart)
    }
    return {
      onload,
      restart
    }
  }
}
</script>

<style scoped lang="scss"></style>
