import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "business-solution-form-wrap me-auto ms-auto" }, _attrs))}><div class="contact-title text-center section-space--mb_40"><h5 class="mb-10">Book appointment</h5><p class="text">It&#39;s out pleasure to have a chance to cooperate.</p></div><form method="post"><div class="contact-form__two"><div class="contact-inner"><input name="name" type="text" placeholder="Name *"></div><div class="contact-inner"><input name="email" type="email" placeholder="Email *"></div><div class="contact-select"><div class="form-item contact-inner"><span class="inquiry"><select name="inquiry" class="select-item"><option value="Your inquiry about">Your inquiry about</option><option value="General Information Request">General Information Request</option><option value="Partner Relations">Partner Relations</option><option value="Careers">Careers</option><option value="Software Licencing">Software Licencing</option></select></span></div></div><div class="comment-submit-btn text-center"><button class="ht-btn ht-btn-md" type="submit">Submit</button></div></div></form></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppointmentForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AppointmentForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { AppointmentForm as A };
//# sourceMappingURL=AppointmentForm-bc318ac9.mjs.map
