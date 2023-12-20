import { _ as __nuxt_component_1$1 } from './server.mjs';
import { d as data } from './service-6308e97d.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main = {
  data() {
    return {
      data
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "gradation-process-area section-space--ptb_100" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-12"><div class="gradation-title-wrapper section-space--mb_60"><div class="gradation-title-wrap"><h6 class="section-sub-title text-black mb-20">${ssrInterpolate($data.data.fourSteps.sectionSubTitle)}</h6><h4 class="heading">${$data.data.fourSteps.sectionTitle}</h4></div><div class="gradation-sub-heading"><h3 class="heading">${$data.data.fourSteps.heading}</h3></div></div></div></div><div class="row"><div class="col-lg-12"><div class="ht-gradation style-01"><!--[-->`);
  ssrRenderList($data.data.fourSteps.steps, (step) => {
    _push(`<div class="item animate wow fadeInRight" data-wow-delay="0.1s"><div class="line"></div><div class="circle-wrap"><div class="mask"><div class="wave-pulse wave-pulse-1"></div><div class="wave-pulse wave-pulse-2"></div><div class="wave-pulse wave-pulse-3"></div></div><h6 class="circle">${ssrInterpolate(step.count)}</h6></div><div class="content-wrap"><h6 class="heading">${ssrInterpolate(step.heading)}</h6><div class="text">${ssrInterpolate(step.text)}</div>`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: "/about",
      class: "gradation-btn"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<span class="button-text" data-text="Look more"${_scopeId}>Look more</span><span class="button-icon fas fa-arrow-right ms-1"${_scopeId}></span>`);
        } else {
          return [
            createVNode("span", {
              class: "button-text",
              "data-text": "Look more"
            }, "Look more"),
            createVNode("span", { class: "button-icon fas fa-arrow-right ms-1" })
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div></div>`);
  });
  _push(`<!--]--></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/FourSteps.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FourSteps = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { FourSteps as F };
//# sourceMappingURL=FourSteps-908f1e7b.mjs.map
