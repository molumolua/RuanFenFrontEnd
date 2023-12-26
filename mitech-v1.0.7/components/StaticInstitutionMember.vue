<template>
  <div id="container" style="width: 600px; height: 0px; padding: 0; margin:0;"></div>
</template>
<script>
import { Bar  } from '@antv/g2plot';
import axios from "axios";
export default {
  name: "StaticInstitutionMember",
  data(){
    return {

      line_data: [
        { "institution_name": "Beihang University", "member_num": 80 },
        { "institution_name": "Stanford University", "member_num": 67 },
        { "institution_name": "Tsinghua University", "member_num": 58 },
        { "institution_name": "Harvard University", "member_num": 49 },
        { "institution_name": "Peking University", "member_num": 47 },
        { "institution_name": "University of Washington", "member_num": 33 },
        { "institution_name": "Zhejiang University", "member_num": 25 },
        { "institution_name": "National University of Singapore", "member_num": 16 },
        { "institution_name": "Massachusetts Institute of Technology", "member_num": 7 },
        { "institution_name": "University of Cambridge", "member_num": 3 },
  

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
  display: flex;
  padding-top: 100px;
  width:40%;
  height: 700px;
  padding-bottom: 100px;
  overflow: visible;
}
</style>

