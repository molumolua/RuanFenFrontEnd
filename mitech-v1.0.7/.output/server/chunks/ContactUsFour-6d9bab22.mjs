import { ssrRenderAttrs } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="contact-us-section-wrappaer section-space--pt_100 section-space--pb_70"><div class="container"><div class="row align-items-center"><div class="col-lg-6 col-lg-6"><div class="conact-us-wrap-one mb-30"><h3 class="heading"> To make requests for <br>further information, <br><span class="text-color-primary">contact us</span> via our social channels. </h3><div class="sub-heading"> We just need a couple of hours! <br> No more than 2 working days since receiving your issue ticket. </div></div></div><div class="col-lg-6 col-lg-6"><div class="contact-form-wrap"><form id="contact-form"><div class="contact-form"><div class="contact-input"><div class="contact-inner"><input name="con_name" type="text" placeholder="Name *"></div><div class="contact-inner"><input name="con_email" type="email" placeholder="Email *"></div></div><div class="contact-inner"><input name="con_subject" type="text" placeholder="Subject *"></div><div class="contact-inner contact-message"><textarea name="con_message" placeholder="Please describe what you need."></textarea></div><div class="submit-btn mt-20"><button class="ht-btn ht-btn-md" type="submit">Send message</button></div></div></form></div></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/ContactUsFour.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ContactUsFour = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { ContactUsFour as C };
//# sourceMappingURL=ContactUsFour-6d9bab22.mjs.map
