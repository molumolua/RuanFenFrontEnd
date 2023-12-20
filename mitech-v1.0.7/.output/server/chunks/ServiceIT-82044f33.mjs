import { _ as __nuxt_component_0 } from './ServiceItem-17c8f445.mjs';
import { _ as __nuxt_component_1$1 } from './server.mjs';
import { d as data } from './service-6308e97d.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main = {
  components: {
    ServiceItem: __nuxt_component_0
  },
  data() {
    return {
      data
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ServiceItem = __nuxt_component_0;
  const _component_nuxt_link = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "feature-images-wrapper section-space--ptb_100" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-12"><div class="section-title-wrap text-center"><h3 class="heading">${$data.data.serviceOne.sectionTitle}</h3></div></div></div><div class="row"><div class="col-12"><div class="feature-images__one"><div class="row"><!--[-->`);
  ssrRenderList($data.data.services.slice(0, 6), (service) => {
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ServiceIT.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_2 as _ };
//# sourceMappingURL=ServiceIT-82044f33.mjs.map
