<template>
    <el-card class="me-area" :body-style="{ padding: '16px' }">
            <div class="me-article-header">
                <a>{{paper.language}}&nbsp;&nbsp;&nbsp;&nbsp;Citation Count:&nbsp;{{paper.cited_by_count}}</a>
                <span class="me-pull-right me-article-count">
                    <el-icon><Clock /></el-icon>&nbsp;{{paper.publication_date}}
                </span>
            </div>
            <div class="me-artile-description">
                <div v-html="paper.title" class="me-article-title"></div>
            </div>
            <div class="me-article-footer">
                <span class="me-article-author" v-for="author in paper.authorships" :key="author.author.id">
                    <i class="me-icon-author"></i>&nbsp;{{ author.author.display_name }}
                </span>
                <el-tag v-for="t in tags" :key="t.tagName" size="small" type="warning">{{t.tagName}}</el-tag>
                <div class="me-pull-right me-article-time">
                    <span class="me-pull-right me-article-count"></span>
                </div>
            </div>
        <!-- <div class="hero-button mt-30">
            <button class="ht-btn ht-btm-md" @click="edit">
                <el-icon><Delete /></el-icon>
            </button>
        </div> -->
    </el-card>
</template>

<script>
export default {
    name: "Paper",
    props: ["paper"],
}
</script>

<style scoped>
.me-article-header {
    position: right;
    /*padding: 10px 18px;*/
    padding-bottom: 10px;
}

.me-article-title {
    font-weight: 700;
    font-size: large;
}

.me-article-icon {
    padding: 3px 8px;
}

.me-article-count {
    color: #a6a6a6;
    padding-left: 20px;
    font-size: 13px;
}

.me-pull-right {
    float: right;
}

.me-artile-description {
    font-size: 13px;
    line-height: 24px;
    margin-bottom: 10px;
}
.me-article-author {
    color: #a6a6a6;
    padding-right: 18px;
    font-size: 13px;
    cursor: pointer;
}
.me-article-author-img {
    width: 15px;
    height: 15px;
}
.me-article-author-avatar {
    width: 30px;
    height: 30px;
    vertical-align: text-bottom;
    border-radius: 50%;
}
.el-tag {
    margin-left: 6px;
}
.me-article-time {
    margin-top: 20px;
}
.leftimg {
    /* width:11%;
    height:11%; */
    width: 100px;
    height: 90px;
    float: left;
    margin-right: 20px;
}
img {
    width: 100%;
    height: 100%;
}
.preimg {
    width: 700px;
    height: 90px;
    margin-bottom: 10px;
    display: flex;
}
</style>