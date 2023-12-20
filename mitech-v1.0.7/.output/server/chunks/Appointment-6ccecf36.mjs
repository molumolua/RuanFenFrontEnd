import { p as publicAssetsURL } from './paths.mjs';
import { _ as __nuxt_component_1$1 } from './server.mjs';
import { b as __nuxt_component_1$2, _ as __nuxt_component_3$2, a as __nuxt_component_4, c as _imports_1$1 } from './OffCanvasMobileMenu-4675e8aa.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Autoplay } from 'swiper/core';
import { useSSRContext, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { A as AppointmentForm } from './AppointmentForm-bc318ac9.mjs';
import { d as data } from './hero-2aa9cd53.mjs';
import { _ as __nuxt_component_3 } from './CtaOne-3ad1d675.mjs';
import { _ as __nuxt_component_3$1 } from './FunFactTwo-5d9a5a5a.mjs';
import { S as ServiceStyleTwo } from './ServiceStyleTwo-77310fd3.mjs';
import { d as data$1 } from './service-6308e97d.mjs';
import { T as TeamOne } from './TeamOne-1fa9672e.mjs';
import { C as CaseStudiesSection } from './CaseStudiesSection-56a6bdb5.mjs';
import { T as TestimonialTwo } from './TestimonialTwo-77c88a65.mjs';
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
import './cta-0c725fc4.mjs';
import './funfact-d55c6eae.mjs';
import './SectionTitle-b03cc0d0.mjs';
import './team-803a5018.mjs';
import './CaseStudiesItem-a6cb7c42.mjs';
import './caseStidies-14b56fd1.mjs';
import './testimonial-a07af300.mjs';

SwiperCore.use([Autoplay]);
const _sfc_main$6 = {
  components: {
    Swiper,
    SwiperSlide,
    Navigation: __nuxt_component_1$2
  },
  data() {
    return {
      isSticky: false,
      swiperOptions: {
        breakpoints: {
          1200: {
            slidesPerView: 3
          },
          992: {
            slidesPerView: 2
          },
          575: {
            slidesPerView: 1
          }
        }
      }
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
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  const _component_Navigation = __nuxt_component_1$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "header-area header-sticky" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-12"><div class="header position-relative"><div class="header__logo top-logo">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_1$1)} class="img-fluid" alt="error!!"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_1$1,
            class: "img-fluid",
            alt: "error!!"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="header-right flexible-image-slider-wrap"><div class="header-right-inner" id="hidden-icon-wrapper"><div class="header-search-form d-md-none d-block"><form class="search-form-top"><input class="search-field" type="text" placeholder="Search\u2026"><button class="search-submit"><i class="search-btn-icon fa fa-search"></i></button></form></div><div class="header-top-info-slider-werap top-info-slider__container"><div class="header-top-info-inner default-color">`);
  _push(ssrRenderComponent(_component_swiper, {
    "space-between": 30,
    speed: 1e3,
    loop: false,
    autoplay: { "delay": 3e3 },
    breakpoints: $data.swiperOptions.breakpoints
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "info-item" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="info-icon"${_scopeId2}><span class="fa fa-phone"${_scopeId2}></span></div><div class="info-content"${_scopeId2}><h6 class="info-title"${_scopeId2}>0122 8899900</h6><div class="info-sub-title"${_scopeId2}>Info@example.com</div></div>`);
            } else {
              return [
                createVNode("div", { class: "info-icon" }, [
                  createVNode("span", { class: "fa fa-phone" })
                ]),
                createVNode("div", { class: "info-content" }, [
                  createVNode("h6", { class: "info-title" }, "0122 8899900"),
                  createVNode("div", { class: "info-sub-title" }, "Info@example.com")
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "info-item" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="info-icon"${_scopeId2}><span class="fa fa-map-marker-alt"${_scopeId2}></span></div><div class="info-content"${_scopeId2}><h6 class="info-title"${_scopeId2}>219 Amara Fort Apt. 394</h6><div class="info-sub-title"${_scopeId2}>New York, NY 941</div></div>`);
            } else {
              return [
                createVNode("div", { class: "info-icon" }, [
                  createVNode("span", { class: "fa fa-map-marker-alt" })
                ]),
                createVNode("div", { class: "info-content" }, [
                  createVNode("h6", { class: "info-title" }, "219 Amara Fort Apt. 394"),
                  createVNode("div", { class: "info-sub-title" }, "New York, NY 941")
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "info-item" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="info-icon"${_scopeId2}><span class="fa fa-clock"${_scopeId2}></span></div><div class="info-content"${_scopeId2}><h6 class="info-title"${_scopeId2}>8:00AM - 6:00PM</h6><div class="info-sub-title"${_scopeId2}>Monday to Saturday</div></div>`);
            } else {
              return [
                createVNode("div", { class: "info-icon" }, [
                  createVNode("span", { class: "fa fa-clock" })
                ]),
                createVNode("div", { class: "info-content" }, [
                  createVNode("h6", { class: "info-title" }, "8:00AM - 6:00PM"),
                  createVNode("div", { class: "info-sub-title" }, "Monday to Saturday")
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "info-item" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="info-icon"${_scopeId2}><span class="fa fa-comment-alt-lines"${_scopeId2}></span></div><div class="info-content"${_scopeId2}><h6 class="info-title"${_scopeId2}>Online 24/7</h6><div class="info-sub-title"${_scopeId2}>+122 123 4567</div></div>`);
            } else {
              return [
                createVNode("div", { class: "info-icon" }, [
                  createVNode("span", { class: "fa fa-comment-alt-lines" })
                ]),
                createVNode("div", { class: "info-content" }, [
                  createVNode("h6", { class: "info-title" }, "Online 24/7"),
                  createVNode("div", { class: "info-sub-title" }, "+122 123 4567")
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_swiper_slide, { class: "info-item" }, {
            default: withCtx(() => [
              createVNode("div", { class: "info-icon" }, [
                createVNode("span", { class: "fa fa-phone" })
              ]),
              createVNode("div", { class: "info-content" }, [
                createVNode("h6", { class: "info-title" }, "0122 8899900"),
                createVNode("div", { class: "info-sub-title" }, "Info@example.com")
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "info-item" }, {
            default: withCtx(() => [
              createVNode("div", { class: "info-icon" }, [
                createVNode("span", { class: "fa fa-map-marker-alt" })
              ]),
              createVNode("div", { class: "info-content" }, [
                createVNode("h6", { class: "info-title" }, "219 Amara Fort Apt. 394"),
                createVNode("div", { class: "info-sub-title" }, "New York, NY 941")
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "info-item" }, {
            default: withCtx(() => [
              createVNode("div", { class: "info-icon" }, [
                createVNode("span", { class: "fa fa-clock" })
              ]),
              createVNode("div", { class: "info-content" }, [
                createVNode("h6", { class: "info-title" }, "8:00AM - 6:00PM"),
                createVNode("div", { class: "info-sub-title" }, "Monday to Saturday")
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "info-item" }, {
            default: withCtx(() => [
              createVNode("div", { class: "info-icon" }, [
                createVNode("span", { class: "fa fa-comment-alt-lines" })
              ]),
              createVNode("div", { class: "info-content" }, [
                createVNode("h6", { class: "info-title" }, "Online 24/7"),
                createVNode("div", { class: "info-sub-title" }, "+122 123 4567")
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="header-social-networks style-icons"><div class="inner"><a class="social-link hint--black hint--bottom-left" aria-label="Twitter" href="https://twitter.com" data-hover="Twitter" target="_blank"><i class="social-icon fab fa-twitter"></i></a><a class="social-link hint--black hint--bottom-left" aria-label="Facebook" href="https://facebook.com" data-hover="Facebook" target="_blank"><i class="social-icon fab fa-facebook-f"></i></a><a class="social-link hint--black hint--bottom-left" aria-label="Instagram" href="https://instagram.com" data-hover="Instagram" target="_blank"><i class="social-icon fab fa-instagram"></i></a><a class="social-link hint--black hint--bottom-left" aria-label="Linkedin" href="https://linkedin.com" data-hover="Linkedin" target="_blank"><i class="social-icon fab fa-linkedin"></i></a></div></div></div><div class="mobile-navigation-icon d-block d-xl-none" id="mobile-menu-trigger"><i></i></div></div></div></div></div></div><div class="${ssrRenderClass([{ "is-sticky": $data.isSticky }, "header-bottom-wrap bg-theme-default d-lg-block d-none"])}"><div class="container"><div class="row"><div class="col-lg-12"><div class="header-bottom-inner"><div class="header-bottom-left-wrap"><div class="header__navigation d-none d-xl-block"><nav class="navigation-menu navigation-menu--text_white">`);
  _push(ssrRenderComponent(_component_Navigation, null, null, _parent));
  _push(`</nav></div></div><div class="header-search-form"><form class="search-form-top style-03"><input class="search-field" type="text" placeholder="Search\u2026"><button class="search-submit"><i class="search-btn-icon fa fa-search"></i></button></form></div></div></div></div></div></div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeaderAppointment.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$5 = {
  components: {
    AppointmentForm
  },
  data() {
    return {
      data
    };
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AppointmentForm = AppointmentForm;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "appointment-hero-wrapper bg-cover section-space--ptb_120",
    style: { backgroundImage: `url(${$data.data.heroAppointment.bgImg})` }
  }, _attrs))}><div class="container"><div class="row align-items-center"><div class="col-lg-6 col-md-6"><div class="appointment-hero-wrap wow move-up"><div class="appointment-hero-text"><h6 class="text-white">${ssrInterpolate($data.data.heroAppointment.subTitle)}</h6><h1 class="font-weight--reguler text-white mb-30">${$data.data.heroAppointment.title}</h1><div class="hero-button"><div class="video-popup infotech-video-box"><a href="https://www.youtube.com/watch?v=eS9Qm4AOOBY" target="_blank" class="single-popup-wrap video-link"><div class="video-content"><div class="ht-popup-video video-button"><div class="video-mark"><div class="wave-pulse wave-pulse-1"></div><div class="wave-pulse wave-pulse-2"></div></div><div class="video-button__two"><div class="video-play"><span class="video-play-icon"></span></div></div></div><div class="video-text">${ssrInterpolate($data.data.heroAppointment.videoText)}</div></div></a></div></div></div></div></div><div class="col-lg-5 me-auto me-auto col-md-6">`);
  _push(ssrRenderComponent(_component_AppointmentForm, null, null, _parent));
  _push(`</div></div></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroAppointment.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const _imports_0$1 = "" + publicAssetsURL("images/bg/home-processing-video-intro-slider-slide-01-image-01-570x350.jpg");
const _sfc_main$4 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "tab-history-image video-popup mt-30" }, _attrs))}><a href="https://www.youtube.com/watch?v=eS9Qm4AOOBY" target="_blank" class="video-link"><div class="single-popup-wrap"><img class="img-fluid"${ssrRenderAttr("src", _imports_0$1)} alt="image"><div class="ht-popup-video video-button"><div class="video-mark"><div class="wave-pulse wave-pulse-1"></div><div class="wave-pulse wave-pulse-2"></div></div><div class="video-button__two"><div class="video-play"><span class="video-play-icon"></span></div></div></div></div></a></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/VideoPupupOne.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = {
  props: ["service"]
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_1$1;
  _push(ssrRenderComponent(_component_nuxt_link, mergeProps({
    to: `/service/${$props.service.slug}`,
    class: "ht-large-box-images style-04"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="large-image-box"${_scopeId}><div class="box-image"${_scopeId}><div class="default-image"${_scopeId}><img class="img-fluid"${ssrRenderAttr("src", $props.service.image)} alt="image"${_scopeId}></div></div><div class="content"${_scopeId}><h5 class="heading"${_scopeId}>${ssrInterpolate($props.service.heading)}</h5><div class="text"${_scopeId}>At Mitech, we have a holistic and integrated approach towards core modernization to experience technological evolution. </div><div class="box-images-arrow"${_scopeId}><span class="button-text"${_scopeId}>Discover now</span><i class="fas fa-arrow-right ms-1"${_scopeId}></i></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "large-image-box" }, [
            createVNode("div", { class: "box-image" }, [
              createVNode("div", { class: "default-image" }, [
                createVNode("img", {
                  class: "img-fluid",
                  src: $props.service.image,
                  alt: "image"
                }, null, 8, ["src"])
              ])
            ]),
            createVNode("div", { class: "content" }, [
              createVNode("h5", { class: "heading" }, toDisplayString($props.service.heading), 1),
              createVNode("div", { class: "text" }, "At Mitech, we have a holistic and integrated approach towards core modernization to experience technological evolution. "),
              createVNode("div", { class: "box-images-arrow" }, [
                createVNode("span", { class: "button-text" }, "Discover now"),
                createVNode("i", { class: "fas fa-arrow-right ms-1" })
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ServiceItemStyleThree.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _imports_0 = "" + publicAssetsURL("images/brand/client-logo-01.png");
const _imports_1 = "" + publicAssetsURL("images/brand/client-logo-01-hover.png");
const _imports_2 = "" + publicAssetsURL("images/brand/client-logo-02.png");
const _imports_3 = "" + publicAssetsURL("images/brand/client-logo-02-hover.png");
const _imports_4 = "" + publicAssetsURL("images/brand/client-logo-03.png");
const _imports_5 = "" + publicAssetsURL("images/brand/client-logo-03-hover.png");
const _imports_6 = "" + publicAssetsURL("images/brand/client-logo-04.png");
const _imports_7 = "" + publicAssetsURL("images/brand/client-logo-04-hover.png");
const _imports_8 = "" + publicAssetsURL("images/brand/client-logo-05.png");
const _imports_9 = "" + publicAssetsURL("images/brand/client-logo-05-hover.png");
const _imports_10 = "" + publicAssetsURL("images/brand/client-logo-06.png");
const _imports_11 = "" + publicAssetsURL("images/brand/client-logo-06-hover.png");
const _imports_12 = "" + publicAssetsURL("images/brand/client-logo-07.png");
const _imports_13 = "" + publicAssetsURL("images/brand/client-logo-07-hover.png");
const _imports_14 = "" + publicAssetsURL("images/brand/client-logo-08.png");
const _imports_15 = "" + publicAssetsURL("images/brand/client-logo-08-hover.png");
const _imports_16 = "" + publicAssetsURL("images/award/mitech-company-award-01-161x110.jpg");
const _imports_17 = "" + publicAssetsURL("images/award/mitech-company-award-02-161x116.jpg");
const _imports_18 = "" + publicAssetsURL("images/award/mitech-company-award-03-161x112.jpg");
const _imports_19 = "" + publicAssetsURL("images/award/mitech-company-award-04-161x109.jpg");
const _sfc_main$2 = {
  components: {
    VideoPupupOne: __nuxt_component_0,
    ServiceItemStyleThree: __nuxt_component_2
  },
  data() {
    return {
      data: data$1,
      activeItem: "tab_mission"
    };
  },
  methods: {
    isActive(menuItem) {
      return this.activeItem === menuItem;
    },
    setActive(menuItem) {
      this.activeItem = menuItem;
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_VideoPupupOne = __nuxt_component_0;
  const _component_nuxt_link = __nuxt_component_1$1;
  const _component_ServiceItemStyleThree = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "tabs-wrapper bg-gray section-space--ptb_100" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-12"><div class="section-title-wrapper text-center section-space--mb_60 wow move-up"><h6 class="section-sub-title mb-20">discover our company</h6><h3 class="section-title">We\u2019ve been thriving in<span class="text-color-primary"> 38 years</span></h3></div></div></div><div class="row"><div class="col-lg-12 ht-tab-wrap"><div class="text-center"><ul class="nav justify-content-center ht-tab-menu ht-tab-menu_two" role="tablist"><li class="tab__item nav-item"><a href="#tab_mission" class="${ssrRenderClass([{ active: $options.isActive("tab_mission") }, "nav-link"])}">Our mission</a></li><li class="tab__item nav-item"><a href="#tab_services" class="${ssrRenderClass([{ active: $options.isActive("tab_services") }, "nav-link"])}">Our services</a></li><li class="tab__item nav-item"><a href="#tab_partners" class="${ssrRenderClass([{ active: $options.isActive("tab_partners") }, "nav-link"])}">Technology partners</a></li><li class="tab__item nav-item"><a href="#tab_awards" class="${ssrRenderClass([{ active: $options.isActive("tab_awards") }, "nav-link"])}">Our awards</a></li></ul></div><div class="tab-content ht-tab__content"><div class="${ssrRenderClass([{ "active show": $options.isActive("tab_mission") }, "tab-pane fade"])}" id="tab_mission"><div class="tab-history-wrap section-space--mt_40"><div class="row"><div class="col-lg-6">`);
  _push(ssrRenderComponent(_component_VideoPupupOne, null, null, _parent));
  _push(`</div><div class="col-lg-5 offset-lg-1"><div class="tab-content-inner mt-30"><div class="text mb-30">We\u2019re available for 8 hours a day! <br>Contact to require a detailed analysis and assessment of your plan. </div><ul class="check-list section-space--mb_40"><li class="list-item">IT Consultancy </li><li class="list-item">IT Design </li><li class="list-item">Desktop Computing </li><li class="list-item">Software Engineering </li></ul><div class="tab-button">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/",
    class: "btn-text"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="button-text"${_scopeId}>Let&#39;s get started <i class="fas fa-arrow-right ms-1"${_scopeId}></i></span>`);
      } else {
        return [
          createVNode("span", { class: "button-text" }, [
            createTextVNode("Let's get started "),
            createVNode("i", { class: "fas fa-arrow-right ms-1" })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div></div><div class="${ssrRenderClass([{ "active show": $options.isActive("tab_services") }, "tab-pane fade"])}" id="tab_services"><div class="tab-history-wrap section-space--mt_60"><div class="row"><!--[-->`);
  ssrRenderList($data.data.services.slice(14, 17), (service) => {
    _push(`<div class="col-lg-4 col-md-6">`);
    _push(ssrRenderComponent(_component_ServiceItemStyleThree, { service }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div></div><div class="${ssrRenderClass([{ "active show": $options.isActive("tab_partners") }, "tab-pane fade"])}" id="tab_partners"><div class="tab-history-wrap section-space--mt_60 brand-logo-slider__one"><div class="modern-grid--6"><div class="brand-logo brand-logo--slider">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="brand-logo__image"${_scopeId}><img${ssrRenderAttr("src", _imports_0)} class="img-fluid" alt="image"${_scopeId}></div><div class="brand-logo__image-hover"${_scopeId}><img${ssrRenderAttr("src", _imports_1)} class="img-fluid" alt="image"${_scopeId}></div>`);
      } else {
        return [
          createVNode("div", { class: "brand-logo__image" }, [
            createVNode("img", {
              src: _imports_0,
              class: "img-fluid",
              alt: "image"
            })
          ]),
          createVNode("div", { class: "brand-logo__image-hover" }, [
            createVNode("img", {
              src: _imports_1,
              class: "img-fluid",
              alt: "image"
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="brand-logo brand-logo--slider">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="brand-logo__image"${_scopeId}><img${ssrRenderAttr("src", _imports_2)} class="img-fluid" alt="image"${_scopeId}></div><div class="brand-logo__image-hover"${_scopeId}><img${ssrRenderAttr("src", _imports_3)} class="img-fluid" alt="image"${_scopeId}></div>`);
      } else {
        return [
          createVNode("div", { class: "brand-logo__image" }, [
            createVNode("img", {
              src: _imports_2,
              class: "img-fluid",
              alt: "image"
            })
          ]),
          createVNode("div", { class: "brand-logo__image-hover" }, [
            createVNode("img", {
              src: _imports_3,
              class: "img-fluid",
              alt: "image"
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="brand-logo brand-logo--slider">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="brand-logo__image"${_scopeId}><img${ssrRenderAttr("src", _imports_4)} class="img-fluid" alt="image"${_scopeId}></div><div class="brand-logo__image-hover"${_scopeId}><img${ssrRenderAttr("src", _imports_5)} class="img-fluid" alt="image"${_scopeId}></div>`);
      } else {
        return [
          createVNode("div", { class: "brand-logo__image" }, [
            createVNode("img", {
              src: _imports_4,
              class: "img-fluid",
              alt: "image"
            })
          ]),
          createVNode("div", { class: "brand-logo__image-hover" }, [
            createVNode("img", {
              src: _imports_5,
              class: "img-fluid",
              alt: "image"
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="brand-logo brand-logo--slider">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="brand-logo__image"${_scopeId}><img${ssrRenderAttr("src", _imports_6)} class="img-fluid" alt="image"${_scopeId}></div><div class="brand-logo__image-hover"${_scopeId}><img${ssrRenderAttr("src", _imports_7)} class="img-fluid" alt="image"${_scopeId}></div>`);
      } else {
        return [
          createVNode("div", { class: "brand-logo__image" }, [
            createVNode("img", {
              src: _imports_6,
              class: "img-fluid",
              alt: "image"
            })
          ]),
          createVNode("div", { class: "brand-logo__image-hover" }, [
            createVNode("img", {
              src: _imports_7,
              class: "img-fluid",
              alt: "image"
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="brand-logo brand-logo--slider">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="brand-logo__image"${_scopeId}><img${ssrRenderAttr("src", _imports_8)} class="img-fluid" alt=""${_scopeId}></div><div class="brand-logo__image-hover"${_scopeId}><img${ssrRenderAttr("src", _imports_9)} class="img-fluid" alt="image"${_scopeId}></div>`);
      } else {
        return [
          createVNode("div", { class: "brand-logo__image" }, [
            createVNode("img", {
              src: _imports_8,
              class: "img-fluid",
              alt: ""
            })
          ]),
          createVNode("div", { class: "brand-logo__image-hover" }, [
            createVNode("img", {
              src: _imports_9,
              class: "img-fluid",
              alt: "image"
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="brand-logo brand-logo--slider">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="brand-logo__image"${_scopeId}><img${ssrRenderAttr("src", _imports_10)} class="img-fluid" alt="image"${_scopeId}></div><div class="brand-logo__image-hover"${_scopeId}><img${ssrRenderAttr("src", _imports_11)} class="img-fluid" alt="image"${_scopeId}></div>`);
      } else {
        return [
          createVNode("div", { class: "brand-logo__image" }, [
            createVNode("img", {
              src: _imports_10,
              class: "img-fluid",
              alt: "image"
            })
          ]),
          createVNode("div", { class: "brand-logo__image-hover" }, [
            createVNode("img", {
              src: _imports_11,
              class: "img-fluid",
              alt: "image"
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="brand-logo brand-logo--slider">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="brand-logo__image"${_scopeId}><img${ssrRenderAttr("src", _imports_12)} class="img-fluid" alt="image"${_scopeId}></div><div class="brand-logo__image-hover"${_scopeId}><img${ssrRenderAttr("src", _imports_13)} class="img-fluid" alt="image"${_scopeId}></div>`);
      } else {
        return [
          createVNode("div", { class: "brand-logo__image" }, [
            createVNode("img", {
              src: _imports_12,
              class: "img-fluid",
              alt: "image"
            })
          ]),
          createVNode("div", { class: "brand-logo__image-hover" }, [
            createVNode("img", {
              src: _imports_13,
              class: "img-fluid",
              alt: "image"
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="brand-logo brand-logo--slider">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="brand-logo__image"${_scopeId}><img${ssrRenderAttr("src", _imports_14)} class="img-fluid" alt=""${_scopeId}></div><div class="brand-logo__image-hover"${_scopeId}><img${ssrRenderAttr("src", _imports_15)} class="img-fluid" alt="image"${_scopeId}></div>`);
      } else {
        return [
          createVNode("div", { class: "brand-logo__image" }, [
            createVNode("img", {
              src: _imports_14,
              class: "img-fluid",
              alt: ""
            })
          ]),
          createVNode("div", { class: "brand-logo__image-hover" }, [
            createVNode("img", {
              src: _imports_15,
              class: "img-fluid",
              alt: "image"
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div><div class="${ssrRenderClass([{ "active show": $options.isActive("tab_awards") }, "tab-pane fade"])}" id="tab_awards"><div class="tab-history-wrap section-space--mt_20"><div class="row"><div class="col-lg-6"><div class="ht-box-images style-08 move-up animate"><div class="image-box-wrap"><div class="box-image"><div class="image"><img${ssrRenderAttr("src", _imports_16)} alt="image"></div></div><div class="content"><h6 class="heading"> Top Training Companies 2016 </h6><div class="text">More than 40 years ago, our company\u2019s namesake, LineThemes, pioneered a revolutionary sales training program for businesses of every size.</div></div></div></div></div><div class="col-lg-6"><div class="ht-box-images style-08 move-up animate"><div class="image-box-wrap"><div class="box-image"><div class="image"><img${ssrRenderAttr("src", _imports_17)} alt="image"></div></div><div class="content"><h6 class="heading">CIO Big Data 100 </h6><div class="text">More than 40 years ago, our company\u2019s namesake, LineThemes, pioneered a revolutionary sales training program for businesses of every size.</div></div></div></div></div><div class="col-lg-6"><div class="ht-box-images style-08 move-up animate"><div class="image-box-wrap"><div class="box-image"><div class="image"><img${ssrRenderAttr("src", _imports_18)} alt="image"></div></div><div class="content"><h6 class="heading">Top 20 Sales Training Companies 2015 </h6><div class="text">More than 40 years ago, our company\u2019s namesake, LineThemes, pioneered a revolutionary sales training program for businesses of every size.</div></div></div></div></div><div class="col-lg-6"><div class="ht-box-images style-08 move-up animate"><div class="image-box-wrap"><div class="box-image"><div class="image"><img${ssrRenderAttr("src", _imports_19)} alt="image"></div></div><div class="content"><h6 class="heading">Pharma Tech Outlook </h6><div class="text">More than 40 years ago, our company\u2019s namesake, LineThemes, pioneered a revolutionary sales training program for businesses of every size.</div></div></div></div></div></div></div></div></div></div></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/TabSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const TabSection = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "contact-us-area appointment-contact-bg section-space--ptb_100",
    style: { backgroundImage: `url('/images/bg/home-appointment-contact-bg-image.png')` }
  }, _attrs))}><div class="container"><div class="row"><div class="col-lg-12"><div class="contact-title section-space--mb_50"><h3 class="mb-20">Need a hand?</h3><p class="sub-title">Reach out to the world\u2019s most reliable IT services.</p></div></div></div><div class="row"><div class="col-lg-6"><div class="contact-form-wrap"><form id="contact-form"><div class="contact-form__two"><div class="contact-input"><div class="contact-inner"><input name="con_name" type="text" placeholder="Name *"></div><div class="contact-inner"><input name="con_email" type="email" placeholder="Email *"></div></div><div class="contact-select"><div class="form-item contact-inner"><span class="inquiry"><select name="inquiry" class="select-item"><option value="Your inquiry about">Your inquiry about</option><option value="General Information Request">General Information Request</option><option value="Partner Relations">Partner Relations</option><option value="Careers">Careers</option><option value="Software Licencing">Software Licencing</option></select></span></div></div><div class="contact-inner contact-message"><textarea name="con_message" placeholder="Please describe what you need."></textarea></div><div class="comment-submit-btn"><button class="ht-btn ht-btn-md" type="submit">Get a free consultation</button><p class="form-messege"></p></div></div></form></div></div><div class="col-lg-5 ms-auto"><div class="contact-info-three text-left"><h6 class="heading font-weight--reguler">Reach out now!</h6><h3 class="call-us"><a href="tel:(+00)123567990">(+00) 123 567990</a></h3><div class="text">Start the collaboration with us while figuring out the best solution based on your needs.</div><div class="location-button mt-20"><button class="location-text-button"><span class="button-icon"></span><span class="button-text">View on Google map</span></button></div></div></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/ContactUs.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ContactUs = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    HeaderAppointment: __nuxt_component_0$1,
    HeroAppointment: __nuxt_component_1,
    ServiceStyleTwo,
    TabSection,
    TeamOne,
    CtaOne: __nuxt_component_3,
    CaseStudiesSection,
    TestimonialTwo,
    FunFactTwo: __nuxt_component_3$1,
    ContactUs,
    Footer: __nuxt_component_3$2,
    OffCanvasMobileMenu: __nuxt_component_4
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HeaderAppointment = __nuxt_component_0$1;
  const _component_HeroAppointment = __nuxt_component_1;
  const _component_ServiceStyleTwo = resolveComponent("ServiceStyleTwo");
  const _component_TabSection = resolveComponent("TabSection");
  const _component_TeamOne = resolveComponent("TeamOne");
  const _component_CtaOne = __nuxt_component_3;
  const _component_CaseStudiesSection = resolveComponent("CaseStudiesSection");
  const _component_TestimonialTwo = resolveComponent("TestimonialTwo");
  const _component_FunFactTwo = __nuxt_component_3$1;
  const _component_ContactUs = resolveComponent("ContactUs");
  const _component_Footer = __nuxt_component_3$2;
  const _component_OffCanvasMobileMenu = __nuxt_component_4;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-container" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_HeaderAppointment, null, null, _parent));
  _push(ssrRenderComponent(_component_HeroAppointment, null, null, _parent));
  _push(ssrRenderComponent(_component_ServiceStyleTwo, null, null, _parent));
  _push(ssrRenderComponent(_component_TabSection, null, null, _parent));
  _push(ssrRenderComponent(_component_TeamOne, null, null, _parent));
  _push(ssrRenderComponent(_component_CtaOne, null, null, _parent));
  _push(ssrRenderComponent(_component_CaseStudiesSection, null, null, _parent));
  _push(ssrRenderComponent(_component_TestimonialTwo, null, null, _parent));
  _push(ssrRenderComponent(_component_FunFactTwo, null, null, _parent));
  _push(ssrRenderComponent(_component_ContactUs, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(ssrRenderComponent(_component_OffCanvasMobileMenu, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Appointment.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Appointment = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Appointment as default };
//# sourceMappingURL=Appointment-6ccecf36.mjs.map
