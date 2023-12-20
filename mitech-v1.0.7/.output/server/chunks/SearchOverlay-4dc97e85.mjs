import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main = {
  methods: {
    // offcanvas search close
    toggleClass(addRemoveClass, className) {
      const el = document.querySelector("#search-overlay");
      if (addRemoveClass === "addClass") {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "search-overlay",
    id: "search-overlay"
  }, _attrs))}><div class="search-overlay__header"><div class="container-fluid"><div class="row align-items-center"><div class="col-md-6 ms-auto col-4"><div class="search-content text-end"><span class="mobile-navigation-close-icon" id="search-close-trigger"></span></div></div></div></div></div><div class="search-overlay__inner"><div class="search-overlay__body"><div class="search-overlay__form"><form><input type="text" placeholder="Search"></form></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SearchOverlay.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_6 as _ };
//# sourceMappingURL=SearchOverlay-4dc97e85.mjs.map
