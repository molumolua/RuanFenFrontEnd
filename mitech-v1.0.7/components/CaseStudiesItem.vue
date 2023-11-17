<template>
    <nuxt-link :to="`/case-studies/${project.id}`" class="projects-wrap style-01 wow move-up">
        <div class="projects-image-box">
            <div class="projects-image">
                <img class="img-fluid" :src="project.image" alt="project image">
            </div>
            <div class="content">
                <h6 class="heading">{{ project.heading }}</h6>
                <div class="post-categories">
                    {{ project.category }}
                </div>
                <div class="text">
                    {{ project.desc }}
                </div>
                <div class="box-projects-arrow">
                    <span class="button-text">View Case Study</span>
                    <i class="fa fa-arrow-right ms-1"></i>
                </div>
            </div>
        </div>
    </nuxt-link>
</template>

<script>
    export default {
        props: ['project']
    };
</script>