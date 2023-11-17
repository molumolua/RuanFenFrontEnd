<template>
    <div class="footer-widget">
        <h6 class="footer-widget__title mb-20">{{ title }}</h6>
        <ul class="footer-widget__list">
            <li v-for="nav in navLists" :key="nav.id">
                <nuxt-link :to="nav.navUrl" class="hover-style-link">
                    {{ nav.navTitle }}
                </nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ['title', 'navLists']
    };
</script>