<template>
  <Header/>
  <div class="netChart" ref="container"></div>
  <div class="chart-container" ref="container1" ></div>
  <div v-if="showTooltip" :style="{ background: '#666666', position: 'fixed', left: tooltipPos.x + 'px', top: tooltipPos.y + 'px' ,color: 'white'}" >
    <div v-html="tooltipContent"></div>
  </div>
  <div v-if="showEdgetip" :style="{background: '#666666', position: 'fixed', left: EdgetipPos.x + 'px', top: EdgetipPos.y + 'px' ,color: 'white'}">
    <div v-html="EdgetipContent"></div>
  </div>
  <Footer/>
</template>


<script>
import G6 from '@antv/g6';
import { Area } from '@antv/g2plot';
import axios from "axios";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';
import {getLoacl} from "~/composables/state";
import paper from "~/components/Paper.vue";

    
export default {
  components: {
      Header,
      Footer
  },
  name: 'G6Chart',
  data() {
    return {
      chart_data:[
        {
          "id": "https://openalex.org/W3163652268",
          "title": "Attention Is All You Need In Speech Separation",
          "referenced_works": [
            "https://openalex.org/W2064675550",
            "https://openalex.org/W2127851351",
            "https://openalex.org/W2221409856",
            "https://openalex.org/W2460742184",
            "https://openalex.org/W2734774145",
            "https://openalex.org/W2794209590",
            "https://openalex.org/W2903739847",
            "https://openalex.org/W2952218014",
            "https://openalex.org/W2963317762",
            "https://openalex.org/W2963443859",
            "https://openalex.org/W2964199361",
            "https://openalex.org/W2972460025",
            "https://openalex.org/W2972818416",
            "https://openalex.org/W2981436548",
            "https://openalex.org/W3015834770",
            "https://openalex.org/W3016129867",
            "https://openalex.org/W3094607766",
            "https://openalex.org/W3095717210",
            "https://openalex.org/W3096893582"
          ],
          "related_works": [
            "https://openalex.org/W7958345",
            "https://openalex.org/W2279739",
            "https://openalex.org/W14899464",
            "https://openalex.org/W3011399",
            "https://openalex.org/W4354089",
            "https://openalex.org/W8459508",
            "https://openalex.org/W6882942",
            "https://openalex.org/W13529535",
            "https://openalex.org/W6452702",
            "https://openalex.org/W5683847"
          ],
        },
      ],
      final_data:[],
      idsForArea:"",
      papers:[],
      relations:[],
      rec_data:[],
      ids: "",
      showTooltip: false,
      tooltipContent: '',
      tooltipPos: { x: 0, y: 0 },
      showEdgetip: false,
      EdgetipContent: '',
      EdgetipPos: { x: 0, y: 0 },
    };
  },

  methods: {
    showNodeTooltip(node,evt) {
      const model = node.getModel();
      this.tooltipContent = `${model.title}<br>被引次数: ${model.papersPublished}`;
      this.tooltipPos = { x: evt.clientX+12, y: evt.clientY+12 };

      this.showTooltip = true;
    },
    hideTooltip() {
      this.showTooltip = false;
    },
    showEdgeTooltip(edge,evt) {
      const model = edge.getModel();
      this.EdgetipContent = ` ${model.sourceTitle}  >>  ${model.targetTitle}`;
      this.EdgetipPos = { x: evt.clientX+10, y: evt.clientY-10 };
      this.showEdgetip = true;
    },
    hideEdgeTooltip() {
      this.showEdgetip = false;
    },
    getIDS(){
      let a=0;
      for (let people of this.chart_data){
        if(a==0){
          this.idsForArea+=people.id;
          a=1;
        }else{
          this.idsForArea+='|';
          this.idsForArea+=people.id;
        }
      }
    },
    transformData(responseData) {
      const years = Array.from({ length: 8 }, (_, i) => 2016 + i); // 生成年份数组，从2013到2023
      responseData.results.forEach(result => {
        years.forEach(year => {
          const yearData = result.counts_by_year.find(y => y.year === year) || { cited_by_count: 0 };
          this.final_data.push({
            year: year.toString(),
            series: result.title,
            value: yearData.cited_by_count,
          });
        });
      });
    },
    async getList(){
      this.getIDS();
      try {
        const response = await axios.post(`http://121.36.19.201/api/get_works/?filter=ids.openalex:`+this.idsForArea+'&select=id,cited_by_count,title,counts_by_year');
        this.transformData(response.data);

      } catch (error) {
        console.error('Error fetching paper details:', error);
        // 处理错误
      }
    },
    async fetchPaperDetails() {
      this.chart_data=useChartData().value;
      console.log(this.chart_data);
      this.processPapers();
      // console.log(this.ids);
      try {
        const response = await axios.post(`http://121.36.19.201/api/get_works/?filter=ids.openalex:`+this.ids+'&select=id,cited_by_count,display_name');
        console.log(response.data)
        this.papers = this.papers.map(paper => {
          const matchingData = response.data.results.find(item => item.id === paper.id);
          return {
            ...paper,
            title: matchingData ? matchingData.display_name : paper.title,
            citations: matchingData ? matchingData.cited_by_count : paper.citations,
          };
        });
      } catch (error) {
        console.error('Error fetching paper details:', error);
        // 处理错误
      }
    },
    processPapers() {
      let relations = [];
      for (const paper of this.chart_data) {
        this.ids+=paper.id;
        this.ids+='|';
        this.papers.push({
          id: paper.id,
          title: paper.title,
          citations: 1,
          type: "initial"
        });
        let a=1;
        let b=0;
        let c=0;
        for (const refId of paper.referenced_works) {
          if (b==3) break;
          b++;
          // const refPaper = await this.fetchPaperDetails(refId);
          if (a==1){
            a=0;
            this.ids+=refId;
          }else{
            this.ids+='|';
            this.ids+=refId;
          }
          this.papers.push({
            id: refId,
            title: 'a',
            citations: 1,
            type: "reference"
          });
          relations.push({ source: paper.id, target: refId });
        }

        for (const relId of paper.related_works) {
          if (c==4) break;
          c++;
          this.ids+='|';
          this.ids+=relId;
          this.papers.push({
            id: relId,
            title: 'a',
            citations: 1,
            type: "related"
          });
          relations.push({ source: paper.id, target: relId });
        }
      }
      this.relations = relations;
    },

  },

  async mounted() {
    getLoacl();
    await this.fetchPaperDetails();
    await this.getList();
    {
      const graph = new G6.Graph({
        container: this.$refs.container,
        width: 1120,
        height: 600,
        layout: {
          type: 'force', // 布局
          preventOverlap: true, //不重叠
          linkDistance: 300, //边长
        },
        defaultNode: {
          size: [40], // 默认大小
        },
        defaultEdge: {
          style: {
            stroke: '#e2e2e2',
            lineWidth: 2,
          },
        },
        modes: {
          default: ['drag-canvas',  'drag-node','click-select','zoom-canvas'],
        },
      });

      const nodes = this.papers.map(paper => ({
        id: paper.id.toString(),
        title: paper.title,
        size:  Math.log(paper.citations+10) / Math.log(1.1),
        papersPublished: paper.citations,
        type: paper.type,
        color: "white",
        style: {
          fill: paper.type === "initial" ? "rgb(193,53,49)" : (paper.type === "reference" ? "rgb(96,157,168)" : "rgb(47,69,84)"), // 设置节点的填充颜色
          stroke: "white", // 设置节点的轮廓颜色
        },
        // 添加任何其他需要的属性
      }));
      const edges = this.relations.map(relation => {
        const sourcePaper = this.papers.find(p => p.id.toString() === relation.source);
        const targetPaper = this.papers.find(p => p.id.toString() === relation.target);

        return {
          source: relation.source,
          target: relation.target,
          amount: relation.weight,
          sourceTitle: sourcePaper ? sourcePaper.title : undefined,
          targetTitle: targetPaper ? targetPaper.title : undefined,
          // 添加任何其他需要的属性
        };
      });

      // 添加节点和边的鼠标悬停事件监听器
      graph.on('node:mouseenter', (evt) => {
        const node = evt.item;
        this.showNodeTooltip(node,evt);

        const connectedNodes = graph.getNeighbors(node);
        const connectedNodeIds = connectedNodes.map(n => n.getID());

        graph.getNodes().forEach(n => {
          if (!connectedNodeIds.includes(n.getID()) && n.getID() !== node.getID()) {
            const model = n.getModel();
            let fill;
            switch (model.type) {
              case 'initial':
                fill = 'rgb(242,228,228)';
                break;
              case 'related':
                fill = 'rgb(233,239,240)';
                break;
              case 'reference':
                fill = 'rgb(227,229,230)';
                break;
            }
            if (fill) {
              n.update({ style: { fill } });
            }
          }
          else{
            const model = n.getModel();
            let label=model.papersPublished;


            if (label) {
              n.update({
                label: label,
                labelCfg: {
                  position: 'right', // 将标签放置在节点的右侧
                  offset: 10, // 标签与节点的偏移量
                  style: {
                    fill: model.style.fill, // 标签颜色与节点颜色相同
                    fontSize: 16, // 字体大小
                  },
                },
              });
            }
          }
        });

        // 显示弹出框，显示专家姓名和论文发表数量
      });
      graph.on('node:mouseleave', (evt) => {
        this.hideTooltip();

        graph.getNodes().forEach(n => {
          const model = n.getModel();
          let fill;
          switch (model.type) {
            case 'initial':
              fill = 'rgb(193,53,49)';
              break;
            case 'related':
              fill = 'rgb(47,69,84)';
              break;
            case 'reference':
              fill = 'rgb(96,157,168)';
              break;
          }
          if (fill) {
            n.update({
              style: { fill } ,
              label: '',
            });
          }
        });

        // 隐藏弹出框
      });
      graph.on('edge:mouseenter', (evt) => {
        const edge = evt.item;
        this.showEdgeTooltip(edge,evt);
        graph.setItemState(edge, 'hover', true);
        const sourceNode = edge.getSource();
        const targetNode = edge.getTarget();

        graph.getNodes().forEach(n => {
          if (n !== sourceNode && n !== targetNode) {
            let fill;
            // 根据节点类型设置填充色
            switch (n.getModel().type) {
              case 'initial':
                fill = 'rgb(242,228,228)';
                break;
              case 'related':
                fill = 'rgb(233,239,240)';
                break;
              case 'reference':
                fill = 'rgb(227,229,230)';
                break;
            }
            if (fill) {
              n.update({ style: { fill } });
            }
          }
        });
        // 显示弹出框，显示共同论文发表数量
      });
      graph.on('edge:mouseleave', (evt) => {
        this.hideEdgeTooltip();
        const edge = evt.item;
        graph.setItemState(edge, 'hover', false);
        graph.getNodes().forEach(n => {
          const model = n.getModel();
          let fill;
          switch (model.type) {
            case 'initial':
              fill = 'rgb(193,53,49)';
              break;
            case 'related':
              fill = 'rgb(47,69,84)';
              break;
            case 'reference':
              fill = 'rgb(96,157,168)';
              break;
          }
          if (fill) {
            n.update({
              style: { fill } ,
              label: '',
            });
          }
        });
        // 隐藏弹出框
      });

      graph.data({ nodes, edges });
      graph.render();
    }
    {
      const areaChart = new Area(this.$refs.container1, {
      data: this.final_data.map(item => ({
        ...item,
        color: '#' + Math.floor(Math.random()*16777215).toString(16) // 随机生成颜色
      })),
      xField: 'year',
      yField: 'value',
      seriesField: 'series',
      smooth: true,
      legend: {
        position: 'right', // 将图例位置设置为右侧
      },
    });
    areaChart.render();
    }

  },
};
</script>
<style >
.netChart{
  margin:50px auto;
  width: 1200px;
  height:600px;
  border: 2px solid black;
  justify-content: center;
  align-content: center;
}
.chart-container {
  margin:100px auto;
  width: 1200px;
  height: 400px;
  border: 2px solid black; /* 添加黑色边框 */
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>