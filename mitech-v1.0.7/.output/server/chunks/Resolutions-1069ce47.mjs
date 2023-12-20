import { p as publicAssetsURL } from './paths.mjs';
import { _ as __nuxt_component_1$1 } from './server.mjs';
import { b as __nuxt_component_1$2, _ as __nuxt_component_3$1, a as __nuxt_component_4$1, c as _imports_1 } from './OffCanvasMobileMenu-4675e8aa.mjs';
import { useSSRContext, mergeProps, withCtx, createTextVNode, createVNode, resolveComponent } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { d as data$1 } from './hero-2aa9cd53.mjs';
import { _ as __nuxt_component_4 } from './FunFactThree-568dbb50.mjs';
import { _ as __nuxt_component_3 } from './CtaContactTwo-c876b135.mjs';
import { _ as __nuxt_component_2 } from './CtaThree-ae57b218.mjs';
import { _ as __nuxt_component_2$1 } from './BrandLogoCarousel-3686721b.mjs';
import { _ as __nuxt_component_6 } from './SearchOverlay-4dc97e85.mjs';
import { _ as __nuxt_component_0$1 } from './FeatureItemStyleThree-46a7c351.mjs';
import { d as data } from './service-6308e97d.mjs';
import { S as ServiceStyleFive, F as FeatureGalleryFour } from './FeatureGalleryFour-f2186ffd.mjs';
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
import './funfact-d55c6eae.mjs';
import './cta-0c725fc4.mjs';
import 'swiper/vue';
import 'swiper/core';
import './SectionTitle-b03cc0d0.mjs';
import './testimonial-a07af300.mjs';

const _imports_0 = "" + publicAssetsURL("images/logo/light-logo.png");
const _sfc_main$3 = {
  components: {
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
    },
    toggleClass(addRemoveClass, className) {
      const el = document.querySelector("#search-overlay");
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
  const _component_Navigation = __nuxt_component_1$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "header-area header-area--absolute" }, _attrs))}><div class="header-top-bar-info border-bottom d-none d-lg-block"><div class="container"><div class="row"><div class="col-md-12"><div class="top-bar-wrap"><div class="top-bar-left"><div class="top-bar-text text-white">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/",
    class: "font-medium display-inline"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Now Hiring:`);
      } else {
        return [
          createTextVNode("Now Hiring:")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` Are you a driven and motivated 1st Line IT Support Engineer? </div></div><div class="top-bar-right"><ul class="top-bar-info"><li class="info-item"><a href="tel:01228899900" class="info-link text-white"><i class="info-icon fa fa-phone"></i><span class="info-text"><strong>0122 8899900</strong></span></a></li><li class="info-item text-white"><i class="info-icon fa fa-map-marker-alt"></i><span class="info-text">58 Howard Street #2 San Francisco</span></li></ul></div></div></div></div></div></div><div class="${ssrRenderClass([{ "is-sticky": $data.isSticky }, "header-bottom-wrap"])}"><div class="container"><div class="row"><div class="col-lg-12"><div class="header position-relative"><div class="header__logo">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/resolutions" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)} class="img-fluid light-logo" alt="Brand Logo"${_scopeId}><img${ssrRenderAttr("src", _imports_1)} class="img-fluid dark-logo" alt="Brand Logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0,
            class: "img-fluid light-logo",
            alt: "Brand Logo"
          }),
          createVNode("img", {
            src: _imports_1,
            class: "img-fluid dark-logo",
            alt: "Brand Logo"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="header-right"><div class="header__navigation menu-style-four d-none d-xl-block"><nav class="navigation-menu">`);
  _push(ssrRenderComponent(_component_Navigation, null, null, _parent));
  _push(`</nav></div><div class="header-search-form-two white-icon"><div class="search-icon" id="search-overlay-trigger"><a href="javascript:void(0)"><i class="fa fa-search"></i></a></div></div><div class="mobile-navigation-icon white-md-icon d-block d-xl-none" id="mobile-menu-trigger"><i></i></div></div></div></div></div></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeaderResolution.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {
  data() {
    return {
      data: data$1
    };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "resolutions-hero-space position-relative bg-cover",
    style: { backgroundImage: `url(${$data.data.heroResolution.bgImg})` }
  }, _attrs))}><div class="container"><div class="row"><div class="col-lg-12 col-md-12 ms-auto me-auto"><div class="service-hero-wrap wow move-up"><div class="service-hero-text text-center"><h3 class="text-white">${ssrInterpolate($data.data.heroResolution.subTitle)}</h3><h1 class="font-weight--reguler text-white mb-30">${ssrInterpolate($data.data.heroResolution.title)}</h1><p class="text-white">${ssrInterpolate($data.data.heroResolution.desc)}</p><div class="hero-button-group section-space--mt_50">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/contact",
    class: "ht-btn ht-btn-md"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Free consultation`);
      } else {
        return [
          createTextVNode("Free consultation")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<a href="https://www.youtube.com/watch?v=eS9Qm4AOOBY" target="_blank" class="ht-btn ht-btn-md btn--white"><span class="btn-icon mr-2"><i class="fa fa-play"></i></span> How we work </a></div></div></div></div></div></div><div class="vc_row-separator center_curve_alt bottom"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" preserveAspectRatio="none" viewBox="0 0 100 100"><path d="M 0 0 L0 100 L100 100 L100 0 Q 50 200 0 0"></path></svg></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroResolution.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  components: {
    FeatureItemStyleThree: __nuxt_component_0$1
  },
  data() {
    return {
      data: data
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FeatureItemStyleThree = __nuxt_component_0$1;
  const _component_nuxt_link = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "feature-images-wrapper bg-gray" }, _attrs))}><div class="container"><div class="row"><div class="col-12"><div class="feature-images__five resolutions-hero-bottom"><div class="row"><!--[-->`);
  ssrRenderList($data.data.services.slice(29, 32), (service) => {
    _push(`<div class="col-lg-4 col-md-6 wow move-up">`);
    _push(ssrRenderComponent(_component_FeatureItemStyleThree, { service }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div><div class="section-under-heading text-center section-space--mt_80"> Challenges are just opportunities in disguise. `);
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
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/FeatureGalleryTwo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const FeatureGalleryTwo = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    HeaderResolution: __nuxt_component_0,
    HeroResolution: __nuxt_component_1,
    FeatureGalleryTwo,
    FunFactThree: __nuxt_component_4,
    ServiceStyleFive,
    CtaContactTwo: __nuxt_component_3,
    TestimonialTwo,
    FeatureGalleryFour,
    CtaThree: __nuxt_component_2,
    BrandLogoCarousel: __nuxt_component_2$1,
    Footer: __nuxt_component_3$1,
    OffCanvasMobileMenu: __nuxt_component_4$1,
    SearchOverlay: __nuxt_component_6
  },
  head() {
    return {
      title: "Resolutions"
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HeaderResolution = __nuxt_component_0;
  const _component_HeroResolution = __nuxt_component_1;
  const _component_FeatureGalleryTwo = resolveComponent("FeatureGalleryTwo");
  const _component_FunFactThree = __nuxt_component_4;
  const _component_ServiceStyleFive = resolveComponent("ServiceStyleFive");
  const _component_CtaContactTwo = __nuxt_component_3;
  const _component_TestimonialTwo = resolveComponent("TestimonialTwo");
  const _component_FeatureGalleryFour = resolveComponent("FeatureGalleryFour");
  const _component_CtaThree = __nuxt_component_2;
  const _component_BrandLogoCarousel = __nuxt_component_2$1;
  const _component_Footer = __nuxt_component_3$1;
  const _component_OffCanvasMobileMenu = __nuxt_component_4$1;
  const _component_SearchOverlay = __nuxt_component_6;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-container" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_HeaderResolution, null, null, _parent));
  _push(ssrRenderComponent(_component_HeroResolution, null, null, _parent));
  _push(ssrRenderComponent(_component_FeatureGalleryTwo, null, null, _parent));
  _push(ssrRenderComponent(_component_FunFactThree, { class: "bg-gray" }, null, _parent));
  _push(ssrRenderComponent(_component_ServiceStyleFive, null, null, _parent));
  _push(ssrRenderComponent(_component_CtaContactTwo, null, null, _parent));
  _push(ssrRenderComponent(_component_TestimonialTwo, null, null, _parent));
  _push(ssrRenderComponent(_component_FeatureGalleryFour, null, null, _parent));
  _push(ssrRenderComponent(_component_CtaThree, null, null, _parent));
  _push(ssrRenderComponent(_component_BrandLogoCarousel, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(ssrRenderComponent(_component_OffCanvasMobileMenu, null, null, _parent));
  _push(ssrRenderComponent(_component_SearchOverlay, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Resolutions.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Resolutions = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Resolutions as default };
//# sourceMappingURL=Resolutions-1069ce47.mjs.map
