<template>
    <div class="main-container">
        <Breadcrumbs items="Article Details" breadcrumbTitle="文献详情" />

        <div class="blog-pages-wrapper section-space--ptb_50">
            <div class="container">
                <div class="row">
                    <div class="col-lg-20 ms-auto me-auto">
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
                                            <a href="#" class="smooth-scroll-link">{{ detailInfo.commentCount }}
                                            Comments</a>
                                        </div>
                                    </div>
                                    <div class="post-excerpt mt-30">
                                        <span class='h4'>
                                            keywords&score :: {{ Array.from(detailInfo._keywords).join(', ') }}
                                            <br>
                                            <br>
                            
                                        </span>
                                        <p class="h3">
                                            Abstract:
                                        </p>   
                                        <blockquote>
                                            <p class="p1">
                                                {{ detailInfo.abstract }}
                                            </p>
                                        </blockquote>
                                        <p class="h3">
                                            AuthorInfomation:
                                        </p>    
                                        <tbody>
                                            <div class="post-author">
                                            <br>
                                            <tr v-for="author in authorList" >
                                                <td style="font-size:18px;">{{ author.name }} -- </td>
                                                <td style="font-size:18px;">{{ author.pos }}</td>
                                            </tr>
                                        
                                            </div>
                                        </tbody>

                                        <p class="h3">
                                            <br>
                                            ArticleAnalyses:
                                            <br>
                                        </p>  
                                        <div class="sidebar-widget widget-blog-recent-post wow move-up" >
                                            <ul>
                                                <li v-for="rRa in relatedArticileAnalyse" :key="rRa.id">
                                                    <nuxt-link :to="`/blog`" style="font-size:25px;">{{ rRa.title + "----------------" + rRa.user}}</nuxt-link>
                                
                                                
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="entry-post-share-wrap  border-bottom">
                                            <div class="row align-items-center">
                                                <div class="col-lg-12 col-md-12">
                                                </div>

                                                
                                                
                                                <div class="comment-list-wrapper">
                                                    <div class="row">
                                                        <div class="col-lg-12">
                                                            <h4 class="widget-title section-space--mb_50">Comments： </h4>
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
                                                                                        <button @click="addReply(reply) " class="submit">Submit Reply</button>
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
                                                            <h4 class="widget-title mb-20">留下你的足迹: </h4>
                                                            <p>与大家分享一下现在的感想吧。
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
                                                                            <button class="ht-btn ht-btn-md"
                                                                                 @click="addComment()">Submit</button>
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
        <CtaThree />
        <Footer />
        <OffCanvasMobileMenu />
    </div>
</template>

<script>
import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import CtaThree from '@/components/CtaThree';
import Footer from '@/components/Footer';
import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';
import data from '../data/blog.json';
import axios from 'axios';




export default {
    components: {
        Header,
        Breadcrumbs,
        CtaThree,
        Footer,
        OffCanvasMobileMenu
    },
    data() {
        return {
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
        showReplyForm(reply) {
            reply.visible = true;
            var commentId = reply.id;
            this.replyToCommentId = commentId;
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
            axios({method:'post',data:{work_id:this.$data.work_id},url:'http://121.36.19.201/api/work/getana'}).then((response)=>{
                console.log(response);
                this.$data.relatedArticileAnalyse = response.data;
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
            //console.log(data);
            axios.post('http://121.36.19.201/api/comment_on_work/',data,{headers}).then((response) => {
                //console.log(response.data);
            }).catch((error) => {
                console.log(error);
            })
            this.fetchComments();
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
            console.log(data);
            axios.post('http://121.36.19.201/api/comment_on_comment/',data,{headers}).then((response) => {
                console.log(response.data);
            }).catch((error) => {
                console.log(error);
            })
            this.fetchComments();
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
    },

};
</script>
<style scoped>
.keyword-item {
    border: #45bc82 1px solid;
    border-radius: 15px;
    margin-right: 5px;
    padding: 2px 3px;
}
</style>