<template>
    <div class="footer-widget">
        <h6 class="footer-widget__title mb-30">{{ footerApps.footerWidgetTitleFour }}</h6>
        <ul class="footer-widget__list">
            <li>
                <a :href="footerApps.androidUrl" target="_blank" class="image_btn">
                    <img class="img-fluid" :src="footerApps.android" alt="thumbnail">
                </a>
            </li>
            <li>
                <a :href="footerApps.appleUrl" target="_blank" class="image_btn">
                    <img class="img-fluid" :src="footerApps.apple" alt="thumbnail">
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ['footerApps']
    };
</script>