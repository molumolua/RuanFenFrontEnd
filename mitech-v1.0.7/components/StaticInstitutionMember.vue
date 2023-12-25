<template>
  <div id="container" style="width: 600px; height: 400px;"></div>
</template>
<script>
import { Bar  } from '@antv/g2plot';
import axios from "axios";
export default {
  name: "StaticInstitutionMember",
  data(){
    return {

      line_data: [
        { "institution_name": "机构1", "member_num": 60 },
        { "institution_name": "机构2", "member_num": 57 },
        { "institution_name": "机构3", "member_num": 53 },
        { "institution_name": "机构4", "member_num": 49 },
        { "institution_name": "机构5", "member_num": 47 },
        { "institution_name": "机构6", "member_num": 43 },
        { "institution_name": "机构7", "member_num": 39 },
        { "institution_name": "机构8", "member_num": 36 },
        { "institution_name": "机构9", "member_num": 33 },
        { "institution_name": "机构10", "member_num": 30 },
        { "institution_name": "机构11", "member_num": 26 },
        { "institution_name": "机构12", "member_num": 22 },
        { "institution_name": "机构13", "member_num": 19 },
        { "institution_name": "机构14", "member_num": 16 },
        { "institution_name": "机构15", "member_num": 12 }
      ]

    }
  },

  mounted() {
    const BarChart = new Bar("container", {
      container: this.$refs.container,
      // data: this.line_data,
      data: this.line_data.map(item => ({
        ...item,
        color: '#' + Math.floor(Math.random()*16777215).toString(16) // 随机生成颜色
      })),
      xField: 'member_num',
      yField: 'institution_name',
      color: 'color',
      barStyle: { radius: [13, 13, 0, 0] },
      legend: {
        position: 'top-left',
      },
      // smooth: true,
      xAxis: {
        title: { text: '注册学者数量' },
      },
      yAxis: {
        title: { text: '机构名称' },
      },
      tooltip: {
        customItems: (originalItems) => {
          // 自定义tooltip内容
          const customItems = originalItems.map((item) => {
            return {
              ...item,
              name: '机构注册学者',
              value: `${item.data.member_num}`,
            };
          });
          return customItems;
        },
      },

    });
    BarChart.render();
  },
}
</script>

<style scoped>
#container{
  display: inline-block;
  padding-top: 100px;
  width:40%;
  height: 700px;
  padding-bottom: 100px;
  overflow: visible;
}
</style>

