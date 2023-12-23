<template>
    <div class="header-area header-area--default">
        <!-- <HeaderTop /> -->

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
                                <div class="header-right-inner" id="hidden-icon-wrapper">
                                    <div class="header-search-form default-search">
                                        <form class="search-form-top">
                                            <input class="search-field" type="text" placeholder="Search…">
                                            <button class="search-submit">
                                                <i class="search-btn-icon fa fa-search"></i>
                                            </button>
                                        </form>
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

    export default {
        components: {
            HeaderTop,
            Navigation,
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