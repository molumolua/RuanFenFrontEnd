<template>
    <div class="blog-pages-wrapper section-space--ptb_100">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 order-lg-1 order-2">
                    <BlogSidebar :sidebarWidget="data.blogSidebar" :recentPost="data.blogPosts" :tags="data.blogSidebar.tags" />
                </div>

                <div class="col-lg-8 order-lg-2 order-1">
                    <div class="section-title-wrap text-center section-space--mb_60">
                        <h3 class="heading">Interesting articles<span class="text-color-primary"> updated daily</span></h3>
                    </div>
                    <div class="main-blog-wrap">
                        <div class="single-blog-item lg-blog-item border-bottom wow move-up" v-for="blog in data.blogPosts.slice(3, 9)" :key="blog.id">
                            <!-- Post Feature Start -->
                            <div class="post-feature blog-thumbnail">
                                <nuxt-link :to="`/blog/${blog.slug}`">
                                    <img :src="blog.image" class="img-fluid" alt="Blog Images">
                                </nuxt-link>
                            </div>
                            <!-- Post Feature End -->

                            <!-- Post info Start -->
                            <div class="post-info lg-blog-post-info">
                                <div class="post-categories">
                                    <nuxt-link to="/blog">{{ blog.category }}</nuxt-link>
                                </div>

                                <h3 class="post-title">
                                    <nuxt-link :to="`/blog/${blog.slug}`">
                                        {{ blog.title }}
                                    </nuxt-link>
                                </h3>

                                <div class="post-meta mt-20">
                                    <div class="post-author">
                                        <nuxt-link to="/blog">
                                            <img class="img-fluid avatar-96" :src="blog.authorThumb" alt="avatar"> 
                                            {{ blog.authorName }}
                                        </nuxt-link>
                                    </div>
                                    <div class="post-date">
                                        <span class="far fa-calendar meta-icon"></span>
                                        {{ blog.postDate }}
                                    </div>
                                    <div class="post-view">
                                        <span class="meta-icon far fa-eye"></span>
                                        {{ blog.postView }} views
                                    </div>
                                </div>

                                <div class="post-excerpt mt-15">
                                    <p>{{ blog.desc }}</p>
                                </div>

                                <div class="read-post-share-wrap  mt-20">
                                    <div class="row align-items-center">
                                        <div class="col-lg-6 col-md-6 col-sm-6">
                                            <div class="post-read-more">
                                                <nuxt-link :to="`/blog/${blog.slug}`" class="ht-btn ht-btn-md">
                                                    Read More
                                                </nuxt-link>
                                            </div>
                                        </div>

                                        <div class="col-lg-6 col-md-6 col-sm-6">
                                            <div id="entry-post-share" class="entry-post-share">
                                                <div class="share-label">
                                                    Share this post
                                                </div>
                                                <div class="share-media">
                                                    <span class="share-icon fas fa-share-alt"></span>

                                                    <div class="share-list">
                                                        <a class="hint--bounce hint--top hint--primary twitter" target="_blank" aria-label="Twitter" href="https://twitter.com">
                                                            <i class="fab fa-twitter"></i>
                                                        </a>
                                                        <a class="hint--bounce hint--top hint--primary facebook" target="_blank" aria-label="Facebook" href="https://web.facebook.com">
                                                            <i class="fab fa-facebook-f"></i>
                                                        </a>
                                                        <a class="hint--bounce hint--top hint--primary linkedin" target="_blank" aria-label="Linkedin" href="https://www.linkedin.com/">
                                                            <i class="fab fa-linkedin"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Post info End -->
                        </div>

                        <div class="ht-pagination mt-30 pagination justify-content-center">
                            <div class="pagination-wrapper">
                                    <ul class="pagination">
                                        <li class="page-item disabled"><a href="#">PREV</a></li>
                                        <li class="page-item active"><a href="#">1</a></li>
                                        <li class="page-item"><a href="#">2</a></li>
                                        <li class="page-item"><a href="#">3</a></li>
                                        <li class="page-item"><a href="#">4</a></li>
                                        <li class="page-item"><a href="#">Next</a></li>
                                    </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BlogSidebar from '@/components/BlogSidebar';

    import data from '../../data/blog.json';

    export default {
        components: {
            BlogSidebar,
        },
        data () {
            return {
                data
            }
        }
    };
</script>