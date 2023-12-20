import { _ as __nuxt_component_1$1 } from './server.mjs';
import { d as data } from './cta-0c725fc4.mjs';
import { mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "cta-image-area_one section-space--ptb_80 cta-bg-image_two",
    style: { backgroundImage: `url('/images/patterns/mitech-home-appointment-call-to-action-bg-image.png')` }
  }, _attrs))}><div class="container"><div class="row align-items-center"><div class="col-xl-8 col-lg-7"><div class="cta-content md-text-center"><h3 class="heading">${$data.data.ctaOne.title}</h3></div></div><div class="col-xl-4 col-lg-5"><div class="cta-button-group--two text-center">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/contact",
    class: "btn btn--white btn-one"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="btn-icon mr-2"${_scopeId}><i class="far fa-comment-alt"${_scopeId}></i></span> Let&#39;s talk `);
      } else {
        return [
          createVNode("span", { class: "btn-icon mr-2" }, [
            createVNode("i", { class: "far fa-comment-alt" })
          ]),
          createTextVNode(" Let's talk ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/about",
    class: "btn btn--secondary btn-two"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="btn-icon mr-2"${_scopeId}><i class="fas fa-info-circle"${_scopeId}></i></span> Get info `);
      } else {
        return [
          createVNode("span", { class: "btn-icon mr-2" }, [
            createVNode("i", { class: "fas fa-info-circle" })
          ]),
          createTextVNode(" Get info ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CtaOne.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_3 as _ };
//# sourceMappingURL=CtaOne-3ad1d675.mjs.map
