import { _ as __nuxt_component_1$1 } from './server.mjs';
import { mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
import 'defu';
import './config.mjs';
import 'destr';
import 'scule';

const _sfc_main = {
  props: ["project"]
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_1$1;
  _push(ssrRenderComponent(_component_nuxt_link, mergeProps({
    to: `/case-studies/${$props.project.id}`,
    class: "projects-wrap style-01 wow move-up"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="projects-image-box"${_scopeId}><div class="projects-image"${_scopeId}><img class="img-fluid"${ssrRenderAttr("src", $props.project.image)} alt="project image"${_scopeId}></div><div class="content"${_scopeId}><h6 class="heading"${_scopeId}>${ssrInterpolate($props.project.heading)}</h6><div class="post-categories"${_scopeId}>${ssrInterpolate($props.project.category)}</div><div class="text"${_scopeId}>${ssrInterpolate($props.project.desc)}</div><div class="box-projects-arrow"${_scopeId}><span class="button-text"${_scopeId}>View Case Study</span><i class="fa fa-arrow-right ms-1"${_scopeId}></i></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "projects-image-box" }, [
            createVNode("div", { class: "projects-image" }, [
              createVNode("img", {
                class: "img-fluid",
                src: $props.project.image,
                alt: "project image"
              }, null, 8, ["src"])
            ]),
            createVNode("div", { class: "content" }, [
              createVNode("h6", { class: "heading" }, toDisplayString($props.project.heading), 1),
              createVNode("div", { class: "post-categories" }, toDisplayString($props.project.category), 1),
              createVNode("div", { class: "text" }, toDisplayString($props.project.desc), 1),
              createVNode("div", { class: "box-projects-arrow" }, [
                createVNode("span", { class: "button-text" }, "View Case Study"),
                createVNode("i", { class: "fa fa-arrow-right ms-1" })
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CaseStudiesItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_1 as default };
//# sourceMappingURL=CaseStudiesItem-a6cb7c42.mjs.map
