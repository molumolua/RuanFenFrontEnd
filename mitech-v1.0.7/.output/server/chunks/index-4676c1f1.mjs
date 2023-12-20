import { _ as __nuxt_component_0$3 } from './Header-a5549ad8.mjs';
import { _ as __nuxt_component_1$1 } from './server.mjs';
import { d as data$1 } from './hero-2aa9cd53.mjs';
import { useSSRContext, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, resolveComponent, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { _ as __nuxt_component_2 } from './BrandLogoCarousel-3686721b.mjs';
import { _ as __nuxt_component_0$1 } from './ServiceItem-17c8f445.mjs';
import { d as data } from './service-6308e97d.mjs';
import { _ as __nuxt_component_4 } from './FunFact-bdb4d4e0.mjs';
import { _ as __nuxt_component_6 } from './CtaContact-2da6894c.mjs';
import { _ as __nuxt_component_3$2, a as __nuxt_component_4$1 } from './OffCanvasMobileMenu-4675e8aa.mjs';
import __nuxt_component_0$2 from './SectionTitle-b03cc0d0.mjs';
import { _ as __nuxt_component_3$1 } from './FeatureItem-09329b54.mjs';
import { a as about } from './about-c80198d9.mjs';
import { C as CaseStudiesSection } from './CaseStudiesSection-56a6bdb5.mjs';
import SwiperCore, { Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { d as data$2 } from './testimonial-a07af300.mjs';
import { B as BlogStyleOne } from './BlogStyleOne-3889171e.mjs';
import './HeaderTop-a728fcac.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
import 'defu';
import './config.mjs';
import 'destr';
import 'scule';
import './funfact-d55c6eae.mjs';
import './CaseStudiesItem-a6cb7c42.mjs';
import './caseStidies-14b56fd1.mjs';
import './blog-af81b322.mjs';

const _sfc_main$6 = {
  data() {
    return {
      data: data$1
    };
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "infotechno-hero infotechno-bg" }, _attrs))}><div class="container-fluid"><div class="row align-items-center"><div class="col-lg-6 col-md-6"><div class="infotechno-hero-text wow move-up"><h6>${ssrInterpolate($data.data.heroInfotechno.subTitle)}</h6><h1 class="font-weight--reguler mb-15">${$data.data.heroInfotechno.title}</h1><p>${ssrInterpolate($data.data.heroInfotechno.desc)}</p><div class="hero-button mt-30">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    class: "ht-btn ht-btn-md",
    to: "/about"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Get details`);
      } else {
        return [
          createTextVNode("Get details")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div class="col-lg-6 col-md-6"><div class="infotechno-hero-inner-images"><div class="infotechno-inner-one"><img class="img-fluid"${ssrRenderAttr("src", $data.data.heroInfotechno.bgImg)} alt="hero image"></div><div class="infotechno-inner-two wow move-up"><img class="img-fluid"${ssrRenderAttr("src", $data.data.heroInfotechno.img)} alt="hero image"></div></div></div></div></div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroInfotechNo.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$5 = {
  components: {
    ServiceItem: __nuxt_component_0$1
  },
  data() {
    return {
      data: data
    };
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ServiceItem = __nuxt_component_0$1;
  const _component_nuxt_link = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "feature-images-wrapper bg-gray section-space--ptb_100" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-12"><div class="section-title-wrap text-center"><h6 class="section-sub-title mb-20">${ssrInterpolate($data.data.serviceOne.sectionSubTitle)}</h6><h3 class="heading">${$data.data.serviceOne.sectionTitle}</h3></div></div></div><div class="row"><div class="col-12"><div class="feature-images__one"><div class="row"><!--[-->`);
  ssrRenderList($data.data.services.slice(0, 3), (service) => {
    _push(`<div class="col-lg-4 col-md-6 wow move-up">`);
    _push(ssrRenderComponent(_component_ServiceItem, { service }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div><div class="section-under-heading text-center section-space--mt_60 section-space--pt_30">${ssrInterpolate($data.data.serviceOne.underHeading)} `);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Take the challenge!`);
      } else {
        return [
          createTextVNode("Take the challenge!")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ServiceOne.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "infotechno-video-wrapper infotechno-video-ptb infotechno-video-bg",
    style: { backgroundImage: `url('/images/bg/home-infotechno-video-intro-bg.jpg')` }
  }, _attrs))}><div class="container"><div class="row"><div class="col-lg-6 col-md-10 col-11 ms-auto"><div class="video-content-wrap"><div class="vieeo-content-inner"><h2 class="heading">Share the joy of achieving glorious moments<br>&amp; climbing up the top.</h2><div class="viewo-text-wrap"><div class="video-popup infotech-video-box"><a href="https://www.youtube.com/watch?v=eS9Qm4AOOBY" target="_blank" class="single-popup-wrap video-link"><div class="video-content"><div class="ht-popup-video video-button"><div class="video-mark"><div class="wave-pulse wave-pulse-1"></div><div class="wave-pulse wave-pulse-2"></div></div><div class="video-button__two"><div class="video-play"><span class="video-play-icon"></span></div></div></div><div class="video-text"> Watch video<br>intro </div></div></a></div></div></div></div></div></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CtaVideo.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = {
  props: ["aboutData"]
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-title small-mb__40 tablet-mb__40" }, _attrs))}><h6 class="section-sub-title mb-20">${ssrInterpolate($props.aboutData.sectionSubTitle)}</h6><h3 class="heading">${$props.aboutData.sectionTitle}</h3><p class="text mt-20">${ssrInterpolate($props.aboutData.desc)}</p><div class="sider-title-button-box mt-30">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    class: "ht-btn ht-btn-md",
    to: "/about"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Join us now`);
      } else {
        return [
          createTextVNode("Join us now")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AboutCompany.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {
  components: {
    SectionTitle: __nuxt_component_0$2,
    AboutCompany: __nuxt_component_0,
    FeatureItem: __nuxt_component_3$1
  },
  data() {
    return {
      data: data,
      about
    };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AboutCompany = __nuxt_component_0;
  const _component_nuxt_link = __nuxt_component_1$1;
  const _component_SectionTitle = __nuxt_component_0$2;
  const _component_FeatureItem = __nuxt_component_3$1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "section-space--ptb_100 infotechno-section-bg-01",
    style: { backgroundImage: `url('/images/patterns/mitech-home-infotechno-section-company-bg.png')` }
  }, _attrs))}><div class="our-experience-wrapper"><div class="container"><div class="row"><div class="col-lg-5">`);
  _push(ssrRenderComponent(_component_AboutCompany, {
    aboutData: $data.about.aboutCompany
  }, null, _parent));
  _push(`</div><div class="col-lg-5 ms-auto"><div class="ht-list style-auto-numbered-02"><!--[-->`);
  ssrRenderList($data.about.items, (item) => {
    _push(`<div class="list-item">`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: "/about",
      class: "link"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="list-header"${_scopeId}><div class="marker"${_scopeId}>${ssrInterpolate(item.no)}</div><div class="title-wrap"${_scopeId}><h6 class="title"${_scopeId}>${ssrInterpolate(item.title)}</h6></div></div>`);
        } else {
          return [
            createVNode("div", { class: "list-header" }, [
              createVNode("div", { class: "marker" }, toDisplayString(item.no), 1),
              createVNode("div", { class: "title-wrap" }, [
                createVNode("h6", { class: "title" }, toDisplayString(item.title), 1)
              ])
            ])
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div></div></div></div><div class="feature-large-images-wrapper section-space--pt_100"><div class="container"><div class="row"><div class="col-lg-12">`);
  _push(ssrRenderComponent(_component_SectionTitle, {
    class: "text-center section-space--mb_30",
    title: $data.data.featureSectionTitle,
    subTitle: $data.data.featureSectionSubTitle
  }, null, _parent));
  _push(`</div></div><div class="row"><div class="col-12"><div class="row row--35"><!--[-->`);
  ssrRenderList($data.data.services.slice(23, 26), (service) => {
    _push(`<div class="col-lg-4 col-md-6 mt-30">`);
    _push(ssrRenderComponent(_component_FeatureItem, { service }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div><div class="section-under-heading text-center section-space--mt_40">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/about" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Learn more about how we work span <i class="ms-1 button-icon fas fa-arrow-right ms-1"${_scopeId}></i>`);
      } else {
        return [
          createTextVNode(" Learn more about how we work span "),
          createVNode("i", { class: "ms-1 button-icon fas fa-arrow-right ms-1" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/InfoTechExperience.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const InfoTechExperience = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
SwiperCore.use([Pagination]);
const _sfc_main$1 = {
  components: {
    Swiper,
    SwiperSlide,
    SectionTitle: () => import('./SectionTitle-b03cc0d0.mjs')
  },
  data() {
    return {
      data: data$2,
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination-t0",
          type: "bullets",
          clickable: true
        },
        breakpoints: {
          1200: {
            slidesPerView: 3
          },
          575: {
            slidesPerView: 1
          }
        }
      }
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SectionTitle = __nuxt_component_0$2;
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "testimonial-slider-area section-space--ptb_120 bg-gray-3" }, _attrs))}><div class="container-fluid container-fluid--cp-80"><div class="row"><div class="col-lg-12">`);
  _push(ssrRenderComponent(_component_SectionTitle, {
    class: "text-center section-space--mb_60",
    title: $data.data.sectionTitle,
    subTitle: $data.data.sectionSubTitle
  }, null, _parent));
  _push(`<div class="testimonial-slider"><div class="testimonial-slider__container-two"><div class="testimonial-slider__wrapper">`);
  _push(ssrRenderComponent(_component_swiper, {
    "space-between": 30,
    speed: 1e3,
    loop: true,
    "centered-slides": true,
    breakpoints: $data.swiperOptions.breakpoints,
    pagination: $data.swiperOptions.pagination
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($data.data.testimonials, (testimonial) => {
          _push2(ssrRenderComponent(_component_swiper_slide, {
            key: testimonial.id
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="testimonial-slider__single wow move-up"${_scopeId2}><h6 class="testimonial-subject"${_scopeId2}>${ssrInterpolate(testimonial.subject)}</h6><div class="testimonial-slider__text"${_scopeId2}>${ssrInterpolate(testimonial.desc)}</div><div class="author-info"${_scopeId2}><div class="testimonial-slider__media"${_scopeId2}><img${ssrRenderAttr("src", testimonial.thumb)} class="img-fluid" alt="author thumbnail"${_scopeId2}></div><div class="testimonial-slider__author"${_scopeId2}><h6 class="name"${_scopeId2}>${ssrInterpolate(testimonial.name)}</h6><span class="designation"${_scopeId2}>${ssrInterpolate(testimonial.designation)}</span></div></div></div>`);
              } else {
                return [
                  createVNode("div", { class: "testimonial-slider__single wow move-up" }, [
                    createVNode("h6", { class: "testimonial-subject" }, toDisplayString(testimonial.subject), 1),
                    createVNode("div", { class: "testimonial-slider__text" }, toDisplayString(testimonial.desc), 1),
                    createVNode("div", { class: "author-info" }, [
                      createVNode("div", { class: "testimonial-slider__media" }, [
                        createVNode("img", {
                          src: testimonial.thumb,
                          class: "img-fluid",
                          alt: "author thumbnail"
                        }, null, 8, ["src"])
                      ]),
                      createVNode("div", { class: "testimonial-slider__author" }, [
                        createVNode("h6", { class: "name" }, toDisplayString(testimonial.name), 1),
                        createVNode("span", { class: "designation" }, toDisplayString(testimonial.designation), 1)
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
          (openBlock(true), createBlock(Fragment, null, renderList($data.data.testimonials, (testimonial) => {
            return openBlock(), createBlock(_component_swiper_slide, {
              key: testimonial.id
            }, {
              default: withCtx(() => [
                createVNode("div", { class: "testimonial-slider__single wow move-up" }, [
                  createVNode("h6", { class: "testimonial-subject" }, toDisplayString(testimonial.subject), 1),
                  createVNode("div", { class: "testimonial-slider__text" }, toDisplayString(testimonial.desc), 1),
                  createVNode("div", { class: "author-info" }, [
                    createVNode("div", { class: "testimonial-slider__media" }, [
                      createVNode("img", {
                        src: testimonial.thumb,
                        class: "img-fluid",
                        alt: "author thumbnail"
                      }, null, 8, ["src"])
                    ]),
                    createVNode("div", { class: "testimonial-slider__author" }, [
                      createVNode("h6", { class: "name" }, toDisplayString(testimonial.name), 1),
                      createVNode("span", { class: "designation" }, toDisplayString(testimonial.designation), 1)
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
  _push(`</div></div><div class="swiper-pagination swiper-pagination-t0 section-space--mt_40 text-center"></div></div></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/TestimonialOne.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TestimonialOne = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    Header: __nuxt_component_0$3,
    HeroInfotechNo: __nuxt_component_1,
    BrandLogoCarousel: __nuxt_component_2,
    ServiceOne: __nuxt_component_3,
    InfoTechExperience,
    FunFact: __nuxt_component_4,
    CtaVideo: __nuxt_component_5,
    CaseStudiesSection,
    TestimonialOne,
    BlogStyleOne,
    CtaContact: __nuxt_component_6,
    Footer: __nuxt_component_3$2,
    OffCanvasMobileMenu: __nuxt_component_4$1
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Header = __nuxt_component_0$3;
  const _component_HeroInfotechNo = __nuxt_component_1;
  const _component_BrandLogoCarousel = __nuxt_component_2;
  const _component_ServiceOne = __nuxt_component_3;
  const _component_InfoTechExperience = resolveComponent("InfoTechExperience");
  const _component_FunFact = __nuxt_component_4;
  const _component_CtaVideo = __nuxt_component_5;
  const _component_CaseStudiesSection = resolveComponent("CaseStudiesSection");
  const _component_TestimonialOne = resolveComponent("TestimonialOne");
  const _component_BlogStyleOne = resolveComponent("BlogStyleOne");
  const _component_CtaContact = __nuxt_component_6;
  const _component_Footer = __nuxt_component_3$2;
  const _component_OffCanvasMobileMenu = __nuxt_component_4$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-container" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(ssrRenderComponent(_component_HeroInfotechNo, null, null, _parent));
  _push(ssrRenderComponent(_component_BrandLogoCarousel, null, null, _parent));
  _push(ssrRenderComponent(_component_ServiceOne, null, null, _parent));
  _push(ssrRenderComponent(_component_InfoTechExperience, null, null, _parent));
  _push(ssrRenderComponent(_component_FunFact, null, null, _parent));
  _push(ssrRenderComponent(_component_CtaVideo, null, null, _parent));
  _push(ssrRenderComponent(_component_CaseStudiesSection, null, null, _parent));
  _push(ssrRenderComponent(_component_TestimonialOne, null, null, _parent));
  _push(ssrRenderComponent(_component_BlogStyleOne, null, null, _parent));
  _push(ssrRenderComponent(_component_CtaContact, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(ssrRenderComponent(_component_OffCanvasMobileMenu, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-4676c1f1.mjs.map
