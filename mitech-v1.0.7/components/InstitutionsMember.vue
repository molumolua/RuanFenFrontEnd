<template>
    <div class="team-member-wrapper section-space--pt_70 section-space--pb_70">
        <div class="container">
            <div class="widget-search mb-30">
                <input ref="myinput" type="text" placeholder="Enter search keyword" @keydown.enter="handleSearch()">
                <button @click="handleSearch()" type="submit" class="search-submit">
                    <span class="search-btn-icon fa fa-search"></span>
                </button>
            </div>
            <div class="row ht-team-member-style-three">
                <div class="col-lg-3 col-md-6 text-center wow move-up" v-for="teamMember in teamMembers" :key="teamMember.id">
                    <Member :teamMember="teamMember" />
                </div>
            </div>
            <div class="ht-pagination mt-30 pagination justify-content-center">
                <div class="pagination-wrapper">
                    <ul class="pagination">
                        <li class="page-item" v-bind:class="{ disabled: nowpage==1 }" @click="lastpage()"><a>PREV</a></li>
                        <li v-if="pagelist[0] != 1">...</li>
                        <li class="page-item" v-for="page in pagelist" :key="page.id" v-bind:class="{ active: nowpage==page }" @click="setpage(page)"><a>{{ page }}</a></li>
                        <!-- <li class="page-item"><a href="#">2</a></li>
                        <li class="page-item"><a href="#">3</a></li>
                        <li class="page-item"><a href="#">4</a></li> -->
                        <li v-if="pagelist[pagelist.length-1] != maxpage">...</li>
                        <li class="page-item" v-bind:class="{ disabled: nowpage==maxpage }" @click="nextpage()"><a>Next</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

    import Member from '@/components/Member';
    import axios from "axios";
    export default {
        components: {
            Member,
        },
        data () {
            return {
                maxpage:1,
                pagelist:[1],
                nowpage:1,
                one_page:12,
                search:"",
                teamMembers: [],
            }
        },
        mounted(){
                const postData = {};
                var address="http://121.36.19.201/api/get_authors/?filter=last_known_institution.id:"+useInsid().value+"&page="+this.$data.nowpage+"&per_page="+this.$data.one_page+"&sort=cited_by_count:desc"
                if(this.$data.search.length>0) {
                    address+="&search="+this.$data.search
                    this.$data.search=""
                }
                console.log(address)
                axios.post(address,postData).then(response => {
                    console.log(response)
                    this.$data.maxpage=(response.data.meta.count+this.$data.one_page-1)/this.$data.one_page
                    console.log(response.data.results);
                    for(let i=0;i<response.data.results.length;i++){
                        this.$data.teamMembers.push({
                            "name":response.data.results[i].display_name,
                            "image":"/images/avator/scientist.png"
                        })
                    }
                    this.$data.pagelist=[]
                    var cnt=0
                    for(let i=this.$data.nowpage-1;i<=this.$data.maxpage;i++){
                        if(i>=1){
                            this.$data.pagelist.push(i)
                            cnt++;  
                        }
                        if(cnt==4) break;
                    }
                    })
                .catch(error => {
                    console.error("Error in search", error);
                });
        },
        methods:{
            updatepage(){
                //http://127.0.0.1:8000/api/get_institutions/?page=1&per_page=10&sort=cited_by_count:desc&search=beihang
                
                this.teamMembers=[]
                var address="http://121.36.19.201/api/get_authors/?filter=last_known_institution.id:"+useInsid().value+"&page="+this.$data.nowpage+"&per_page="+this.$data.one_page+"&sort=cited_by_count:desc"
                if(this.$data.search.length>0) {
                    address+="&search="+this.$data.search
                    this.$data.search=""
                }
                console.log(address)
                axios.post(address).then(response => {
                    console.log(response)
                    this.$data.maxpage=(response.data.meta.count+this.$data.one_page-1)/this.$data.one_page
                    console.log(response.data.results);
                    for(let i=0;i<response.data.results.length;i++){
                        this.$data.teamMembers.push({
                            "name":response.data.results[i].display_name,
                            "image":"/images/avator/scientist.png"
                        })
                    }
                    this.$data.pagelist=[]
                    var cnt=0
                    for(let i=this.$data.nowpage-1;i<=this.$data.maxpage;i++){
                        if(i>=1){
                            this.$data.pagelist.push(i)
                            cnt++;  
                        }
                        if(cnt==4) break;
                    }
                    })
                .catch(error => {
                    console.error("Error in search", error);
                });
            },
            nextpage(){
                this.$data.nowpage=this.$data.nowpage+1;
                this.updatepage();
            },
            lastpage(){
                this.$data.nowpage=this.$data.nowpage-1;
                this.updatepage();
            },
            setpage(p){
                this.$data.nowpage=p;
                this.updatepage();
            },
            
            handleSearch(){
                var search=this.$refs.myinput.value
                console.log(this.$refs.myinput.value)
                this.$data.search=search
                this.$data.nowpage=1
                this.updatepage()
            }

        }
        
    };
</script>