<template>
    <div class="about-banner-wrap banner-space about-us-bg bg-cover" :style="{ backgroundImage: `url('/images/bg/contact-us-01-hero-bg.jpg')` }">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 ms-auto me-auto">
                    <div class="about-banner-content text-center">
                        <h1 class="mb-15 text-white">About Mitech</h1>
                        <h5 class="font-weight--normal text-white">Mitech specializes in technological and IT-related services such as product engineering, warranty management, building cloud, infrastructure, network, etc.</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['title', 'subTitle', 'bgImg']
    };
</script>