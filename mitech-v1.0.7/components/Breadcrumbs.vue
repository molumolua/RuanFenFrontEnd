<template>
    <div class="breadcrumb-area bg-cover" :style="{ backgroundImage: `url('/images/bg/title-bar-01-bg.jpg')` }">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="breadcrumb_box text-center">
                        <h2 class="breadcrumb-title">{{ breadcrumbTitle }}</h2>
                        <ul class="breadcrumb-list">
                            <li class="breadcrumb-item">
                                <nuxt-link to="/">Home</nuxt-link>
                            </li>
                            <li class="breadcrumb-item active">
                                {{ items }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['items', 'breadcrumbTitle']
    }
</script>