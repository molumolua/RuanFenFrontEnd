<template>
    <div class="footer-area-wrapper bg-gray">
        <div class="footer-area section-space--ptb_80">
            <div class="container">
                <div class="row footer-widget-wrapper">
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <FooterAbout :footerAbout="data.footerAboutData" />
                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-6">
                        <FooterWidgetLink :title="data.footerWidgetTitleOne" :navLists="data.navListOne" />
                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-6">
                        <FooterWidgetLink :title="data.footerWidgetTitleTwo" :navLists="data.navListTwo" />
                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-6 footer-widget">
                        <FooterWidgetLink :title="data.footerWidgetTitleThree" :navLists="data.navListThree" />
                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-6">
                        <FooterWidgetApps :footerApps="data.footerAppData" />
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-copyright-area section-space--pb_30">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-6 text-center text-md-start">
                        <span class="copyright-text">{{ data.footerBottom.copyright }}</span>
                    </div>
                    <div class="col-md-6 text-center text-md-end">
                        <ul class="list ht-social-networks solid-rounded-icon">
                            <li class="item">
                                <a :href="data.footerBottom.twitterUrl" target="_blank" aria-label="Twitter" class="social-link hint--bounce hint--top hint--primary">
                                    <i class="fab fa-twitter link-icon"></i>
                                </a>
                            </li>
                            <li class="item">
                                <a :href="data.footerBottom.fbUrl" target="_blank" aria-label="Facebook" class="social-link hint--bounce hint--top hint--primary">
                                    <i class="fab fa-facebook-f link-icon"></i>
                                </a>
                            </li>
                            <li class="item">
                                <a :href="data.footerBottom.instagramUrl" target="_blank" aria-label="Instagram" class="social-link hint--bounce hint--top hint--primary">
                                    <i class="fab fa-instagram link-icon"></i>
                                </a>
                            </li>
                            <li class="item">
                                <a :href="data.footerBottom.linkedinUrl" target="_blank" aria-label="Linkedin" class="social-link hint--bounce hint--top hint--primary">
                                    <i class="fab fa-linkedin link-icon"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import data from '../data/footer.json';

    import FooterAbout from '@/components/FooterAbout';
    import FooterWidgetLink from '@/components/FooterWidgetLink';
    import FooterWidgetApps from '@/components/FooterWidgetApps';
    export default {
        components: {
            FooterAbout,
            FooterWidgetLink,
            FooterWidgetApps
        },
        data () {
            return {
                data
            }
        }
    };
</script>