import { _ as __nuxt_component_1$1 } from './server.mjs';
import { _ as __nuxt_component_0, d as data } from './team-803a5018.mjs';
import { mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main = {
  components: {
    TeamMember: __nuxt_component_0
  },
  data() {
    return {
      data
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_1$1;
  const _component_TeamMember = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "team-member-wrapper section-space--pt_100 section-space--pb_40" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-4"><div class="section-title section-space--mb_60"><h3 class="heading">${$data.data.sectionTitle}</h3><p class="text mt-30">${ssrInterpolate($data.data.sectionSubTitle)}</p><div class="sider-title-button-box mt-30">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/leadership",
    class: "ht-btn ht-btn-md"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Join us now`);
      } else {
        return [
          createTextVNode("Join us now")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/leadership",
    class: "btn-text font-weight--bold small-mt__20"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` View all team <i class="ms-1 button-icon fas fa-arrow-right ms-1"${_scopeId}></i>`);
      } else {
        return [
          createTextVNode(" View all team "),
          createVNode("i", { class: "ms-1 button-icon fas fa-arrow-right ms-1" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div class="col-lg-8 ht-team-member-style-one"><div class="row"><!--[-->`);
  ssrRenderList($data.data.teamMembers.slice(0, 4), (teamMember) => {
    _push(`<div class="col-lg-6 col-md-6 wow move-up">`);
    _push(ssrRenderComponent(_component_TeamMember, { teamMember }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/TeamOne.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TeamOne = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { TeamOne as T };
//# sourceMappingURL=TeamOne-1fa9672e.mjs.map
