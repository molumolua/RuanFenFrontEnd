<template>
    <div class="footer-widget">
        <div class="footer-widget__logo mb-30">
            <nuxt-link to="/">
                <img src="/images/logo/logo-dark.png" class="img-fluid icon" alt="error!">
            </nuxt-link>
        </div>
        <ul class="footer-widget__list">
            <li>北京市海淀区学院路37号,北京航空航天大学</li>
            <li>
                <a href="scholight@163.com" class="hover-style-link">scholight@163.com</a>
            </li>
            <!-- <li>
                <a href="tel:18168659101" class="hover-style-link text-black font-weight--bold">18168659101</a>
            </li>
            <li>
                <a href="http://101.43.253.121" target="_blank" class="hover-style-link text-color-primary">http://101.43.253.121</a>
            </li> -->
        </ul>
    </div>
</template>

<script>
    export default {
        props: ['footerAbout']
    };
</script>

<style lang="scss" scoped>

.icon{
    position: relative;
    right:20px;
    bottom:5px;
}

</style>