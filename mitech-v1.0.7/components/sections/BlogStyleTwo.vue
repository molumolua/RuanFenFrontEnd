<template>
    <div class="service-projects-wrapper section-space--ptb_100">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title-wrap text-center section-space--mb_60">
                        <h6 class="section-sub-title mb-20">{{ data.blogStyletwo.sectionSubTitle }}</h6>
                        <h3 class="heading" v-html="data.blogStyletwo.sectionTitle"></h3>
                    </div>
                </div>
            </div>
            <div class="latest-news-wrap">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="single-blog-lg-item wow move-up" v-for="blog in data.blogPosts.slice(7, 8)" :key="blog.id">
                            <!-- Post Feature Start -->
                            <nuxt-link :to="`/blog/${blog.slug}`">
                                <div class="post-blog-thumbnail">
                                    <img class="img-fluid" :src="blog.image" alt="Blog Images">
                                    <div class="post-meta mt-20">
                                        <div class="post-author">
                                            <img class="img-fluid avatar-96" :src="blog.authorThumb" alt="avatar"> 
                                            {{ blog.authorName }}
                                        </div>
                                        <div class="post-date">
                                            <span class="far fa-calendar meta-icon"></span>
                                            {{ blog.postDate }}
                                        </div>
                                    </div>
                                </div>
                            </nuxt-link>
                            <!-- Post Feature End -->

                            <!-- Post info Start -->
                            <div class="post-info lg-blog-post-info mt-20">
                                <h4 class="post-title">
                                    <nuxt-link :to="`/blog/${blog.slug}`">
                                        {{ blog.title }}
                                    </nuxt-link>
                                </h4>
                                <div class="post-excerpt mt-15">
                                    <p>{{ blog.desc }}</p>
                                </div>
                                <div class="btn-text mt-15">
                                    <nuxt-link :to="`/blog/${blog.slug}`">
                                        Read More
                                        <i class="ms-1 button-icon fas fa-arrow-right ms-1"></i>
                                    </nuxt-link>
                                </div>
                            </div>
                            <!-- Post info End -->
                        </div>
                    </div>
                    <div class="col-lg-6 blog-list-service">
                        <div class="single-blog-lg-list wow move-up" v-for="blog in data.blogPosts.slice(0, 3)" :key="blog.id">
                            <nuxt-link :to="`/blog/${blog.slug}`">
                                <div class="post-blog-thumbnail">
                                    <img class="img-fluid" :src="blog.image" alt="Blog Images">
                                    <div class="post-meta mt-20">
                                        <div class="post-author">
                                            <img class="img-fluid avatar-96" :src="blog.authorThumb" alt="author thumb"> 
                                            {{ blog.authorName }}
                                        </div>
                                    </div>
                                </div>
                            </nuxt-link>
                            <div class="post-info lg-blog-post-info">
                                <div class="post-meta mb-10">
                                    <div class="post-date">
                                        <span class="far fa-calendar meta-icon"></span>
                                        {{ blog.postDate }}
                                    </div>
                                </div>
                                <h5 class="post-title">
                                    <nuxt-link :to="`/blog/${blog.slug}`">
                                        {{ blog.title }}
                                    </nuxt-link>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import data from '~/data/blog.json';
    export default {
        data () {
            return {
                data
            }
        }
    };
</script>