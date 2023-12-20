import { _ as __nuxt_component_1$1 } from './server.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_link = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "contact-us-section-wrappaer processing-contact-us-bg section-space--ptb_120",
    style: { backgroundImage: `url('/images/bg/mitech-processing-contact-bg.png')` }
  }, _attrs))}><div class="container"><div class="row align-items-center"><div class="col-lg-6 col-lg-6"><div class="conact-us-wrap-one"><h3 class="heading text-white">Obtaining further information by make a contact with our experienced IT staffs. </h3><div class="sub-heading text-white">We\u2019re available for 8 hours a day!<br>Contact to require a detailed analysis and assessment of your plan. </div></div></div><div class="col-lg-6 col-lg-6"><div class="contact-info-two text-center"><div class="icon"><span class="fa fa-phone"></span></div><h6 class="heading font-weight--reguler">Reach out now!</h6><h2 class="call-us"><a href="tel:190068668">1900 68668</a></h2><div class="contact-us-button mt-20">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/contact",
    class: "btn btn--secondary"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Contact us `);
      } else {
        return [
          createTextVNode(" Contact us ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CtaContactTwo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_3 as _ };
//# sourceMappingURL=CtaContactTwo-c876b135.mjs.map
