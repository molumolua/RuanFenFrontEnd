import { p as publicAssetsURL } from './paths.mjs';
import { _ as __nuxt_component_1$1 } from './server.mjs';
import { b as __nuxt_component_1$2, _ as __nuxt_component_3$2, a as __nuxt_component_4, c as _imports_1$2 } from './OffCanvasMobileMenu-4675e8aa.mjs';
import { H as HeaderTop } from './HeaderTop-a728fcac.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, resolveComponent, toDisplayString, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { _ as _imports_1$3 } from './green-curve-arrow-9e2bbff1.mjs';
import { _ as __nuxt_component_2 } from './BrandLogoCarousel-3686721b.mjs';
import { d as data$1 } from './funfact-d55c6eae.mjs';
import { _ as __nuxt_component_3$1 } from './CtaContactTwo-c876b135.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { d as data } from './service-6308e97d.mjs';
import { _ as __nuxt_component_0$1 } from './FeatureItemTwo-cd355d93.mjs';
import SwiperCore, { Pagination } from 'swiper/core';
import 'ufo';
import './config.mjs';
import 'destr';
import 'scule';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
import 'defu';

const _imports_1$1 = "" + publicAssetsURL("images/flags/en.png");
const _imports_2$1 = "" + publicAssetsURL("images/flags/fr.png");
const _imports_3$1 = "" + publicAssetsURL("images/flags/de.png");
const _sfc_main$6 = {
  components: {
    HeaderTop,
    Navigation: __nuxt_component_1$2
  },
  data() {
    return {
      isSticky: false
    };
  },
  methods: {
    // offcanvas mobile menu open
    mobileToggleClass(addRemoveClass, className) {
      const el = document.querySelector("#offcanvas-menu");
      if (addRemoveClass === "addClass") {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", () => {
      let scrollPos = window.scrollY;
      if (scrollPos >= 200) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    });
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_1$1;
  const _component_Navigation = __nuxt_component_1$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "header-area header-area--default" }, _attrs))}><div class="${ssrRenderClass([{ "is-sticky": $data.isSticky }, "header-bottom-wrap"])}"><div class="container-fluid"><div class="row"><div class="col-lg-12"><div class="header default-menu-style position-relative"><div class="header__logo">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_1$2)} class="img-fluid" alt="Brand Logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_1$2,
            class: "img-fluid",
            alt: "Brand Logo"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="header-midle-box"><div class="header-bottom-wrap d-md-block d-none"><div class="header-bottom-inner"><div class="header-bottom-left-wrap"><div class="header__navigation d-none d-xl-block"><nav class="navigation-menu primary--menu">`);
  _push(ssrRenderComponent(_component_Navigation, null, null, _parent));
  _push(`</nav></div></div></div></div></div><div class="header-right-box"><div class="header-right-inner" id="hidden-icon-wrapper"><div class="language-menu"><ul><li><a href="javascript:void(0)"><img class="ls-flag"${ssrRenderAttr("src", _imports_1$1)} alt="en" title="English"><span class="wpml-ls-native">English</span></a><ul class="ls-sub-menu"><li class=""><a href="javascript:void(0)"><img class="ls-flag"${ssrRenderAttr("src", _imports_2$1)} alt="en" title="Fran\xE7ais"><span class="wpml-ls-native">Fran\xE7ais</span></a></li><li class=""><a href="javascript:void(0)"><img class="wpml-ls-flag"${ssrRenderAttr("src", _imports_3$1)} alt="de" title="Deutsch"><span class="wpml-ls-native">Deutsch</span></a></li></ul></li></ul></div><div class="header-search-form default-search"><form class="search-form-top"><input class="search-field" type="text" placeholder="Search\u2026"><button class="search-submit"><i class="search-btn-icon fa fa-search"></i></button></form></div></div><div class="mobile-navigation-icon d-block d-xl-none" id="mobile-menu-trigger"><i></i></div></div></div></div></div></div></div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeaderTwo.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const _imports_0$2 = "" + publicAssetsURL("images/hero/home-reputable-success.png");
const _sfc_main$5 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "modern-it-company-hero" }, _attrs))}><div class="container"><div class="row align-items-center"><div class="modern-it-company-hero-image"><img${ssrRenderAttr("src", _imports_0$2)} class="img-fluid" alt=""></div><div class="col-lg-10 col-md-10"><div class="modern-it-company-hero-text wow move-up"><h1 class="heading">Make your life easier with help from <mark class="text-color-primary"> Mitech</mark></h1><h6 class="sort-dec">Team up with the best collaboration from the right expertises. </h6><div class="book-box"><div class="image"><img${ssrRenderAttr("src", _imports_1$3)} class="img-fluid" alt="arrow icon"></div><h5 class="book-text font-weight--bold mb-15">Booking is open today with profitable incentives for beginners.</h5></div><div class="modern-it-company-form-wrap"><form id="contact-form"><div class="modern-it-company-contact-form-hero"><div class="row"><div class="col-lg-6"><div class="contact-inner"><input name="con_email" type="email" placeholder="Email *"></div></div><div class="col-lg-6"><div class="contact-select"><div class="form-item contact-inner"><span class="inquiry"><select id="Visiting" name="Visiting"><option disabled="" selected="">Select Department to email</option><option value="Your inquiry about">Your inquiry about</option><option value="General Information Request">General Information Request</option><option value="Partner Relations">Partner Relations</option><option value="Careers">Careers</option><option value="Software Licencing">Software Licencing</option></select></span></div></div></div><div class="col-lg-12"><div class="button-wrap"><a href="#" class="ht-btn ht-btn-md ht-btn-full" type="submit">Get a free consultation</a></div></div></div></div></form></div></div></div></div></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroModernItCompany.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$4 = {
  data() {
    return {
      data: data$1
    };
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "fun-fact-wrapper bg-gray section-space--pb_30 section-space--pt_60" }, _attrs))}><div class="container"><div class="row"><div class="col-md-4 col-sm-6"><div class="fun-fact--four text-center"><div class="icon"><i class="far fa-smile-beam"></i></div><div class="fun-fact-text"><div class="fun-fact__count counter">1790</div><h6 class="fun-fact__text">Happy clients</h6></div></div></div><div class="col-md-4 col-sm-6"><div class="fun-fact--four text-center"><div class="icon"><i class="far fa-folder"></i></div><div class="fun-fact-text"><div class="fun-fact__count counter">920</div><h6 class="fun-fact__text">Finished projects</h6></div></div></div><div class="col-md-4 col-sm-6"><div class="fun-fact--four text-center"><div class="icon"><i class="far fa-user"></i></div><div class="fun-fact-text"><div class="fun-fact__count counter">245</div><h6 class="fun-fact__text">Experienced experts</h6></div></div></div></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FunFactFour.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _imports_0$1 = "" + publicAssetsURL("images/icons/mitech-processing-service-image-01-80x83.png");
const _imports_1 = "" + publicAssetsURL("images/icons/mitech-processing-service-image-02-80x83.png");
const _imports_2 = "" + publicAssetsURL("images/icons/mitech-processing-service-image-03-80x83.png");
const _imports_3 = "" + publicAssetsURL("images/icons/mitech-processing-service-image-04-80x83.png");
const _imports_4 = "" + publicAssetsURL("images/icons/mitech-processing-service-image-05-80x83.png");
const _imports_5 = "" + publicAssetsURL("images/icons/mitech-processing-service-image-06-80x83.png");
const _sfc_main$3 = {
  components: {
    Swiper,
    SwiperSlide,
    FeatureItemTwo: __nuxt_component_0$1
  },
  data() {
    return {
      data: data,
      swiperOptions: {
        breakpoints: {
          1200: {
            slidesPerView: 4
          },
          992: {
            slidesPerView: 3
          },
          576: {
            slidesPerView: 2
          }
        }
      }
    };
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "feature-images-wrapper bg-gradient section-space--ptb_100 overflow-hidden" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-12"><div class="section-title-wrap text-center section-space--mb_60"><h2 class="heading">No shortage in resources &amp; initiatives in <br> <span class="text-color-primary"> Technology Aid </span></h2></div></div></div><div class="image-l-r-box"><div class="row"><div class="col image-box-area"><div class="row image-box-boder-box"><div class="col-lg-4 col-md-6 image-box-boder"><div class="ht-box-images style-09"><div class="image-box-wrap"><div class="box-image"><img${ssrRenderAttr("src", _imports_0$1)} class="img-fluid" alt=""></div><div class="content"><h6 class="heading">IT Design </h6><div class="text">We provide the most responsive and functional IT design for companies and businesses worldwide. </div><div class="more-arrow-link"><a href="#"> Learn more <i class="fas fa-arrow-right"></i></a></div></div></div></div></div><div class="col-lg-4 col-md-6 image-box-boder"><div class="ht-box-images style-09"><div class="image-box-wrap"><div class="box-image"><img${ssrRenderAttr("src", _imports_1)} class="img-fluid" alt=""></div><div class="content"><h6 class="heading">IT Management</h6><div class="text">We provide the most responsive and functional IT design for companies and businesses worldwide. </div><div class="more-arrow-link"><a href="#"> Learn more <i class="fas fa-arrow-right"></i></a></div></div></div></div></div><div class="col-lg-4 col-md-6 image-box-boder"><div class="ht-box-images style-09"><div class="image-box-wrap"><div class="box-image"><img${ssrRenderAttr("src", _imports_2)} class="img-fluid" alt=""></div><div class="content"><h6 class="heading">Data Security</h6><div class="text">We provide the most responsive and functional IT design for companies and businesses worldwide. </div><div class="more-arrow-link"><a href="#"> Learn more <i class="fas fa-arrow-right"></i></a></div></div></div></div></div><div class="col-lg-4 col-md-6 image-box-boder"><div class="ht-box-images style-09"><div class="image-box-wrap"><div class="box-image"><img${ssrRenderAttr("src", _imports_3)} class="img-fluid" alt=""></div><div class="content"><h6 class="heading">Infrastructure Plan</h6><div class="text">We provide the most responsive and functional IT design for companies and businesses worldwide. </div><div class="more-arrow-link"><a href="#"> Learn more <i class="fas fa-arrow-right"></i></a></div></div></div></div></div><div class="col-lg-4 col-md-6 image-box-boder"><div class="ht-box-images style-09"><div class="image-box-wrap"><div class="box-image"><img${ssrRenderAttr("src", _imports_4)} class="img-fluid" alt=""></div><div class="content"><h6 class="heading">Firewall Advancement</h6><div class="text">We provide the most responsive and functional IT design for companies and businesses worldwide. </div><div class="more-arrow-link"><a href="#"> Learn more <i class="fas fa-arrow-right"></i></a></div></div></div></div></div><div class="col-lg-4 col-md-6 image-box-boder"><div class="ht-box-images style-09"><div class="image-box-wrap"><div class="box-image"><img${ssrRenderAttr("src", _imports_5)} class="img-fluid" alt=""></div><div class="content"><h6 class="heading">Desktop Computing</h6><div class="text">We provide the most responsive and functional IT design for companies and businesses worldwide. </div><div class="more-arrow-link"><a href="#"> Learn more <i class="fas fa-arrow-right"></i></a></div></div></div></div></div></div></div></div></div><div class="talk-message-box-wrapper section-space--mt_80 small-mt__60"><div class="row"><div class="col-lg-12"><div class="talk-message-box"><div class="message-icon"><i class="far fa-comment-alt"></i></div><div class="talk-message-box-content"><h6 class="heading">Cheers to the work that comes from trusted service providers in time.</h6><a href="#" class="ht-btn ht-btn-sm">Let&#39;s talk</a></div></div></div></div></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/FeatureGalleryThree.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const FeatureGalleryThree = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
SwiperCore.use([Pagination]);
const _sfc_main$2 = {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination-black",
          type: "bullets",
          clickable: true
        },
        breakpoints: {
          992: {
            slidesPerView: 3
          },
          576: {
            slidesPerView: 2
          },
          320: {
            slidesPerView: 1
          }
        }
      },
      projects: [
        {
          id: 1,
          imageSrc: "/images/projects/success-client-01.jpg",
          imgLogo: "/images/icons/home-reputable-success-client-logo-01.webp",
          title: "Attentive and positive attitude builds great career environment",
          link: "/"
        },
        {
          id: 2,
          imageSrc: "/images/projects/success-client-02.jpg",
          imgLogo: "/images/icons/home-reputable-success-client-logo-02.webp",
          title: "Professional consulting with reasonable budgeting strategies",
          link: "/"
        },
        {
          id: 3,
          imageSrc: "/images/projects/success-client-03.jpg",
          imgLogo: "/images/icons/home-reputable-success-client-logo-04.webp",
          title: "Precise projection of risks and potentials via advanced tools",
          link: "/"
        }
      ]
    };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "projects-wrapper section-space--pb_100" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-12"><div class="section-title-wrap text-center section-space--mb_60"><h2 class="heading">We stand out for some reasons.</h2></div></div></div><div class="row"><div class="col-12"><div class="projects-wrap swiper-container projects-slider__three">`);
  _push(ssrRenderComponent(_component_swiper, {
    "space-between": 30,
    speed: 1e3,
    loop: true,
    breakpoints: $data.swiperOptions.breakpoints,
    pagination: $data.swiperOptions.pagination
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($data.projects, (project) => {
          _push2(ssrRenderComponent(_component_swiper_slide, {
            key: project.id
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<a href="#" class="projects-wrap style-3 wow move-up"${_scopeId2}><div class="projects-image-box"${_scopeId2}><div class="projects-image"${_scopeId2}><img class="img-fluid"${ssrRenderAttr("src", project.imageSrc)}${ssrRenderAttr("alt", project.title)}${_scopeId2}><div class="project-logo"${_scopeId2}><img${ssrRenderAttr("src", project.imgLogo)}${ssrRenderAttr("alt", project.imgLogo)}${_scopeId2}></div></div><div class="content"${_scopeId2}><h5 class="heading"${_scopeId2}>${ssrInterpolate(project.title)}</h5></div></div></a>`);
              } else {
                return [
                  createVNode("a", {
                    href: "#",
                    class: "projects-wrap style-3 wow move-up"
                  }, [
                    createVNode("div", { class: "projects-image-box" }, [
                      createVNode("div", { class: "projects-image" }, [
                        createVNode("img", {
                          class: "img-fluid",
                          src: project.imageSrc,
                          alt: project.title
                        }, null, 8, ["src", "alt"]),
                        createVNode("div", { class: "project-logo" }, [
                          createVNode("img", {
                            src: project.imgLogo,
                            alt: project.imgLogo
                          }, null, 8, ["src", "alt"])
                        ])
                      ]),
                      createVNode("div", { class: "content" }, [
                        createVNode("h5", { class: "heading" }, toDisplayString(project.title), 1)
                      ])
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($data.projects, (project) => {
            return openBlock(), createBlock(_component_swiper_slide, {
              key: project.id
            }, {
              default: withCtx(() => [
                createVNode("a", {
                  href: "#",
                  class: "projects-wrap style-3 wow move-up"
                }, [
                  createVNode("div", { class: "projects-image-box" }, [
                    createVNode("div", { class: "projects-image" }, [
                      createVNode("img", {
                        class: "img-fluid",
                        src: project.imageSrc,
                        alt: project.title
                      }, null, 8, ["src", "alt"]),
                      createVNode("div", { class: "project-logo" }, [
                        createVNode("img", {
                          src: project.imgLogo,
                          alt: project.imgLogo
                        }, null, 8, ["src", "alt"])
                      ])
                    ]),
                    createVNode("div", { class: "content" }, [
                      createVNode("h5", { class: "heading" }, toDisplayString(project.title), 1)
                    ])
                  ])
                ])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="swiper-pagination swiper-pagination-black swiper-pagination-project text-center mt_20"></div></div><div class="section-under-heading text-center section-space--mt_40"> Never underestimate your potentials. <a href="#">It all started here.</a></div></div></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/ProjectGallery.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ProjectGallery = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  data() {
    return {};
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "claim-to-excel-area section-space--ptb_120" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-12"><div class="section-title-wrap text-center section-space--mb_60"><h2 class="heading">How we claim to excel?</h2></div></div></div><div class="row"><div class="col-lg-12"><div class="claim-grid-group"><div class="ht-box-icon style-04"><div class="icon-box-wrap color-one"><div class="icon"><span class="icon-basic-anticlockwise"></span></div><div class="content"><h6 class="sub-heading">01</h6><h5 class="heading">Prompt help</h5><p class="text">We give prompt help desk answer right when receiving the request from customers.</p></div></div></div><div class="ht-box-icon style-04"><div class="icon-box-wrap color-two"><div class="icon"><span class="icon-basic-life-buoy"></span></div><div class="content"><h6 class="sub-heading">02</h6><h5 class="heading">Sound advice</h5><p class="text">Knowledge come with age and time. Our experts make sure it works.</p></div></div></div><div class="ht-box-icon style-04"><div class="icon-box-wrap color-three"><div class="icon"><span class="icon-basic-world"></span></div><div class="content"><h6 class="sub-heading">03</h6><h5 class="heading">Zero risk</h5><p class="text">No risking factors are present and we have all kinds of measures to protect against losses.</p></div></div></div><div class="ht-box-icon style-04"><div class="icon-box-wrap color-four"><div class="icon"><span class="icon-basic-case"></span></div><div class="content"><h6 class="sub-heading">04</h6><h5 class="heading">Tech savvy</h5><p class="text">Technological wise plans are made for addressing all kinds of requests and demands.</p></div></div></div><div class="ht-box-icon style-04"><div class="icon-box-wrap color-five"><div class="icon"><span class="icon-basic-lock"></span></div><div class="content"><h6 class="sub-heading">05</h6><h5 class="heading">Satisfied</h5><p class="text">100% of our current and recurring customers feel satisfied with the final results.</p></div></div></div></div></div></div><div class="row row--10"><div class="col-lg-8"><div class="success-stories-wrap mt-40"><div class="modern-number-01 me-5"><h2 class="heading"><span class="mark-text">49</span></h2><p>YEARS IN THE FIELD</p></div><div class="content"><h4 class="heading mb-20">Read further to <br> our Success <br> Stories</h4><a href="#" class="ht-btn ht-btn-md"><i class="far fa-comment-alt me-2"></i> Let&#39;s talk</a></div></div></div><div class="col-lg-4"><div class="modern-it-newsletters-wrap text-center mt-40"><div class="section-title"><h6 class="heading mb-30">Don\u2019t miss our monthly newsletters with the best analyses.</h6></div><form action="#"><div class="contact-inner"><input name="con_email" type="email" placeholder="Your e-mail"></div><div class="button-wrap mb-15"><a href="#" class="ht-btn ht-btn-md ht-btn-full">Subscribe</a></div><p>Join 89.898 subscribers.</p></form></div></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/ClaimContent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ClaimContent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_0 = "" + publicAssetsURL("images/testimonial/home-reputable-success-about-image.jpg");
const _sfc_main = {
  components: {
    HeaderTwo: __nuxt_component_0,
    HeroModernItCompany: __nuxt_component_1,
    BrandLogoCarousel: __nuxt_component_2,
    FunFactFour: __nuxt_component_3,
    FeatureGalleryThree,
    ProjectGallery,
    CtaContactTwo: __nuxt_component_3$1,
    ClaimContent,
    Footer: __nuxt_component_3$2,
    OffCanvasMobileMenu: __nuxt_component_4
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HeaderTwo = __nuxt_component_0;
  const _component_HeroModernItCompany = __nuxt_component_1;
  const _component_BrandLogoCarousel = __nuxt_component_2;
  const _component_FunFactFour = __nuxt_component_3;
  const _component_FeatureGalleryThree = resolveComponent("FeatureGalleryThree");
  const _component_ProjectGallery = resolveComponent("ProjectGallery");
  const _component_CtaContactTwo = __nuxt_component_3$1;
  const _component_ClaimContent = resolveComponent("ClaimContent");
  const _component_Footer = __nuxt_component_3$2;
  const _component_OffCanvasMobileMenu = __nuxt_component_4;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-container" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_HeaderTwo, null, null, _parent));
  _push(`<div class="modern-it-company-top-area">`);
  _push(ssrRenderComponent(_component_HeroModernItCompany, null, null, _parent));
  _push(`<div class="brand-logo-slider-area section-space--ptb_80"><div class="container"><div class="row"><div class="col-lg-12"><div class="section-title section-space--mb_60"><h5 class="heading-text text-center"> Step forward to become one of <span class="text-color-primary">49,494</span> successful clients of Mitech and get in the front line for the most wonderful presentation. </h5></div></div><div class="col-lg-12">`);
  _push(ssrRenderComponent(_component_BrandLogoCarousel, null, null, _parent));
  _push(`</div></div></div></div><div class="modern-it-company-clients-review-area modern-it-company-testimonial-bg section-space--pb_120"><div class="container-fluid"><div class="row align-items-center"><div class="col-lg-6 col-md-6"><div class="image text-center"><img${ssrRenderAttr("src", _imports_0)} class="img-fluid" alt="image"></div></div><div class="col-lg-6 col-md-6"><div class="modern-it-company-testimonial text-left"><p class="text">You know you did right when all your effort started to pay off in an unexpected and impressive way. @Mitech brings clients and businesses together in a fair play field.</p><div class="author"><h6>Luna Lovewoods</h6><p>/ Web design</p></div></div></div></div></div></div></div>`);
  _push(ssrRenderComponent(_component_FunFactFour, null, null, _parent));
  _push(ssrRenderComponent(_component_FeatureGalleryThree, null, null, _parent));
  _push(ssrRenderComponent(_component_ProjectGallery, null, null, _parent));
  _push(ssrRenderComponent(_component_CtaContactTwo, null, null, _parent));
  _push(ssrRenderComponent(_component_ClaimContent, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(ssrRenderComponent(_component_OffCanvasMobileMenu, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Modern-It-Company.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ModernItCompany = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { ModernItCompany as default };
//# sourceMappingURL=Modern-It-Company-5f887c3b.mjs.map
