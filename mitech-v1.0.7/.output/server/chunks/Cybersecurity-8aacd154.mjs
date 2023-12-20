import { p as publicAssetsURL } from './paths.mjs';
import { _ as __nuxt_component_1$1 } from './server.mjs';
import { b as __nuxt_component_1$2, _ as __nuxt_component_3$1, a as __nuxt_component_4$1, c as _imports_1$3 } from './OffCanvasMobileMenu-4675e8aa.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Autoplay } from 'swiper/core';
import { useSSRContext, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { _ as _imports_0$2 } from './mitech-slider-cybersecurity-global-image-15c34987.mjs';
import { _ as __nuxt_component_3 } from './FunFactTwo-5d9a5a5a.mjs';
import { S as ServiceStyleTwo } from './ServiceStyleTwo-77310fd3.mjs';
import { C as CaseStudiesSectionTwo, P as PricingOne } from './PricingOne-a01fc61a.mjs';
import { B as BlogStyleOne } from './BlogStyleOne-3889171e.mjs';
import { C as ContactUsFour } from './ContactUsFour-6d9bab22.mjs';
import { C as ContactUsThree } from './ContactUsThree-09024383.mjs';
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
import './funfact-d55c6eae.mjs';
import './SectionTitle-b03cc0d0.mjs';
import './service-6308e97d.mjs';
import './caseStidies-14b56fd1.mjs';
import './blog-af81b322.mjs';

SwiperCore.use([Autoplay]);
const _sfc_main$3 = {
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
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_1$1;
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  const _component_Navigation = __nuxt_component_1$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "header-area" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-12"><div class="header position-relative"><div class="header__logo top-logo">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_1$3)} class="img-fluid" alt="Brand Logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_1$3,
            class: "img-fluid",
            alt: "Brand Logo"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="header-right flexible-image-slider-wrap"><div class="header-right-inner" id="hidden-icon-wrapper"><div class="header-search-form d-md-none d-block"><form class="search-form-top"><input class="search-field" type="text" placeholder="Search\u2026"><button class="search-submit"><i class="search-btn-icon fa fa-search"></i></button></form></div><div class="header-top-info-slider-werap top-info-slider__container"><div class="header-top-info-inner">`);
  _push(ssrRenderComponent(_component_swiper, {
    "space-between": 30,
    speed: 1e3,
    loop: false,
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
  _push(`</div></div><div class="header-social-networks style-icons"><div class="inner"><a class="social-link hint--black hint--bottom-left" aria-label="Twitter" href="https://twitter.com" data-hover="Twitter" target="_blank"><i class="social-icon fab fa-twitter"></i></a><a class="social-link hint--black hint--bottom-left" aria-label="Facebook" href="https://facebook.com" data-hover="Facebook" target="_blank"><i class="social-icon fab fa-facebook-f"></i></a><a class="social-link hint--black hint--bottom-left" aria-label="Instagram" href="https://instagram.com" data-hover="Instagram" target="_blank"><i class="social-icon fab fa-instagram"></i></a><a class="social-link hint--black hint--bottom-left" aria-label="Linkedin" href="https://linkedin.com" data-hover="Linkedin" target="_blank"><i class="social-icon fab fa-linkedin"></i></a></div></div></div><div class="mobile-navigation-icon d-block d-xl-none" id="mobile-menu-trigger"><i></i></div></div></div></div></div></div><div class="${ssrRenderClass([{ "is-sticky": $data.isSticky }, "header-bottom-wrap border-top d-md-block d-none"])}"><div class="container"><div class="row"><div class="col-lg-12"><div class="header-bottom-inner"><div class="header-bottom-left-wrap"><div class="header__navigation d-none d-xl-block"><nav class="navigation-menu">`);
  _push(ssrRenderComponent(_component_Navigation, null, null, _parent));
  _push(`</nav></div></div><div class="header-search-form"><form class="search-form-top style-02"><input class="search-field" type="text" placeholder="Search\u2026"><button class="search-submit"><i class="search-btn-icon fa fa-search"></i></button></form></div></div></div></div></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeaderCybersecurity.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _imports_1$2 = "" + publicAssetsURL("images/hero/slider-cybersecurity-slide-01-image-01.png");
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_link = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "cybersecurity-hero processing-hero-bg__color" }, _attrs))}><div class="container-fluid"><div class="row align-items-center"><div class="col-lg-6 col-md-7"><div class="cybersecurity-hero-text wow move-up"><h6>figure plans out</h6><h3 class="font-weight--reguler mb-30">Get insights into the <span class="text-color-primary">mechanism</span> &amp; <span class="text-color-primary">prospects</span> of cyber security technology</h3><div class="hero-button mt-30">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/about",
    class: "ht-btn ht-btn-md"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Dig deeper now`);
      } else {
        return [
          createTextVNode("Dig deeper now")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div class="col-lg-6 col-md-5"><div class="cybersecurity-hero-images-wrap wow move-up"><div class="cybersecurity-hero-images section-space--mt_80"><div class="inner-img-one"><img class="img-fluid worldRotate"${ssrRenderAttr("src", _imports_0$2)} alt="image"></div><div class="inner-img-two"><img class="img-fluid ml-xl-5"${ssrRenderAttr("src", _imports_1$2)} alt="image"></div></div></div></div></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroCybersecurity.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _imports_0$1 = "" + publicAssetsURL("images/other/mitech-slider-client-logos-logo-02.png");
const _imports_1$1 = "" + publicAssetsURL("images/other/mitech-slider-client-logos-logo-03.png");
const _imports_2$1 = "" + publicAssetsURL("images/other/mitech-slider-client-logos-logo-04.png");
const _imports_3 = "" + publicAssetsURL("images/other/mitech-slider-client-logos-logo-05.png");
const _imports_4 = "" + publicAssetsURL("images/other/mitech-slider-client-logos-logo-01.png");
const _imports_5 = "" + publicAssetsURL("images/other/mitech-slider-client-logos-logo-06.png");
const _imports_6 = "" + publicAssetsURL("images/other/mitech-slider-client-logos-logo-07.png");
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "rev_redraw-wrapper" }, _attrs))}><div class="rev_redraw-inner-box bg-gray-2 section-space--mt_40 section-space--mb_40 rev_redraw-space"><div class="container"><div class="row"><div class="col-lg-12 position-relative"><div class="redraw-content text-center"><h3 class="font-weight--reguler">Qualified methods <span class="text-color-primary">at its best</span></h3><p class="redwaw-dec">How IT services change people&#39;s life for the better </p><div class="bedraw-button"><button class="ht-btn ht-btn-md"> Download free proposal sample <i class="fas fa-arrow-right ms-1 ml-2"></i></button></div></div><div class="redraw-images"><img class="img-fluid redrow-1"${ssrRenderAttr("src", _imports_0$1)} alt="image"><img class="img-fluid redrow-2"${ssrRenderAttr("src", _imports_1$1)} alt="image"><img class="img-fluid redrow-3"${ssrRenderAttr("src", _imports_2$1)} alt="image"><img class="img-fluid redrow-4"${ssrRenderAttr("src", _imports_3)} alt="image"><img class="img-fluid redrow-5"${ssrRenderAttr("src", _imports_4)} alt="image"><img class="img-fluid redrow-6"${ssrRenderAttr("src", _imports_5)} alt="image"><img class="img-fluid redrow-7"${ssrRenderAttr("src", _imports_6)} alt="image"></div></div></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/QualifiedMethod.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_0 = "" + publicAssetsURL("images/box-image/blog-01-480x298.jpg");
const _imports_1 = "" + publicAssetsURL("images/box-image/mitech-home-infotechno-box-large-image-03-480x298.jpg");
const _imports_2 = "" + publicAssetsURL("images/box-image/mitech-home-infotechno-box-large-image-02-480x298.jpg");
const _sfc_main = {
  components: {
    HeaderCybersecurity: __nuxt_component_0,
    HeroCybersecurity: __nuxt_component_1,
    ServiceStyleTwo,
    FunFactTwo: __nuxt_component_3,
    CaseStudiesSectionTwo,
    PricingOne,
    BlogStyleOne,
    QualifiedMethod: __nuxt_component_4,
    ContactUsFour,
    ContactUsThree,
    Footer: __nuxt_component_3$1,
    OffCanvasMobileMenu: __nuxt_component_4$1
  },
  head() {
    return {
      title: "Mitech || Appointment"
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HeaderCybersecurity = __nuxt_component_0;
  const _component_HeroCybersecurity = __nuxt_component_1;
  const _component_nuxt_link = __nuxt_component_1$1;
  const _component_ServiceStyleTwo = resolveComponent("ServiceStyleTwo");
  const _component_FunFactTwo = __nuxt_component_3;
  const _component_CaseStudiesSectionTwo = resolveComponent("CaseStudiesSectionTwo");
  const _component_PricingOne = resolveComponent("PricingOne");
  const _component_BlogStyleOne = resolveComponent("BlogStyleOne");
  const _component_QualifiedMethod = __nuxt_component_4;
  const _component_ContactUsFour = resolveComponent("ContactUsFour");
  const _component_ContactUsThree = resolveComponent("ContactUsThree");
  const _component_Footer = __nuxt_component_3$1;
  const _component_OffCanvasMobileMenu = __nuxt_component_4$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-container" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_HeaderCybersecurity, null, null, _parent));
  _push(ssrRenderComponent(_component_HeroCybersecurity, null, null, _parent));
  _push(`<div class="feature-large-images-wrapper section-space--ptb_100"><div class="container"><div class="row"><div class="col-lg-12"><div class="section-title-wrap text-center section-space--mb_60"><h6 class="section-sub-title mb-20">Our company</h6><h3 class="heading"> We run all kinds of IT services that <br> vow your <span class="text-color-primary">success</span></h3></div></div></div><div class="cybersecurity-about-box section-space--pb_100"><div class="row"><div class="col-lg-4 offset-lg-1"><div class="modern-number-01"><h2 class="heading mr-5"><span class="mark-text">38</span>Years\u2019 Experience in IT </h2><h6 class="heading mt-30">Learn more about our success stories</h6></div></div><div class="col-lg-5 offset-lg-1"><div class="cybersecurity-about-text"><div class="text">Mitech specializes in technological and IT-related services such as product engineering, warranty management, building cloud, infrastructure, network, etc. We put a strong focus on the needs of your business to figure out solutions that best fits your demand and nail it.</div><div class="button-text">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/about",
    class: "btn-text"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Discover now <span class="button-icon ml-1"${_scopeId}><i class="fas fa-arrow-right ms-1"${_scopeId}></i></span>`);
      } else {
        return [
          createTextVNode(" Discover now "),
          createVNode("span", { class: "button-icon ml-1" }, [
            createVNode("i", { class: "fas fa-arrow-right ms-1" })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div><div class="row"><div class="col-12"><div class="row"><div class="col-lg-4 col-md-6 wow move-up">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "",
    class: "ht-large-box-images style-03"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="large-image-box"${_scopeId}><div class="box-image"${_scopeId}><div class="default-image"${_scopeId}><img class="img-fluid"${ssrRenderAttr("src", _imports_0)} alt="images"${_scopeId}></div></div><div class="content"${_scopeId}><h5 class="heading"${_scopeId}>Quality Assurance System</h5><div class="text"${_scopeId}>At Mitech, we have a holistic and integrated approach towards core modernization to experience technological evolution. </div><div class="box-images-arrow"${_scopeId}><span class="button-text"${_scopeId}>Discover now</span><i class="fas fa-arrow-right ms-1"${_scopeId}></i></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "large-image-box" }, [
            createVNode("div", { class: "box-image" }, [
              createVNode("div", { class: "default-image" }, [
                createVNode("img", {
                  class: "img-fluid",
                  src: _imports_0,
                  alt: "images"
                })
              ])
            ]),
            createVNode("div", { class: "content" }, [
              createVNode("h5", { class: "heading" }, "Quality Assurance System"),
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
  _push(`</div><div class="col-lg-4 col-md-6 wow move-up">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "",
    class: "ht-large-box-images style-03"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="large-image-box"${_scopeId}><div class="box-image"${_scopeId}><div class="default-image"${_scopeId}><img class="img-fluid"${ssrRenderAttr("src", _imports_1)} alt="images"${_scopeId}></div></div><div class="content"${_scopeId}><h5 class="heading"${_scopeId}>Highly Professional Staffs</h5><div class="text"${_scopeId}>Having obtained the official &amp; formal training in IT technology and technical fields, our staffs know best. </div><div class="box-images-arrow"${_scopeId}><span class="button-text"${_scopeId}>Discover now</span><i class="fas fa-arrow-right ms-1"${_scopeId}></i></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "large-image-box" }, [
            createVNode("div", { class: "box-image" }, [
              createVNode("div", { class: "default-image" }, [
                createVNode("img", {
                  class: "img-fluid",
                  src: _imports_1,
                  alt: "images"
                })
              ])
            ]),
            createVNode("div", { class: "content" }, [
              createVNode("h5", { class: "heading" }, "Highly Professional Staffs"),
              createVNode("div", { class: "text" }, "Having obtained the official & formal training in IT technology and technical fields, our staffs know best. "),
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
  _push(`</div><div class="col-lg-4 col-md-6 wow move-up">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "",
    class: "ht-large-box-images style-03"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="large-image-box"${_scopeId}><div class="box-image"${_scopeId}><div class="default-image"${_scopeId}><img class="img-fluid"${ssrRenderAttr("src", _imports_2)} alt="images"${_scopeId}></div></div><div class="content"${_scopeId}><h5 class="heading"${_scopeId}>Info Security Management</h5><div class="text"${_scopeId}>At Mitech, we have a holistic and integrated approach towards core modernization to experience technological evolution. </div><div class="box-images-arrow"${_scopeId}><span class="button-text"${_scopeId}>Discover now</span><i class="fas fa-arrow-right ms-1"${_scopeId}></i></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "large-image-box" }, [
            createVNode("div", { class: "box-image" }, [
              createVNode("div", { class: "default-image" }, [
                createVNode("img", {
                  class: "img-fluid",
                  src: _imports_2,
                  alt: "images"
                })
              ])
            ]),
            createVNode("div", { class: "content" }, [
              createVNode("h5", { class: "heading" }, "Info Security Management"),
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
  _push(`</div></div><div class="section-under-heading text-center section-space--mt_20"> Challenges are just opportunities in disguise `);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/contact" }, {
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
  _push(ssrRenderComponent(_component_ServiceStyleTwo, { class: "bg-gray" }, null, _parent));
  _push(ssrRenderComponent(_component_FunFactTwo, null, null, _parent));
  _push(ssrRenderComponent(_component_CaseStudiesSectionTwo, null, null, _parent));
  _push(ssrRenderComponent(_component_PricingOne, null, null, _parent));
  _push(ssrRenderComponent(_component_BlogStyleOne, null, null, _parent));
  _push(ssrRenderComponent(_component_QualifiedMethod, null, null, _parent));
  _push(ssrRenderComponent(_component_ContactUsFour, null, null, _parent));
  _push(ssrRenderComponent(_component_ContactUsThree, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(ssrRenderComponent(_component_OffCanvasMobileMenu, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Cybersecurity.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Cybersecurity = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Cybersecurity as default };
//# sourceMappingURL=Cybersecurity-8aacd154.mjs.map
