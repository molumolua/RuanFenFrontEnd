<template>
    <div class="main-container">
        <Header />
        <Breadcrumbs items="Blog Details" breadcrumbTitle="Blog Details" />

        <div class="blog-pages-wrapper section-space--ptb_100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <!-- Post Feature Start -->
                        <div class="post-feature blog-thumbnail  wow move-up">
                            <img class="img-fluid" src="/images/blog/blog-03-1170x600.jpg" alt="Blog Images">
                        </div>
                        <!-- Post Feature End -->
                    </div>
                    <div class="col-lg-8 ms-auto me-auto">
                        <div class="main-blog-wrap">
                            <!--======= Single Blog Item Start ========-->
                            <div class="single-blog-item  wow move-up">

                                <!-- Post info Start -->
                                <div class="post-info lg-blog-post-info">
                                    <div class="post-categories text-center">
                                        <nuxt-link to="/blog">SUCCESS STORY, TIPS</nuxt-link>
                                    </div>

                                    <h3 class="post-title text-center">
                                        How Technology Made Businesses More Efficient
                                    </h3>

                                    <div class="post-meta mt-20 justify-content-center">
                                        <div class="post-author">
                                            <nuxt-link to="/">
                                                <img class="img-fluid avatar-96" src="/images/team/admin.jpeg" alt="thumbnail"> 
                                                Harry Ferguson
                                            </nuxt-link>
                                        </div>
                                        <div class="post-date">
                                            <span class="far fa-calendar meta-icon"></span>
                                            January 14, 2019
                                        </div>
                                        <div class="post-view">
                                            <span class="meta-icon far fa-eye"></span>
                                            346 views
                                        </div>
                                        <div class="post-comments">
                                            <span class="far fa-comment-alt meta-icon"></span>
                                            <a href="#" class="smooth-scroll-link">4 Comments</a>
                                        </div>
                                    </div>

                                    <div class="post-excerpt mt-15">
                                        <p>Creative jobs website and networking platform The Dots has launched the “bias blocker”, a new browsing mode that stops employers being able to see candidates’ photos, names, education and employment history, on the basis that they should be judged on the “quality of their work” only. Will tools like this help to build a more diverse design workforce?</p>

                                        <blockquote>
                                            <p class="p1">We’re on a mission to build a better future where technology creates good jobs for everyone. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse moles dolore eu feugiat..
                                            </p>
                                        </blockquote>

                                        <p>Regardless of our gender, race, religion, cultural beliefs or education, all of us are biased in some way. This no doubt seeps into recruitment – whether we are subconsciously looking for people we relate to, or we are actively going against this to try to diversify the workplace, personal feelings and opinion are making their way into the hiring process.</p>

                                        <p>Positive discrimination – giving an advantage to those from minority backgrounds or discriminated groups to put them on a level playing field with others – can only be a good thing. It increases the diversity of people, and therefore the diversity of ideas, in the workplace.</p>

                                        <p>Source: designweek.co.uk</p>

                                        <div class="entry-post-share-wrap  border-bottom">
                                            <div class="row align-items-center">
                                                <div class="col-lg-6 col-md-6">
                                                    <div class="entry-post-tags">
                                                        <div class="tagcloud-icon">
                                                            <i class="fa fa-tags"></i>
                                                        </div>
                                                        <div class="tagcloud">
                                                            <nuxt-link to="/it-services">IT Service</nuxt-link>
                                                            <nuxt-link to="/it-services">IT Service</nuxt-link>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-lg-6 col-md-6">
                                                    <div id="entry-post-share" class="entry-post-share">
                                                        <div class="share-label">
                                                            Share this post
                                                        </div>
                                                        <div class="share-media">
                                                            <span class="share-icon fas fa-share-alt"></span>

                                                            <div class="share-list">
                                                                <a class="hint--bounce hint--top hint--primary twitter" target="_blank" aria-label="Twitter" href="#">
                                                                    <i class="fab fa-twitter"></i>
                                                                </a>
                                                                <a class="hint--bounce hint--top hint--primary facebook" target="_blank" aria-label="Facebook" href="#">
                                                                    <i class="fab fa-facebook-f"></i>
                                                                </a>
                                                                <a class="hint--bounce hint--top hint--primary linkedin" target="_blank" aria-label="Linkedin" href="#">
                                                                    <i class="fab fa-linkedin"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="entry-author">
                                            <div class="author-info">
                                                <div class="author-avatar">
                                                    <img src="/images/team/avatar-06-90x90.jpeg" alt="">
                                                    <div class="author-social-networks">
                                                        <div class="inner">
                                                            <a class="hint--bounce hint--top hint--primary" aria-label="Twitter" href="https://twitter.com" target="_blank">
                                                                <i class="fab fa-twitter"></i>
                                                            </a>
                                                            <a class="hint--bounce hint--top hint--primary" aria-label="Facebook" href="https://www.facebook.com/" target="_blank">
                                                                <i class="fab fa-facebook-f"></i>
                                                            </a>
                                                            <a class="hint--bounce hint--top hint--primary" aria-label="Instagram" href="https://www.linkedin.com/" target="_blank">
                                                                <i class="fab fa-instagram"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="author-description">
                                                    <h6 class="author-name">Owen Christ</h6>
                                                    <div class="author-biographical-info">
                                                        Harry Ferguson is an author, blogger, and designer living in a suburb of Washington, DC. When he’s not designing, blogging, or writing, Ferguson can be found with his head in a book or pinning like a madman.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="related-posts-wrapper">

                                            <div class="row mtn-30">
                                                <div class="col-lg-6 mt-30">
                                                    <!-- Single Valid Post Start -->
                                                    <nuxt-link to="/blog/blog-details" class="single-valid-post-wrapper">
                                                        <div class="single-blog__item">
                                                            <div class="single-valid__thum" :style="{ backgroundImage: `url('/images/blog/blog-03-370x120.jpg')` }">
                                                            </div>
                                                            <div class="post-content">
                                                                <h6 class="post-title font-weight--bold">
                                                                    Designers’ Identities & Social Unconscious Bias
                                                                </h6>
                                                            </div>
                                                        </div>
                                                    </nuxt-link>
                                                    <!-- Single Valid Post End -->
                                                </div>
                                                <div class="col-lg-6 mt-30">
                                                    <!-- Single Valid Post Start -->
                                                    <nuxt-link to="/blog/blog-details" class="single-valid-post-wrapper">
                                                        <div class="single-blog__item">
                                                            <div class="single-valid__thum" :style="{ backgroundImage: `url('/images/blog/blog-05-370x120.jpg')` }">
                                                            </div>
                                                            <div class="post-content">
                                                                <h6 class="post-title font-weight--bold">
                                                                    Designers’ Identities & Social Unconscious Bias
                                                                </h6>
                                                            </div>
                                                        </div>
                                                    </nuxt-link>
                                                    <!-- Single Valid Post End -->
                                                </div>
                                            </div>
                                        </div>

                                        <div class="comment-list-wrapper">

                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <h4 class="widget-title section-space--mb_50">Comments (1) </h4>
                                                </div>
                                                <div class="col-lg-12">

                                                    <ol class="comment-list">
                                                        <li class="comment">
                                                            <div class="comment-5">
                                                                <div class="comment-author vcard">
                                                                    <img alt="" src="/images/team/comment-3.jpeg">
                                                                </div>
                                                                <div class="comment-content">
                                                                    <div class="meta">
                                                                        <h6 class="fn">James Scott</h6>
                                                                        <div class="comment-datetime">
                                                                            November 13, 2018 at 4:50 am </div>
                                                                    </div>
                                                                    <div class="comment-text">
                                                                        <p>Thanks for always keeping your HTML Template up to date. Your level of support and dedication is second to none.</p>
                                                                    </div>

                                                                    <div class="comment-actions">
                                                                        <div class="comment-datetime"> February 12, 2018 at 6:31 am </div><span> | </span>
                                                                        <button class="comment-reply-link">Reply</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <ol class="children">
                                                                <li class="comment ">
                                                                    <div class="comment-6">
                                                                        <div class="comment-author vcard">
                                                                            <img alt="" src="/images/team/reply-comm.jpg">
                                                                        </div>
                                                                        <div class="comment-content">
                                                                            <div class="meta">
                                                                                <h6 class="fn">Harry Ferguson</h6>
                                                                                <div class="comment-datetime">
                                                                                    February 13, 2019 at 4:51 am </div>
                                                                            </div>
                                                                            <div class="comment-text">
                                                                                <p>Thanks for always keeping your HTML Template up to date. Your level of support and dedication is second to none.</p>
                                                                            </div>

                                                                            <div class="comment-actions">
                                                                                <div class="comment-datetime"> November 13, 2018 at 4:31 am </div><span> | </span>
                                                                                <button class="comment-reply-link">Reply</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li><!-- comment End -->
                                                            </ol><!-- children End -->
                                                        </li><!-- comment End-->
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="comment-list-wrapper">
                                            <div class="row">

                                                <div class="col-lg-12">
                                                    <h4 class="widget-title mb-20">Leave your thought here </h4>
                                                    <p>Your email address will not be published. Required fields are marked *</p>
                                                </div>

                                                <div class="col-lg-12">
                                                    <div class="contact-from-wrapper section-space--mt_30">
                                                        <form action="#" method="post">
                                                            <div class="contact-page-form">
                                                                <div class="contact-input">
                                                                    <div class="contact-inner">
                                                                        <input name="name" type="text" placeholder="Your Comment *">
                                                                    </div>
                                                                    <div class="contact-inner">
                                                                        <input name="email" type="email" placeholder="Your Email *">
                                                                    </div>

                                                                </div>
                                                                <div class="contact-inner contact-message">
                                                                    <textarea name="comment" placeholder="Your Comment"></textarea>
                                                                </div>
                                                                <p class="comment-form-cookies-consent">
                                                                    <input type="checkbox">
                                                                    <label>Save my name, email, and website in this browser for the next time I comment.</label>
                                                                </p>
                                                                <div class="comment-submit-btn text-center">
                                                                    <button class="ht-btn ht-btn-md" type="submit">Submit</button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <!-- Post info End -->
                            </div>
                            <!--===== Single Blog Item End =========-->

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <CtaThree />
        <Footer />
        <OffCanvasMobileMenu />
    </div>
</template>

<script>
    import Header from '@/components/Header';
    import Breadcrumbs from '@/components/Breadcrumbs';
    import CtaThree from '@/components/CtaThree';
    import Footer from '@/components/Footer';
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';

    import data from '../../data/blog.json';
    export default {
        components: {
            Header,
            Breadcrumbs,
            CtaThree,
            Footer,
            OffCanvasMobileMenu
        },
        data() {
            return {
                data
            }
        }
    };
</script>