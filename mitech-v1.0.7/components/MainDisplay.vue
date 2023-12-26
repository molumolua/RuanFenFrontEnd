<template>
    <div>
        <div class="fun-fact-wrapper bg-theme-default section-space--pb_30 section-space--pt_60">
            <div class="container">
                <div class="row">
                    <div class="col-md-3 col-sm-6 wow move-up" v-for="item in data" :key="item.id">
                        <div class="fun-fact--two text-center">
                            <div class="fun-fact__count counter">
                                <nuxt-link to="/institutionlist">{{ item.count }}</nuxt-link>
                                <!-- <span>{{ item.count }}</span> -->
                            </div>
                            <h6 class="fun-fact__text">{{ item.text }}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="displaycontainer">
            <StaticPieChartForHomePage/>
            <StaticInstitutionMember/>  
        </div>
        <div class="container section-space--pb_30 section-space--pt_20">
            <div class="row">
                <div class="sidebar-widget-fluid widget-blog-recent-post wow move-up show-box">
                    <h4 class="sidebar-widget-title">Hot Topic Papers</h4>
                    <ul>
                        <li v-for="blog in results.slice(0, 5)" :key="blog.id">
                            <nuxt-link :to="`/articledetail`" @click="goDetail(blog.id)">{{ blog.display_name }}</nuxt-link>
                        </li>
                    </ul>
                </div> 
                <div class="sidebar-widget-fluid widget-blog-recent-post wow move-up show-box">
                    <h4 class="sidebar-widget-title">Guess You Like</h4>
                    <ul>
                        <li v-for="blog in Guessresults.slice(0, Math.min(5,Guessresults.length))" :key="blog.id">
                            <nuxt-link :to="`/articledetail`" @click="goDetail(blog.id)">{{ blog.display_name }}</nuxt-link>
                        </li>
                    </ul>
                </div>  
            </div>   
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import StaticPieChartForHomePage from '@/components/StaticPieChartForHomePage';
import StaticInstitutionMember from '@/components/StaticInstitutionMember';
    export default {
        components:{
            StaticPieChartForHomePage,
            StaticInstitutionMember
        },
        data () {
            return {
                "data": [
                    {
                        "title": "Successfully work <br> with",
                        "count": "5000w+",
                        "text": "Collected papers"
                    },
                    {
                        "title": "Successfully <br> completed",
                        "count": "400+",
                        "text": "Settled scholars"
                    },
                    {
                        "title": "Recruit more <br> than",
                        "count": 65073,
                        "text": "Related fields"
                    },
                    // {
                    //     "title": "Blog <br> update ",
                    //     "count": 980,
                    //     "text": "Resident users"
                    // },
                    {
                        "text":"Related Institutions",
                        "count":107712
                    }
                ],
                "results":[],
                "Guessresults":[],
            }
        },
        mounted(){
            var results=[
                {
                    "id": "https://openalex.org/W3128646645",
                    "display_name": "Global Cancer Statistics 2020: GLOBOCAN Estimates of Incidence and Mortality Worldwide for 36 Cancers in 185 Countries",
                    "cited_by_count": 46815
                },
                {
                    "id": "https://openalex.org/W3001118548",
                    "display_name": "Clinical features of patients infected with 2019 novel coronavirus in Wuhan, China",
                    "cited_by_count": 35579
                },
                {
                    "id": "https://openalex.org/W3118615836",
                    "display_name": "The PRISMA 2020 statement: an updated guideline for reporting systematic reviews",
                    "cited_by_count": 22936
                },
                {
                    "id": "https://openalex.org/W3008827533",
                    "display_name": "Clinical Characteristics of Coronavirus Disease 2019 in China",
                    "cited_by_count": 21536
                },
                {
                    "id": "https://openalex.org/W3001897055",
                    "display_name": "A Novel Coronavirus from Patients with Pneumonia in China, 2019",
                    "cited_by_count": 21059
                },
                {
                    "id": "https://openalex.org/W3009885589",
                    "display_name": "Clinical course and risk factors for mortality of adult inpatients with COVID-19 in Wuhan, China: a retrospective cohort study",
                    "cited_by_count": 20746
                },
                {
                    "id": "https://openalex.org/W3165656738",
                    "display_name": "Clinical Characteristics of 138 Hospitalized Patients With 2019 Novel Coronavirus–Infected Pneumonia in Wuhan, China",
                    "cited_by_count": 17061
                },
                {
                    "id": "https://openalex.org/W3004280078",
                    "display_name": "A pneumonia outbreak associated with a new coronavirus of probable bat origin",
                    "cited_by_count": 16372
                },
                {
                    "id": "https://openalex.org/W3103145119",
                    "display_name": "SciPy 1.0: fundamental algorithms for scientific computing in Python",
                    "cited_by_count": 15668
                },
                {
                    "id": "https://openalex.org/W3009912996",
                    "display_name": "SARS-CoV-2 Cell Entry Depends on ACE2 and TMPRSS2 and Is Blocked by a Clinically Proven Protease Inhibitor",
                    "cited_by_count": 15584
                },
                {
                    "id": "https://openalex.org/W2999417355",
                    "display_name": "Cancer statistics, 2020",
                    "cited_by_count": 15391
                },
                {
                    "id": "https://openalex.org/W3002108456",
                    "display_name": "Epidemiological and clinical characteristics of 99 cases of 2019 novel coronavirus pneumonia in Wuhan, China: a descriptive study",
                    "cited_by_count": 15330
                },
                {
                    "id": "https://openalex.org/W3177828909",
                    "display_name": "Highly accurate protein structure prediction with AlphaFold",
                    "cited_by_count": 15112
                },
                {
                    "id": "https://openalex.org/W3008028633",
                    "display_name": "Characteristics of and Important Lessons From the Coronavirus Disease 2019 (COVID-19) Outbreak in China",
                    "cited_by_count": 13788
                },
                {
                    "id": "https://openalex.org/W3003668884",
                    "display_name": "Early Transmission Dynamics in Wuhan, China, of Novel Coronavirus–Infected Pneumonia",
                    "cited_by_count": 11921
                },
                {
                    "id": "https://openalex.org/W3119005666",
                    "display_name": "Cancer Statistics, 2021",
                    "cited_by_count": 11330
                },
                {
                    "id": "https://openalex.org/W3111255098",
                    "display_name": "Safety and Efficacy of the BNT162b2 mRNA Covid-19 Vaccine",
                    "cited_by_count": 10982
                },
                {
                    "id": "https://openalex.org/W3006659024",
                    "display_name": "The psychological impact of quarantine and how to reduce it: rapid review of the evidence",
                    "cited_by_count": 10172
                }
            ]
            for (let i = 0; i < results.length; i++) {
                let j = Math.floor(Math.random() * (i  + 1) )
                let t = results[i]
                results[i] = results[j]
                results[j] = t
            }
            this.$data.results=results


            var GuessYouLikes=[
                {
                    "id": "https://openalex.org/W2889646458",
                    "display_name": "Global cancer statistics 2018: GLOBOCAN estimates of incidence and mortality worldwide for 36 cancers in 185 countries",
                    "cited_by_count": 58070
                },
                {
                    "id": "https://openalex.org/W2799524357",
                    "display_name": "MEGA X: Molecular Evolutionary Genetics Analysis across Computing Platforms",
                    "cited_by_count": 23344
                },
                {
                    "id": "https://openalex.org/W2911188335",
                    "display_name": "Cancer statistics, 2019",
                    "cited_by_count": 16121
                },
                {
                    "id": "https://openalex.org/W2781525129",
                    "display_name": "Cancer statistics, 2018",
                    "cited_by_count": 13880
                },
                {
                    "id": "https://openalex.org/W2891378911",
                    "display_name": "PRISMA Extension for Scoping Reviews (PRISMA-ScR): Checklist and Explanation",
                    "cited_by_count": 13578
                },
                {
                    "id": "https://openalex.org/W2412782625",
                    "display_name": "DeepLab: Semantic Image Segmentation with Deep Convolutional Nets, Atrous Convolution, and Fully Connected CRFs",
                    "cited_by_count": 12770
                },
                {
                    "id": "https://openalex.org/W2752782242",
                    "display_name": "Squeeze-and-Excitation Networks",
                    "cited_by_count": 11596
                },
                {
                    "id": "https://openalex.org/W2963163009",
                    "display_name": "MobileNetV2: Inverted Residuals and Linear Bottlenecks",
                    "cited_by_count": 11418
                },
                {
                    "id": "https://openalex.org/W2900569176",
                    "display_name": "STRING v11: protein–protein association networks with increased coverage, supporting functional discovery in genome-wide experimental datasets",
                    "cited_by_count": 11207
                },
                {
                    "id": "https://openalex.org/W2963276645",
                    "display_name": "Reproducible, interactive, scalable and extensible microbiome data science using QIIME 2",
                    "cited_by_count": 10007
                }
            ]
            if(useToken().value){
                const headers = {
                    'Content-Type': 'application/json',
                    'Authorization': 'token '+useToken().value
                };
                axios.get('http://121.36.19.201/api/history/', { headers }).then((response) => {
                    console.log(response.data)
                    response.data = response.data.slice().reverse();
                    for(let i=0;i < response.data.length;i++){
                        if(response.data[i].related_work_1){
                            this.$data.Guessresults.push({
                                "id":response.data[i].related_work_1,
                                "display_name":"waiting...."
                            })
                        }
                        if(response.data[i].related_work_2){
                            this.$data.Guessresults.push({
                                "id":response.data[i].related_work_2,
                                "display_name":"waiting...."
                            })
                        }
                    }
                    for(let i=0;i < this.$data.Guessresults.length;i++){
                        this.$data.Guessresults[i].display_name
                        axios.post("http://121.36.19.201/api/get_works/",{
                            "single_object_id":this.$data.Guessresults[i].id
                        }).then((response) => {
                            console.log(response)
                            this.$data.Guessresults[i].display_name=response.data.display_name
                        }).catch(error => {
                            console.error(error);
                        });
                                
                    }
                })
                .catch(error => {
                    console.error(error);
                }); 
            }else{
                this.$data.Guessresults=GuessYouLikes
            }
            for (let i = 0; i < this.$data.Guessresults.length; i++) {
                let j = Math.floor(Math.random() * (i  + 1) )
                let t = this.$data.Guessresults[i]
                this.$data.Guessresults[i] = this.$data.Guessresults[j]
                this.$data.Guessresults[j] = t
            }
        },
        methods:{
            goDetail(id){
                useWorkId().value=id
                setLocal()
            }
        }
    };
</script>

<style lang="scss" scoped>
.show-box{
    display: inline-block;
    width: 50%;
}
.displaycontainer{
    position: relative;
    left: 10%;
}
</style>