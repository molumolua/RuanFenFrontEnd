import { _ as __nuxt_component_0 } from './Header-a5549ad8.mjs';
import { _ as __nuxt_component_1 } from './Breadcrumbs-39496f55.mjs';
import { _ as __nuxt_component_6 } from './CtaContact-2da6894c.mjs';
import { _ as __nuxt_component_3, a as __nuxt_component_4 } from './OffCanvasMobileMenu-4675e8aa.mjs';
import { T as TeamTwo } from './TeamTwo-10fd68c3.mjs';
import { _ as __nuxt_component_1$1 } from './server.mjs';
import { d as data } from './team-803a5018.mjs';
import { useSSRContext, mergeProps, withCtx, createTextVNode, toDisplayString, resolveComponent } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import './HeaderTop-a728fcac.mjs';
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

const _sfc_main$1 = {
  data() {
    return {
      data
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "list-member-area section-space--pb_70" }, _attrs))}><div class="container"><div class="row"><!--[-->`);
  ssrRenderList($data.data.teamMemberWidget, (widget) => {
    _push(`<div class="col-lg-3 col-md-6 team_member-list mb-30"><h6 class="team__title mb-20">${ssrInterpolate(widget.widgetTitle)}</h6><ul class="footer-widget__list"><!--[-->`);
    ssrRenderList(widget.teamMemberList, (list) => {
      _push(`<li>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/",
        class: "hover-style-default"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(list.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(list.title), 1)
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`</li>`);
    });
    _push(`<!--]--></ul></div>`);
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/TeamMemberList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TeamMemberList = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    Header: __nuxt_component_0,
    Breadcrumbs: __nuxt_component_1,
    TeamTwo,
    TeamMemberList,
    CtaContact: __nuxt_component_6,
    Footer: __nuxt_component_3,
    OffCanvasMobileMenu: __nuxt_component_4
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Header = __nuxt_component_0;
  const _component_Breadcrumbs = __nuxt_component_1;
  const _component_TeamTwo = resolveComponent("TeamTwo");
  const _component_TeamMemberList = resolveComponent("TeamMemberList");
  const _component_CtaContact = __nuxt_component_6;
  const _component_Footer = __nuxt_component_3;
  const _component_OffCanvasMobileMenu = __nuxt_component_4;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-container" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(ssrRenderComponent(_component_Breadcrumbs, {
    items: "Leadership",
    breadcrumbTitle: "Leadership"
  }, null, _parent));
  _push(ssrRenderComponent(_component_TeamTwo, null, null, _parent));
  _push(ssrRenderComponent(_component_TeamMemberList, null, null, _parent));
  _push(ssrRenderComponent(_component_CtaContact, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(ssrRenderComponent(_component_OffCanvasMobileMenu, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Leadership.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Leadership = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Leadership as default };
//# sourceMappingURL=Leadership-283c7ba7.mjs.map
