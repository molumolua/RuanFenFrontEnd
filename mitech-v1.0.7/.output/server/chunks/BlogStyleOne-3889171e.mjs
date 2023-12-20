import { _ as __nuxt_component_1$1 } from './server.mjs';
import { d as data } from './blog-af81b322.mjs';
import { mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "blog-section-wrapper section-space--pt_100 section-space--pb_70" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-4 col-md-12 wow move-up"><div class="section-title tablet-mb__60 section-space--mb_30 tablet-mt__0 small-mt__0 small-mb__60 mt-30"><h6 class="section-sub-title mb-20">${ssrInterpolate($data.data.sectionSubTitle)}</h6><h3 class="heading">${$data.data.sectionTitle}</h3><ul class="infotechno-blog-list mt-30"><!--[-->`);
  ssrRenderList($data.data.blogPosts.slice(0, 5), (blog) => {
    _push(`<li>`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: `/blog/${blog.slug}`
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(blog.title)}`);
        } else {
          return [
            createTextVNode(toDisplayString(blog.title), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</li>`);
  });
  _push(`<!--]--></ul></div></div><!--[-->`);
  ssrRenderList($data.data.blogPosts.slice(0, 2), (blog) => {
    _push(`<div class="col-lg-4 col-md-6 wow move-up"><div class="single-blog-item blog-grid"><div class="post-feature blog-thumbnail">`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: `/blog/${blog.slug}`
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<img class="img-fluid"${ssrRenderAttr("src", blog.image)} alt="Blog Images"${_scopeId}>`);
        } else {
          return [
            createVNode("img", {
              class: "img-fluid",
              src: blog.image,
              alt: "Blog Images"
            }, null, 8, ["src"])
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div><div class="post-info lg-blog-post-info"><div class="post-meta"><div class="post-date"><span class="far fa-calendar meta-icon"></span> ${ssrInterpolate(blog.postDate)}</div></div><h5 class="post-title font-weight--bold">`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: `/blog/${blog.slug}`
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(blog.title)}`);
        } else {
          return [
            createTextVNode(toDisplayString(blog.title), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</h5><div class="post-excerpt mt-15"><p>${ssrInterpolate(blog.desc)}</p></div><div class="btn-text">`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: `/blog/${blog.slug}`
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Read more <i class="ms-1 button-icon fas fa-arrow-right ms-1"${_scopeId}></i>`);
        } else {
          return [
            createTextVNode(" Read more "),
            createVNode("i", { class: "ms-1 button-icon fas fa-arrow-right ms-1" })
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div></div></div></div>`);
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/BlogStyleOne.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BlogStyleOne = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { BlogStyleOne as B };
//# sourceMappingURL=BlogStyleOne-3889171e.mjs.map
