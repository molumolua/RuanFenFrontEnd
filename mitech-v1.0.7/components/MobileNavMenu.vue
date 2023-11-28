<template>
    <div class="mobile-navigation">
        <nav class="offcanvas-navigation" id="offcanvas-navigation">
            <ul>
                <li class="menu-item-has-children">
                    <nuxt-link to="/">Home</nuxt-link>
                    <ul class="sub-menu">
                        <li>
                            <nuxt-link to="/">
                                <span>Info Technology</span>
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/processing">
                                <span>Processing</span>
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/appointment">
                                <span>Appointment</span>
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/service">
                                <span>Services</span>
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/resolutions">
                                <span>Resolutions</span>
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/cybersecurity">
                                <span>Cybersecurity</span>
                            </nuxt-link>
                        </li>
                    </ul>
                </li>
                <li class="menu-item-has-children">
                    <nuxt-link to="/about">
                        <span>Company</span>
                    </nuxt-link>
                    <ul class="sub-menu">
                        <li>
                            <nuxt-link to="/about">
                                <span>About Us</span>
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/contact">
                                <span>Contact Us</span>
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/leadership">
                                <span>Leadership</span>
                            </nuxt-link>
                        </li>
                    </ul>
                </li>
                <li class="menu-item-has-children">
                    <nuxt-link to="/it-services">
                        <span>Services</span>
                    </nuxt-link>
                    <ul class="sub-menu">
                        <li>
                            <nuxt-link to="/it-services">
                                <span>IT Services</span>
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/it-solutions">
                                <span>IT Solutions</span>
                            </nuxt-link>
                        </li>
                    </ul>
                </li>
                <li class="menu-item-has-children">
                    <nuxt-link to="/">
                        <span>Elements</span>
                    </nuxt-link>
                    <ul class="sub-menu">
                        <li>
                            <nuxt-link to="/element/accordion">
                                <span>Accordion</span>
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/element/box-icon">
                                <span>Box Icon</span>
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/element/box-image">
                                <span>Box Image</span>
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/element/box-large-image">
                                <span>Box Large Image</span>
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/element/call-to-action">
                                <span>Call To Action</span>
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/element/counters">
                                <span>Counters</span>
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/element/gradation">
                                <span>Gradation</span>
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/element/teams">
                                <span>Teams</span>
                            </nuxt-link>
                        </li>
                    </ul>
                </li>
                <li>
                    <nuxt-link to="/case-studies">
                        <span>Case Studies</span>
                    </nuxt-link>
                </li>
                <li class="menu-item-has-children">
                    <nuxt-link to="/blog">
                        <span>Blog</span>
                    </nuxt-link>
                    <ul class="sub-menu">
                        <li>
                            <nuxt-link to="/blog/blog-details">
                                <span>Blog Details</span>
                            </nuxt-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default{
        name: 'MobileNavMenu',
        mounted() {
            const offCanvasNav = document.querySelector('#offcanvas-navigation');
            const offCanvasNavSubMenu = offCanvasNav.querySelectorAll('.sub-menu');
            const anchorLinks = offCanvasNav.querySelectorAll('a');
        
            for (let i = 0; i < offCanvasNavSubMenu.length; i++){
                offCanvasNavSubMenu[i].insertAdjacentHTML("beforebegin", "<span class='menu-expand'><i></i></span>");
            }
        
            const menuExpand = offCanvasNav.querySelectorAll('.menu-expand');
            const numMenuExpand = menuExpand.length;
        
            for (let i = 0; i < numMenuExpand; i++) {
                menuExpand[i].addEventListener("click", (e) => {sideMenuExpand(e)});
            }
        
            for (let i = 0; i < anchorLinks.length; i++) {
                anchorLinks[i].addEventListener("click", () => {closeMobileMenu()});
            }

            const sideMenuExpand = (e) => {
                e.currentTarget.parentElement.classList.toggle('active');
            }
            const closeMobileMenu = () => {
                const offcanvasMobileMenu = document.querySelector('#offcanvas-mobile-menu');
                offcanvasMobileMenu?.classList.remove('active');
            }
        }
    };
</script>

<style lang="scss">
    @import '../assets/scss/_variables.scss';

    /* offcanvas mobile menu */
    .mobile-navigation {
        padding: 30px 20px;
    }
    .offcanvas-navigation {
         ul {
            li {
                &.menu-item-has-children {
                    .sub-menu {
                        height: 0;
                        visibility: hidden;
                        opacity: 0;
                        transition: 0.3s;
                    }
                    &.active {
                        .sub-menu {
                            height: 100%;
                            visibility: visible;
                            opacity: 1;
                        }
                    }
                }
                a {
                    color: $white;
                    font-size: 14px;
                    padding: 10px 0;
                    display: block;
                    &:hover {
                        color: $theme-color--two;
                    }
                }
            }
        }

        ul {
            &.sub-menu {
                margin-left: 15px;
                transition: 0.4s;
                li {
                    a {
                        color: $white;
                        font-size: 13px;
                        padding: 5px 0;
                        &:hover {
                            color: $theme-color--two;
                        }
                    }
                }
            }
            li {
                a {
                    text-transform: uppercase;
                }

                &.menu-item-has-children {
                    position: relative;
                    display: block;
                    a {
                        display: inline-block;
                    }

                    &.active {
                        .menu-expand {
                            background-color: rgba($white, 0.2);
                            i {
                                &:before {
                                    transform: rotate(0);
                                }
                            }
                        }
                    }

                    .menu-expand {
                        top: 5px;
                        right: 0;
                        width: 35px;
                        height: 35px;
                        cursor: pointer;
                        line-height: 35px;
                        position: absolute;
                        text-align: center;
                        background-color: rgba($white, 0.1);
                        &:hover {
                            background-color: rgba($white, 0.2);
                        }

                        i {
                            display: block;
                            border-bottom: 1px solid #ffffff;
                            position: relative;
                            width: 10px;
                            text-align: center;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            &:before {
                                width: 100%;
                                content: "";
                                border-bottom: 1px solid $white;
                                display: block;
                                position: absolute;
                                top: 0;
                                transform: rotate(90deg);
                                transition: 0.4s;
                            }
                        }
                    }
                }
            }
        }
    }
</style>