<template>
  <Header/>
  <div ref="container" style="width: 1500px; height: 600px;"></div>
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
import axios from "axios";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';

    
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
      papers:[],
      relations:[],
      rec_data:[],
      ids: "",
      // papers: [
      //   { "id": 1, "title": "Deep Learning for Image Classification", "citations": 60000, "type": "initial" },
      //   { "id": 2, "title": "Reinforcement Learning in Robotics", "citations": 95, "type": "initial" },
      //   { "id": 3, "title": "Graph Neural Networks for Node Classification", "citations": 80, "type": "reference" },
      //   { "id": 4, "title": "Natural Language Processing with Transformers", "citations": 110, "type": "reference" },
      //   { "id": 5, "title": "Computer Vision: Advances and Challenges", "citations": 75, "type": "reference" },
      //   { "id": 6, "title": "Quantum Computing: Principles and Applications", "citations": 70, "type": "related" },
      //   { "id": 7, "title": "Blockchain Technology: A Comprehensive Overview", "citations": 65, "type": "related" },
      //   { "id": 8, "title": "Edge Computing: Trends and Future Directions", "citations": 60, "type": "related" },
      //   { "id": 9, "title": "Cybersecurity Threats and Countermeasures", "citations": 55, "type": "related" },
      //   { "id": 10, "title": "Internet of Things (IoT) in Healthcare", "citations": 50, "type": "related" },
      //   { "id": 11, "title": "Quantum Machine Learning Algorithms", "citations": 45, "type": "reference" },
      //   { "id": 12, "title": "Deep Reinforcement Learning for Games", "citations": 40, "type": "reference" },
      //   { "id": 13, "title": "Advances in Cloud Computing Technologies", "citations": 35, "type": "reference" },
      //   { "id": 14, "title": "5G Wireless Networks: Challenges and Opportunities", "citations": 30, "type": "reference" },
      //   { "id": 15, "title": "AI in Healthcare: Current Applications and Future Prospects", "citations": 25, "type": "reference" },
      //   { "id": 16, "title": "Edge AI: Enabling Intelligence at the Edge", "citations": 20, "type": "related" },
      //   { "id": 17, "title": "Quantum Cryptography: Principles and Applications", "citations": 15, "type": "related" },
      //   { "id": 18, "title": "Big Data Analytics for Business Insights", "citations": 10, "type": "related" },
      //   { "id": 19, "title": "Human-Robot Interaction in Industry 4.0", "citations": 18, "type": "related" },
      //   { "id": 20, "title": "Smart Cities: Technologies and Challenges", "citations": 20, "type": "initial" },
      //   { "id": 21, "title": "Advancements in Natural Language Generation", "citations": 38, "type": "reference" },
      //   { "id": 22, "title": "Quantum Machine Learning: Recent Developments", "citations": 42, "type": "reference" },
      //   { "id": 23, "title": "AI Ethics: Challenges and Guidelines", "citations": 22, "type": "reference" },
      //   { "id": 24, "title": "Edge Computing in IoT: Opportunities and Challenges", "citations": 16, "type": "reference" },
      //   { "id": 25, "title": "Cybersecurity in Autonomous Vehicles", "citations": 12, "type": "reference" },
      //   { "id": 26, "title": "Blockchain in Supply Chain Management", "citations": 28, "type": "reference" },
      //   { "id": 27, "title": "Quantum Computing in Finance", "citations": 34, "type": "reference" },
      //   { "id": 28, "title": "AI-driven Healthcare Diagnostics", "citations": 26, "type": "reference" },
      //   { "id": 29, "title": "Robotic Process Automation in Business", "citations": 18, "type": "reference" },
      //   { "id": 30, "title": "IoT Security: Emerging Threats and Solutions", "citations": 14, "type": "reference" },
      //   { "id": 31, "title": "Federated Learning in Privacy-preserving AI", "citations": 11, "type": "reference" },
      //   { "id": 32, "title": "Quantum Computing: Quantum Algorithms", "citations": 19, "type": "reference" },
      //   { "id": 33, "title": "AI-driven Customer Service Chatbots", "citations": 27, "type": "reference" },
      //   { "id": 34, "title": "Cloud-native Application Development", "citations": 32, "type": "reference" },
      //   { "id": 35, "title": "Ethical Considerations in AI Research", "citations": 16, "type": "reference" },
      //   { "id": 36, "title": "AI in Financial Trading", "citations": 15, "type": "reference" },
      //   { "id": 37, "title": "Blockchain-based Supply Chain Traceability", "citations": 23, "type": "related" },
      //   { "id": 38, "title": "Quantum Machine Learning in Healthcare", "citations": 22, "type": "related" },
      //   { "id": 39, "title": "Edge AI for Smart Cities", "citations": 11, "type": "related" },
      //   { "id": 40, "title": "AI in Education: Personalized Learning", "citations": 21, "type": "related" }
      // ],
      // relations: [
      //   { "source": "1", "target": "6" },
      //   { "source": "1", "target": "20" },
      //   { "source": "1", "target": "7" },
      //   { "source": "1", "target": "8" },
      //   { "source": "1", "target": "9" },
      //   { "source": "1", "target": "10" },
      //   { "source": "2", "target": "37" },
      //   { "source": "2", "target": "38" },
      //   { "source": "2", "target": "39" },
      //   { "source": "2", "target": "40" },
      //   { "source": "20", "target": "16" },
      //   { "source": "20", "target": "17" },
      //   { "source": "20", "target": "18" },
      //   { "source": "20", "target": "19" },
      //   { "source": "1", "target": "3" },
      //   { "source": "1", "target": "4" },
      //   { "source": "1", "target": "5" },
      //   { "source": "1", "target": "11" },
      //   { "source": "1", "target": "12" },
      //   { "source": "1", "target": "13" },
      //   { "source": "1", "target": "14" },
      //   { "source": "2", "target": "21" },
      //   { "source": "2", "target": "22" },
      //   { "source": "2", "target": "23" },
      //   { "source": "2", "target": "24" },
      //   { "source": "2", "target": "25" },
      //   { "source": "2", "target": "26" },
      //   { "source": "2", "target": "27" },
      //   { "source": "2", "target": "28" },
      //   { "source": "2", "target": "29" },
      //   { "source": "2", "target": "30" },
      //   { "source": "2", "target": "31" },
      //   { "source": "20", "target": "32" },
      //   { "source": "20", "target": "33" },
      //   { "source": "20", "target": "34" },
      //   { "source": "20", "target": "35" },
      //   { "source": "20", "target": "36" },
      // ],
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
      console.log("xy: "+ this.tooltipPos.x+" "+this.tooltipPos.y)
      console.log(this.tooltipContent)
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

    async fetchPaperDetails() {
      this.processPapers();
      try {
        const response = await axios.post(`http://121.36.19.201/api/get_works/?filter=ids.openalex:`+this.ids+'&select=id,cited_by_count,display_name');
        console.log(this.ids)
        console.log(response.data);
        this.papers = this.papers.map(paper => {
          const matchingData = response.data.results.find(item => item.id === paper.id);
          return {
            ...paper,
            title: matchingData ? matchingData.display_name : paper.title,
            citations: matchingData ? matchingData.cited_by_count : paper.citations,
          };
        });
        // console.log(this.papers);
        // this.createChart();
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
        for (const refId of paper.referenced_works) {
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
          // const relPaper = await this.fetchPaperDetails(relId);
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
    await this.fetchPaperDetails();
    {
      const graph = new G6.Graph({
        container: this.$refs.container,
        width: 1500,
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
      console.log(this.papers);
      console.log(this.relations);
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
        console.log("aaaa")
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


  },
};
</script>
