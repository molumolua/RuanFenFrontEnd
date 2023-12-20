import { _ as __nuxt_component_1$1 } from './server.mjs';
import { b as __nuxt_component_1$2, c as _imports_1 } from './OffCanvasMobileMenu-4675e8aa.mjs';
import { H as HeaderTop } from './HeaderTop-a728fcac.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main = {
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
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_1$1;
  const _component_Navigation = __nuxt_component_1$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "header-area header-area--default" }, _attrs))}><div class="${ssrRenderClass([{ "is-sticky": $data.isSticky }, "header-bottom-wrap"])}"><div class="container-fluid"><div class="row"><div class="col-lg-12"><div class="header default-menu-style position-relative"><div class="header__logo">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_1)} class="img-fluid" alt="error!"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_1,
            class: "img-fluid",
            alt: "error!"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="header-midle-box"><div class="header-bottom-wrap d-md-block d-none"><div class="header-bottom-inner"><div class="header-bottom-left-wrap"><div class="header__navigation d-none d-xl-block"><nav class="navigation-menu primary--menu">`);
  _push(ssrRenderComponent(_component_Navigation, null, null, _parent));
  _push(`</nav></div></div></div></div></div></div></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=Header-a5549ad8.mjs.map
