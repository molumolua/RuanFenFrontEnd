<template>
    <div class="main-container">
        <Breadcrumbs items="Article Details" breadcrumbTitle="文献详情" />

        <div class="blog-pages-wrapper section-space--ptb_50">
            <div class="container">
                <div class="row">
                    <div class="col-lg-20 ms-auto me-auto" style="padding-left: 60px;border-left: 2px solid;padding-right: 60px;border-right: 2px solid;">
                        <div class="main-blog-wrap">
                            <!--======= Single Blog Item Start ========-->
                            <div class="single-blog-item  wow move-up">

                                <!-- Post info Start -->
                                <div class="post-info lg-blog-post-info">
                                    <h3 class="post-title text-center" v-if="isOa">
                                        
                                    <a :href="oa_url">{{ detailInfo.title }}</a>
                                    </h3>
                                    <h3 class="post-title text-center" v-if="!isOa">
                                        {{ detailInfo.title }}
                                    </h3>
                                    <div class="post-meta mt-30 justify-content-center">
                                        
                                        <div class="post-date">
                                            <span class="far fa-calendar meta-icon"></span>
                                            {{ detailInfo.date }}
                                        </div>
                                        
                                        <div class="post-comments">
                                            <span class="far fa-comment-alt meta-icon"></span>
                                            <a href="#comment" class="smooth-scroll-link">{{ detailInfo.commentCount }}
                                            Comments</a>
                                        </div>
                                        <div class="post-view" v-if="token">
                                            <span class="meta-icon far fa-folder"></span>
                                            <a herf="#" class="smooth-scroll-link" @click="drawer2=true">
                                                Collect
                                            </a>
                                        </div>
                                    </div>
                                    <div class="post-excerpt mt-30">
                                        <span style="font-size:20px">
                                            keywords : {{ Array.from(detailInfo._keywords).join(', ') }}
                                            <br>
                                            <br>
                            
                                        </span>
                                        <h4 class="widget-title section-space--mb_50">
                                            Abstract:
                                        </h4>   
                                        <blockquote>
                                            <p class="p1">
                                                {{ detailInfo.abstract }}
                                            </p>
                                        </blockquote>
                                        <h4 class="widget-title section-space--mb_50">
                                            Author Infomation:
                                        </h4>    
                                        
                                        <div class="post-author">
                                            <div v-for="(author,index) in authorList" :key="index" class ="inline">
                                                <span v-if="index === 0" style="font-weight:bold;font-size:20px">
                                                    {{author.name}}
                                                </span>
                                                <span v-else style="font-size:20px">
                                                    , {{ author.name }}
                                                </span>
                                            </div>
                                        
                                        </div>
                                        

                                        <h4 class="widget-title section-space--mb_50">
                                            <br>
                                            Article Analyses:
                                            <br>
                                        </h4>  
                                        
                                        <span v-for="rRa in relatedArticileAnalyse" :key="rRa.id">
                                                    
                                            <Card :title="rRa.title" :other="rRa.username" :id="rRa.id" :url="rRa.file_url" class="CardClass">

                                            </Card>
                                                
                                        </span>
                    

                                        <h4 class="widget-title section-space--mb_50">
                                            <br>
                                            <br>
                                                Share your Analyses about this article
                                            
                                            
                                        </h4>
                                        <div v-if="work_id"> 
                                            <PushMd :openalex_id="work_id" :title="detailInfo.title" :cited_by_count="citedCount"/>
                                        </div>
                                        <div class="entry-post-share-wrap  border-bottom">
                                            <div class="row align-items-center">
                                                <div class="col-lg-12 col-md-12">
                                                </div>

                                                
                                                
                                                <div class="comment-list-wrapper">
                                                    <div class="row">
                                                        <div class="col-lg-12">
                                                            <h4 class="widget-title section-space--mb_50" id="comment">Comments： </h4>
                                                        </div>
                                                        <div v-for = "comment in comments" :key = "comment.id">
                                                            <div class="col-lg-12">
                                                            <ol class="comment-list">
                                                                <li class="comment">
                                                                    <div class="comment-5">
                                                                        <div class="comment-author vcard">
                                                                            <img alt="" src="/images/team/comment-3.jpeg">
                                                                        </div>
                                                                        <div class="comment-content">
                                                                            <div class="meta">
                                                                                <h6 class="fn">{{comment.user.username}}</h6>
                                                                                <div class="comment-datetime">
                                                                                {{ comment.created_time }} </div>
                                                                            </div>
                                                                            <div class="comment-text">
                                                                                <p>{{comment.content}}</p>
                                                                            </div>

                                                                            <div class="comment-actions">   
                                                                                
                                                                                <button class="comment-reply-link" @click="showReplyForm(comment)">Reply</button>
                                                                                <div v-if="comment.visible">
                                                                                    <input type="text" v-model="newReplyText">
                                                                                    <button @click="addReply(comment)" class="submit">Submit Reply</button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                <ol class="children">
                                                                    <div class v-for = "reply in comment.commentsReply[0]" :key = "reply.id">
                                                                    <li class="comment ">
                                                                        <div class="comment-6">
                                                                            <div class="comment-author vcard">
                                                                                <img alt="" src="/images/team/reply-comm.jpg">
                                                                            </div>
                                                                            <div class="comment-content">
                                                                                <div class="meta">
                                                                                    <h6 class="fn">{{ reply.user.username }}@{{ reply.father.user.username }}</h6>
                                                                                    <div class="comment-datetime">
                                                                                    {{ reply.created_time }} </div>
                                                                                </div>
                                                                                <div class="comment-text">
                                                                                    <p>{{ reply.content }}</p>
                                                                                </div>

                                                                                <div class="comment-actions">   
                                                                                
                                                                                    <button class="comment-reply-link" @click="showReplyForm(reply)">Reply</button>
                                                                                    <div v-if="reply.visible">
                                                                                        <input type="text" v-model="newReplyText">
                                                                                        <button @click="addReply(reply) " class="button">Submit Reply</button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li><!-- comment End -->
                                                                    </div>
                                                                </ol><!-- children End -->
                                                            </li><!-- comment End-->
                                                        </ol>
                                                        </div>
                                                    </div>
                                                </div>
                                                </div>

                                                <div class="comment-list-wrapper">
                                                    <div class="row">
                                                        <div class="col-lg-12">
                                                            <h4 class="widget-title mb-20">Share Your Idea About The Article: </h4>
                                                            <p>Add your commment.
                                                            </p>
                                                        </div>

                                                        <div class="col-lg-12">
                                                            <div class="contact-from-wrapper section-space--mt_30">
                                                                <form action="#" method="post">
                                                                    <div class="contact-page-form">
                                                                        <div class="contact-inner contact-message">
                                                                            <textarea name="comment"
                                                                                placeholder="Your Comment" v-model = "newCommentText"></textarea>
                                                                        </div>
                                                                        <div class="comment-submit-btn text-center" >
                                                                            <button class="button" 
                                                                                 @click="addComment() ">Submit</button>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <!-- Post info End -->
                                    </div>
                                    <!--===== Single Blog Item End =========-->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>       
        
    
        
    </div>
    <ClientOnly>
    <el-drawer v-model="drawer2">
                <template #header>
                <h4>Collections</h4>
                <el-divider></el-divider>
                </template>
                <template #default>
                <div>
                    <CollectionPlane :collection="collections" :token="token"/>
                </div>
                </template>
                <template #footer>
                <div style="flex: auto">
                    <el-button @click="cancelClick()">cancel</el-button>
                    <el-button type="primary" @click="confirmClick()">confirm</el-button>
                </div>
                </template>
        </el-drawer>
    </ClientOnly>
</template>

<script>
import emitter from '~~/plugins/event-bus.client';
import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import CtaThree from '@/components/CtaThree';
import Footer from '@/components/Footer';
import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';
import CollectionPlane from '@/components/sections/CollectionPlane';
import data from '../data/blog.json';
import axios from 'axios';
import PushMd from '@/components/PushMd';
import Md2 from '@/components/Md2';
import Card from '@/components/Card';

export default {
    components: {
        Header,
        Breadcrumbs,
        CtaThree,
        Footer,
        OffCanvasMobileMenu,
        CollectionPlane,
    },
    data() {
        return {
            drawer2:false,
            citedCount:0,
            replyToCommentId: null,
            newReplyText:'',
            token:"",
            detailInfo: {
                title: '',
                author: '',
                date: '',
                viewnumber: '',
                commentCount: 0,
                abstract: '',
                _keywords: [],
                keywords:[],
            },
            collections:[],
            relatedArticileAnalyse:[],
            newCommentText:' ',
            work_id:"",
            article_id:"",
            comments:[],
            authorList:[],
            isOa:false,
            oa_url:"",
        }
    },
    methods: {
        cancelClick() {
            drawer2.value = false
        },
        confirmClick() {
            emitter.emit('confirm');
            this.drawer2 = false;
        },
        showReplyForm(reply) {
            reply.visible = true;
            var commentId = reply.id;
            this.replyToCommentId = commentId;
        },
        change2Md(rRa){
            useCheck().value = rRa.file_url;
            this.$router.push('/markdowndisplay');
        },
        fetchArticle(){
            var body = {
                "single_object_id" : this.$data.article_id
            }
            axios.post('http://121.36.19.201/api/get_works/',body).then((response) => {
                this.$data.detailInfo.title = response.data.title;
                this.$data.detailInfo.date = response.data.publication_date;
                this.$data.detailInfo.author = response.data.authorships[0].author.display_name;
                this.$data.detailInfo.keywords =  response.data.keywords;
                this.$data.detailInfo.abstract = response.data.abstract;
                this.$data.isOa = response.data.open_access.is_oa;
                this.$data.oa_url = response.data.open_access.oa_url;
                this.$data.citedCount = response.data.cited_by_count;
                for(var i=0;i<response.data.keywords.length;i++){
                    this.$data.detailInfo._keywords.push(response.data.keywords[i].keyword);
                }
                for(var i=0;i<response.data.authorships.length;i++){
                    
                    this.$data.authorList.push({name:response.data.authorships[i].author.display_name,
                    pos:response.data.authorships[i].author_position});
                
                }
            }).catch((error) => {
                console.log(error);
            });

        },
        fetchAnalyse(){
            const headers = {
                'Content-Type': 'application/json',
                // 'Authorization':'Token f55807b7e70689d2a6756521a3b8375b2531d3d9'
            }

            // console.log(headers,data)
            console.log(useWorkId().value);
            axios({method:'post',data:{work_id:useWorkId().value},url:'http://121.36.19.201/api/work/getana'}).then((response)=>{
                console.log(response);
                this.$data.relatedArticileAnalyse = response.data;
                console.log('fetch analysis access');
            }).catch((error)=>{
                console.log(error);
                console.log("fetchAnalyse Error");
            })
        },
        fetchComments(){
            var headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Token '+this.$data.token
            };
            axios.get(
                'http://121.36.19.201/api/get_comment_on_work/'+this.$data.article_id,{headers}).then((response) => {
                    this.$data.comments = response.data;
                    for(var i=0;i<this.$data.comments.length;i++){
                        this.fetchSubCommments(headers,i);
                        
                    }
                    this.$data.detailInfo.commentCount = this.$data.comments.length;
                }).catch((error)=>{
                console.log(error);
                
            });
            
            
        },
        fetchSubCommments(headers,i){
            axios.get(
                            'http://121.36.19.201/api/get_comment_on_comment/'+this.$data.comments[i].id,{headers}).then((response) => {
                            
                                this.$data.comments[i].commentsReply=[];
                            this.$data.comments[i].commentsReply.push(response.data)}).catch((error) => {
                                console.log(error);
                        });
        },
        addComment(){
            var headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Token '+this.$data.token
            };
            var data = {
                'openalex_id':this.$data.article_id,
                'data':this.$data.newCommentText,
            }
            this.$data.newCommentText = '';
            //console.log(data);
            axios.post('http://121.36.19.201/api/comment_on_work/',data,{headers}).then((response) => {
                //console.log(response.data);
            }).catch((error) => {
                console.log(error);
            })
            //this.fetchComments();
        },
        addReply(reply){
            reply.visible = false;
            var comment_id = reply.father?reply.father.id:reply.id;
            console.log(comment_id);
            var headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Token '+this.$data.token
            };
            var data = {
                'comment_id':comment_id,
                'data':this.$data.newReplyText,
            }
            this.$data.newReplyText = '';
            console.log(data);
            axios.post('http://121.36.19.201/api/comment_on_comment/',data,{headers}).then((response) => {
                console.log(response.data);
            }).catch((error) => {
                console.log(error);
            })
            this.fetchComments();
        },
            fetchCollections(){
                if(!this.token)return;
                var headers = {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token '+ this.token,
                };
                axios.get(
                    "http://121.36.19.201/api/getCollectionPackage/",{headers}).then((response) => {
                        console.log(response);
                        this.$data.collections = response.data;
                        for(let item of response.data){
                            this.fetchUnderCollection(item);
                        }
                    }).catch((error)=>{
                    console.log(error);
                    
                });
            },
            fetchUnderCollection(col){
                var headers = {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token '+ this.token,
                };
                axios.get(
                    "http://121.36.19.201/api/getCollectionPackageContents/"+col.id,{headers}).then((response) => {
                        console.log(response);
                        col.articles=response.data;
                    }).catch((error)=>{
                    console.log(error);
                    
                });
            }
    },
    mounted(){
        getLoacl();
        this.$data.token = "f55807b7e70689d2a6756521a3b8375b2531d3d9";
        this.$data.work_id = useWorkId().value;

        this.$data.article_id = 'W'+this.$data.work_id.split("W")[1];
        console.log(this.$data.work_id,this.$data.article_id)
        this.fetchComments();
        this.fetchAnalyse();
        this.fetchArticle();
        this.fetchCollections();
    },

};
</script>
<style scoped>
.CardClass{
    display: inline-block;
    margin-right : 15px;
    margin-bottom: 15px;
}
.inline{
    display: inline;
}
</style>