<template>
    <div class="page-sidebar-content-wrapper page-sidebar-left  small-mt__40 tablet-mt__40">
        <div class="sidebar-widget search-post wow move-up">
            <div class="widget-title">
                <h4 class="sidebar-widget-title">Search</h4>
            </div>
            <form method="post">
                <div class="widget-search">
                    <input type="text" placeholder="Enter search keyword">
                    <button type="submit" class="search-submit">
                        <span class="search-btn-icon fa fa-search"></span>
                    </button>
                </div>
            </form>
        </div>

        <!-- === Sidebar Widget Start === -->
        <div class="sidebar-widget widget-blog-recent-post wow move-up">
            <h4 class="sidebar-widget-title">{{ sidebarWidget.recentPostTitle }}</h4>
            <ul>
                <li v-for="blog in recentPost.slice(0, 5)" :key="blog.id">
                    <nuxt-link :to="`/blog/${blog.slug}`">{{ blog.title }}</nuxt-link>
                </li>
            </ul>
        </div>
        <!-- === Sidebar Widget End === -->

        <!-- === Sidebar Widget Start === -->
        <div class="sidebar-widget widget-images wow move-up">
            <nuxt-link to="/">
                <img class="img-fluid" :src="sidebarWidget.widgetImage" alt="thumbnail">
            </nuxt-link>
        </div>
        <!-- === Sidebar Widget End === -->

        <!-- === Sidebar Widget Start === -->
        <div class="sidebar-widget widget-tag wow move-up">
            <h4 class="sidebar-widget-title">{{ sidebarWidget.tagTitle }}</h4>
            <nuxt-link :to="tag.url" class="ht-btn ht-btn-xs" v-for="tag in tags" :key="tag.id">
                {{ tag.name }}
            </nuxt-link>
        </div>
        <!-- === Sidebar Widget End === -->
    </div>
</template>

<script>
    export default {
        props: ['sidebarWidget', 'recentPost', 'tags']
    };
</script>