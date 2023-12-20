import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "accordionExample" }, _attrs))}><div class="card"><h5 class="card-header mb-0 font-weight--bold" id="headingOne"><button class="btn faq-title btn-block btn-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> How can we help your business? <span><i class="far fa-caret-square-down"></i><i class="far fa-caret-square-right"></i></span></button></h5><div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample"><div class="card-body"> Through the collaboration with customers in discussing needs and demand, we&#39;re able to attain mutual understanding, gain customer trust to offer appropriate advice, and bring about suggestions on suitable technology to transform your business. </div></div></div><div class="card"><h5 class="card-header mb-0 font-weight--bold" id="headingTwo"><button class="btn faq-title btn-block btn-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> How working process is simplified? <span><i class="far fa-caret-square-down"></i><i class="far fa-caret-square-right"></i></span></button></h5><div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample"><div class="card-body"> Mitech takes into consideration every little detail to make sure the system run smoothly and responsively. Mitech employs a new technique called Minified Technology for securing customers&#39; database &amp; building up highly confidential firewalls. </div></div></div><div class="card"><h5 class="card-header mb-0 font-weight--bold" id="headingThree"><button class="btn faq-title btn-block btn-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> How can we help your business? <span><i class="far fa-caret-square-down"></i><i class="far fa-caret-square-right"></i></span></button></h5><div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample"><div class="card-body"> Through the collaboration with customers in discussing needs and demand, we&#39;re able to attain mutual understanding, gain customer trust to offer appropriate advice, and bring about suggestions on suitable technology to transform your business. </div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AccordionTwo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=AccordionTwo-57407dea.mjs.map
