<template>
  <div id="container" ></div>
</template>

<script>
import { Pie } from "@antv/g2plot";
import axios from "axios";
export default {
  name: "pieChart",
  data() {
    return {
      chartData: [ // 更改变量名以避免混淆
        { type: 'Computer science', value: 6149595 },
        { type: 'Medicine', value: 4979420 },
        { type: 'Biology', value: 3697549 },
        { type: "Physics", value: 3044073 },
        { type: "Engineering", value: 2757597 },
        { type: "Political science", value: 2611284 },
        { type: "Chemistry", value: 2456733 },
        { type: "Mathematics", value: 2377405 },
        { type: "Philosophy", value: 2330683 },
        { type: "Psychology", value: 2319065 },
        { type: "Materials science", value: 1785003 },
        { type: "Sociology", value: 1658621 },
        { type: "Geography", value: 1523474 },
        { type: "Economics", value: 1507329 },
        { type: "Others", value: 5374336 },
      ],
    }
  },

  mounted() {
    this.$nextTick(() => {
      const piePlot = new Pie('container', {
        data: this.chartData, // 使用新的变量名
        angleField: 'value',
        colorField: 'type',
        innerRadius: 0.55,
        radius:0.9,
        interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
        label: {
          content: ({ percent }) => {
            return `${(percent * 100).toFixed(2)}%`; // 显示百分比
          },
          style: {
            fontSize: 16, // 设置字体大小
            fill: null, // 使用默认颜色，与色块相同
          },
        },
        statistic: {
          title: false,
          content: {
            style: {
              whiteSpace: 'pre-wrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            },
            content: 'scientific\nfield',
          },
        },

      });

      piePlot.render();
    });
  }
}
</script>

<style scoped>
/* 确保容器有足够的尺寸 */
#container {
  display: inline-block;
  padding-top: 100px;
  width:40%;
  height: 700px;
  padding-bottom: 100px;
  overflow: visible;
}
</style>
