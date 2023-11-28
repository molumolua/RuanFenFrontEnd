<template>
    <div class="footer-widget">
        <div class="footer-widget__logo mb-30">
            <nuxt-link to="/">
                <img :src="footerAbout.logo" class="img-fluid" alt="logo">
            </nuxt-link>
        </div>
        <ul class="footer-widget__list">
            <li>{{ footerAbout.address }}</li>
            <li>
                <a href="mailto:contact@mitech.com" class="hover-style-link">{{ footerAbout.email }}</a>
            </li>
            <li>
                <a href="tel:123344556" class="hover-style-link text-black font-weight--bold">{{ footerAbout.telephone }}</a>
            </li>
            <li>
                <a href="https://hasthemes.com/" target="_blank" class="hover-style-link text-color-primary">{{ footerAbout.web }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ['footerAbout']
    };
</script>