import { _ as __nuxt_component_0, d as data } from './team-803a5018.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
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
  const _component_TeamMember = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "team-member-wrapper section-space--pt_100 section-space--pb_70" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-12"><div class="section-title section-space--mb_60 text-center"><h3 class="heading">${$data.data.leadershipHeading}</h3></div></div></div><div class="row ht-team-member-style-two"><!--[-->`);
  ssrRenderList($data.data.teamMembers.slice(4, 7), (teamMember) => {
    _push(`<div class="col-lg-4 col-md-6 text-center wow move-up">`);
    _push(ssrRenderComponent(_component_TeamMember, { teamMember }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div><div class="row ht-team-member-style-three"><!--[-->`);
  ssrRenderList($data.data.teamMembers.slice(7, 11), (teamMember) => {
    _push(`<div class="col-lg-3 col-md-6 text-center wow move-up">`);
    _push(ssrRenderComponent(_component_TeamMember, { teamMember }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/TeamTwo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TeamTwo = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { TeamTwo as T };
//# sourceMappingURL=TeamTwo-10fd68c3.mjs.map
