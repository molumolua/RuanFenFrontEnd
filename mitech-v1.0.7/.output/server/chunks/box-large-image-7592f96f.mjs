import { _ as __nuxt_component_0$1 } from './Header-a5549ad8.mjs';
import { _ as __nuxt_component_1 } from './Breadcrumbs-39496f55.mjs';
import { _ as __nuxt_component_2 } from './CtaThree-ae57b218.mjs';
import { _ as __nuxt_component_3$1, a as __nuxt_component_4 } from './OffCanvasMobileMenu-4675e8aa.mjs';
import __nuxt_component_0 from './SectionTitle-b03cc0d0.mjs';
import { _ as __nuxt_component_3 } from './FeatureItem-09329b54.mjs';
import { _ as __nuxt_component_1$1 } from './server.mjs';
import { d as data } from './service-6308e97d.mjs';
import { useSSRContext, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, resolveComponent } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { S as ServiceStyleThree } from './ServiceStyleThree-0c11ff0c.mjs';
import './HeaderTop-a728fcac.mjs';
import './cta-0c725fc4.mjs';
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

const _sfc_main$2 = {
  components: {
    SectionTitle: __nuxt_component_0,
    FeatureItem: __nuxt_component_3
  },
  data() {
    return {
      data
    };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SectionTitle = __nuxt_component_0;
  const _component_FeatureItem = __nuxt_component_3;
  const _component_nuxt_link = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "feature-large-images-wrapper section-space--ptb_100" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-12">`);
  _push(ssrRenderComponent(_component_SectionTitle, {
    class: "text-center section-space--mb_30",
    title: $data.data.featureSectionTitle,
    subTitle: $data.data.featureSectionSubTitle
  }, null, _parent));
  _push(`</div></div><div class="row"><div class="col-12"><div class="row row--35"><!--[-->`);
  ssrRenderList($data.data.services.slice(23, 26), (service) => {
    _push(`<div class="col-lg-4 col-md-6 mt-30">`);
    _push(ssrRenderComponent(_component_FeatureItem, { service }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div><div class="section-under-heading text-center section-space--mt_40">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Learn more about how we work span <i class="ms-1 button-icon fas fa-arrow-right ms-1"${_scopeId}></i>`);
      } else {
        return [
          createTextVNode(" Learn more about how we work span "),
          createVNode("i", { class: "ms-1 button-icon fas fa-arrow-right ms-1" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/ServiceStyleSeven.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ServiceStyleSeven = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  data() {
    return {
      data
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "feature-large-images-wrapper section-space--ptb_100" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-12"><div class="section-title-wrap text-center section-space--mb_60"><h6 class="section-sub-title mb-20">${ssrInterpolate($data.data.featureSectionSubTitle)}</h6><h3 class="heading">${$data.data.featureSectionTitle}</h3></div></div></div><div class="row"><div class="col-12"><div class="row"><!--[-->`);
  ssrRenderList($data.data.services.slice(14, 17), (service) => {
    _push(`<div class="col-lg-4 col-md-6 wow move-up">`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: `/service/${service.slug}`,
      class: "ht-large-box-images style-03"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="large-image-box"${_scopeId}><div class="box-image"${_scopeId}><div class="default-image"${_scopeId}><img class="img-fluid"${ssrRenderAttr("src", service.image)} alt="image"${_scopeId}></div></div><div class="content"${_scopeId}><h5 class="heading"${_scopeId}>${ssrInterpolate(service.heading)}</h5><div class="text"${_scopeId}>${ssrInterpolate(service.desc)}</div><div class="box-images-arrow"${_scopeId}><span class="button-text"${_scopeId}>Discover now</span><i class="fas fa-arrow-right ms-1"${_scopeId}></i></div></div></div>`);
        } else {
          return [
            createVNode("div", { class: "large-image-box" }, [
              createVNode("div", { class: "box-image" }, [
                createVNode("div", { class: "default-image" }, [
                  createVNode("img", {
                    class: "img-fluid",
                    src: service.image,
                    alt: "image"
                  }, null, 8, ["src"])
                ])
              ]),
              createVNode("div", { class: "content" }, [
                createVNode("h5", { class: "heading" }, toDisplayString(service.heading), 1),
                createVNode("div", { class: "text" }, toDisplayString(service.desc), 1),
                createVNode("div", { class: "box-images-arrow" }, [
                  createVNode("span", { class: "button-text" }, "Discover now"),
                  createVNode("i", { class: "fas fa-arrow-right ms-1" })
                ])
              ])
            ])
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div><div class="section-under-heading text-center section-space--mt_20">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/it-solutions" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Learn more about how we work span <i class="ms-1 button-icon fas fa-arrow-right ms-1"${_scopeId}></i>`);
      } else {
        return [
          createTextVNode(" Learn more about how we work span "),
          createVNode("i", { class: "ms-1 button-icon fas fa-arrow-right ms-1" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/ServiceStyleEight.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ServiceStyleEight = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    Header: __nuxt_component_0$1,
    Breadcrumbs: __nuxt_component_1,
    ServiceStyleSeven,
    ServiceStyleThree,
    ServiceStyleEight,
    CtaThree: __nuxt_component_2,
    Footer: __nuxt_component_3$1,
    OffCanvasMobileMenu: __nuxt_component_4
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Header = __nuxt_component_0$1;
  const _component_Breadcrumbs = __nuxt_component_1;
  const _component_ServiceStyleSeven = resolveComponent("ServiceStyleSeven");
  const _component_ServiceStyleThree = resolveComponent("ServiceStyleThree");
  const _component_ServiceStyleEight = resolveComponent("ServiceStyleEight");
  const _component_CtaThree = __nuxt_component_2;
  const _component_Footer = __nuxt_component_3$1;
  const _component_OffCanvasMobileMenu = __nuxt_component_4;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-container" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(ssrRenderComponent(_component_Breadcrumbs, {
    items: "Box Large Image",
    breadcrumbTitle: "Box Large Image"
  }, null, _parent));
  _push(ssrRenderComponent(_component_ServiceStyleSeven, null, null, _parent));
  _push(ssrRenderComponent(_component_ServiceStyleThree, null, null, _parent));
  _push(ssrRenderComponent(_component_ServiceStyleEight, null, null, _parent));
  _push(ssrRenderComponent(_component_CtaThree, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(ssrRenderComponent(_component_OffCanvasMobileMenu, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/element/box-large-image.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const boxLargeImage = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { boxLargeImage as default };
//# sourceMappingURL=box-large-image-7592f96f.mjs.map
