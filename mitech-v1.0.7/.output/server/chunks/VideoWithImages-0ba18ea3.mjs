import { p as publicAssetsURL } from './paths.mjs';
import { _ as __nuxt_component_1$1 } from './server.mjs';
import { b as __nuxt_component_1$2, c as _imports_1$1 } from './OffCanvasMobileMenu-4675e8aa.mjs';
import { H as HeaderTop } from './HeaderTop-a728fcac.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main$1 = {
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
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_1$1;
  const _component_Navigation = __nuxt_component_1$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "header-area" }, _attrs))}><div class="header-top-bar-info bg-gray d-none d-lg-block"><div class="container"><div class="row"><div class="col-md-12"><div class="top-bar-wrap"><div class="top-bar-left"><div class="top-bar-text"><a href="#" class="font-medium display-inline">Now Hiring:</a> Are you a driven and motivated 1st Line IT Support Engineer?</div></div><div class="top-bar-right"><ul class="top-bar-info"><li class="info-item"><a href="tel:01228899900" class="info-link"><i class="info-icon fa fa-phone"></i><span class="info-text"><strong>0122 8899900</strong></span></a></li><li class="info-item"><i class="info-icon fa fa-map-marker-alt"></i><span class="info-text">58 Howard Street #2 San Francisco</span></li></ul></div></div></div></div></div></div><div class="${ssrRenderClass([{ "is-sticky": $data.isSticky }, "header-bottom-wrap bg-white header-sticky"])}"><div class="container"><div class="row"><div class="col-lg-12"><div class="header position-relative"><div class="header__logo">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_1$1)} class="img-fluid" alt="logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_1$1,
            class: "img-fluid",
            alt: "logo"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="header-right"><div class="header__navigation menu-style-three d-none d-xl-block"><nav class="navigation-menu">`);
  _push(ssrRenderComponent(_component_Navigation, null, null, _parent));
  _push(`</nav></div><div class="header-search-form-two"><div class="search-icon" id="search-overlay-trigger"><a href="javascript:void(0)"><i class="fa fa-search"></i></a></div></div><div class="mobile-navigation-icon d-block d-xl-none" id="mobile-menu-trigger"><i></i></div></div></div></div></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeaderProcessing.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_0 = "" + publicAssetsURL("images/banners/home-processing-video-intro-slider-slide-01-image-02.jpg");
const _imports_1 = "" + publicAssetsURL("images/banners/home-processing-video-intro-slider-slide-01-image-03.jpg");
const _imports_2 = "" + publicAssetsURL("images/banners/home-processing-video-intro-slider-slide-01-image-01.jpg");
const _imports_3 = "" + publicAssetsURL("images/banners/home-processing-video-intro-slider-slide-01-image-04.jpg");
const _imports_4 = "" + publicAssetsURL("images/banners/home-processing-video-intro-slider-slide-01-image-05.jpg");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "rv-video-section" }, _attrs))}><div class="ht-banner-01"><img class="img-fluid border-radus-5 animation_images one wow fadeInDown"${ssrRenderAttr("src", _imports_0)} alt="image"></div><div class="ht-banner-02"><img class="img-fluid border-radus-5 animation_images two wow fadeInDown"${ssrRenderAttr("src", _imports_1)} alt="image"></div><div class="main-video-box video-popup"><a href="https://www.youtube.com/watch?v=eS9Qm4AOOBY" target="_blank" class="video-link mt-30"><div class="single-popup-wrap"><img class="img-fluid border-radus-5"${ssrRenderAttr("src", _imports_2)} alt=""><div class="ht-popup-video video-button"><div class="video-mark"><div class="wave-pulse wave-pulse-1"></div><div class="wave-pulse wave-pulse-2"></div></div><div class="video-button__two"><div class="video-play"><span class="video-play-icon"></span></div></div></div></div></a></div><div class="ht-banner-03"><img class="img-fluid border-radus-5 animation_images three wow fadeInDown"${ssrRenderAttr("src", _imports_3)} alt="image"></div><div class="ht-banner-04"><img class="img-fluid border-radus-5 animation_images four wow fadeInDown"${ssrRenderAttr("src", _imports_4)} alt="image"></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/VideoWithImages.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as _, __nuxt_component_1 as a };
//# sourceMappingURL=VideoWithImages-0ba18ea3.mjs.map
