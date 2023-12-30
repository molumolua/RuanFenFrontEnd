<template>
    <div class="header-area header-area--default">
        <div class="header-bottom-wrap" :class="{'is-sticky': isSticky}">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="header default-menu-style position-relative">
                            <div class="header__logo">
                                <nuxt-link to="/">
                                    <img src="/images/logo/logo-dark.png" class="img-fluid" alt="error!">
                                </nuxt-link>
                            </div>

                            <div class="header-midle-box">
                                <div class="header-bottom-wrap d-md-block d-none">
                                    <div class="header-bottom-inner">
                                        <div class="header-bottom-left-wrap">
                                            <div class="header__navigation d-none d-xl-block">
                                                <nav class="navigation-menu primary--menu">
                                                    <Navigation />
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="header-right-box">
                                <div class="header-bottom-wrap d-md-block d-none">
                                    <div class="header-bottom-inner">
                                        <div class="header-bottom-left-wrap">
                                            <div class="header__navigation d-none d-xl-block">
                                                <nav class="navigation-menu primary--menu">
                                                    <AvatorNavigation />
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import HeaderTop from '@/components/HeaderTop';
    import Navigation from '@/components/Navigation';
    import AvatorNavigation  from '@/components/AvatorNavigation.vue';
import { getLocale } from '@antv/g2plot/lib/core/locale';
    export default {
        components: {
            HeaderTop,
            Navigation,
            AvatorNavigation
        },
        data() {
            return {
                isSticky: false,
            }
        },
        methods: {
            // offcanvas mobile menu open
            mobileToggleClass(addRemoveClass, className) {
                const el = document.querySelector('#offcanvas-menu');
                if (addRemoveClass === 'addClass') {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },
        },

        mounted(){
            getLoacl()
            window.onbeforeunload = () => {
                setLocal();
            }
            window.addEventListener('scroll', () => {
                let scrollPos = window.scrollY
                if(scrollPos >= 200){
                    this.isSticky = true
                } else {
                    this.isSticky = false
                }
            })
        },
    };
</script>