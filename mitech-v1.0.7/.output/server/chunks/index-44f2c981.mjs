import { _ as __nuxt_component_0$1 } from './Header-a5549ad8.mjs';
import { _ as __nuxt_component_1 } from './Breadcrumbs-39496f55.mjs';
import { _ as __nuxt_component_2 } from './CtaThree-ae57b218.mjs';
import { _ as __nuxt_component_3, a as __nuxt_component_4 } from './OffCanvasMobileMenu-4675e8aa.mjs';
import { _ as __nuxt_component_1$1 } from './server.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, resolveComponent } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { d as data } from './blog-af81b322.mjs';
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
  props: ["sidebarWidget", "recentPost", "tags"]
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-sidebar-content-wrapper page-sidebar-left small-mt__40 tablet-mt__40" }, _attrs))}><div class="sidebar-widget search-post wow move-up"><div class="widget-title"><h4 class="sidebar-widget-title">Search</h4></div><form method="post"><div class="widget-search"><input type="text" placeholder="Enter search keyword"><button type="submit" class="search-submit"><span class="search-btn-icon fa fa-search"></span></button></div></form></div><div class="sidebar-widget widget-blog-recent-post wow move-up"><h4 class="sidebar-widget-title">${ssrInterpolate($props.sidebarWidget.recentPostTitle)}</h4><ul><!--[-->`);
  ssrRenderList($props.recentPost.slice(0, 5), (blog) => {
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
  _push(`<!--]--></ul></div><div class="sidebar-widget widget-images wow move-up">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="img-fluid"${ssrRenderAttr("src", $props.sidebarWidget.widgetImage)} alt="thumbnail"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            class: "img-fluid",
            src: $props.sidebarWidget.widgetImage,
            alt: "thumbnail"
          }, null, 8, ["src"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="sidebar-widget widget-tag wow move-up"><h4 class="sidebar-widget-title">${ssrInterpolate($props.sidebarWidget.tagTitle)}</h4><!--[-->`);
  ssrRenderList($props.tags, (tag) => {
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: tag.url,
      class: "ht-btn ht-btn-xs",
      key: tag.id
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(tag.name)}`);
        } else {
          return [
            createTextVNode(toDisplayString(tag.name), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BlogSidebar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  components: {
    BlogSidebar: __nuxt_component_0
  },
  data() {
    return {
      data
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_BlogSidebar = __nuxt_component_0;
  const _component_nuxt_link = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "blog-pages-wrapper section-space--ptb_100" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-4 order-lg-1 order-2">`);
  _push(ssrRenderComponent(_component_BlogSidebar, {
    sidebarWidget: $data.data.blogSidebar,
    recentPost: $data.data.blogPosts,
    tags: $data.data.blogSidebar.tags
  }, null, _parent));
  _push(`</div><div class="col-lg-8 order-lg-2 order-1"><div class="section-title-wrap text-center section-space--mb_60"><h3 class="heading">Interesting articles<span class="text-color-primary"> updated daily</span></h3></div><div class="main-blog-wrap"><!--[-->`);
  ssrRenderList($data.data.blogPosts.slice(3, 9), (blog) => {
    _push(`<div class="single-blog-item lg-blog-item border-bottom wow move-up"><div class="post-feature blog-thumbnail">`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: `/blog/${blog.slug}`
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<img${ssrRenderAttr("src", blog.image)} class="img-fluid" alt="Blog Images"${_scopeId}>`);
        } else {
          return [
            createVNode("img", {
              src: blog.image,
              class: "img-fluid",
              alt: "Blog Images"
            }, null, 8, ["src"])
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div><div class="post-info lg-blog-post-info"><div class="post-categories">`);
    _push(ssrRenderComponent(_component_nuxt_link, { to: "/blog" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(blog.category)}`);
        } else {
          return [
            createTextVNode(toDisplayString(blog.category), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div><h3 class="post-title">`);
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
    _push(`</h3><div class="post-meta mt-20"><div class="post-author">`);
    _push(ssrRenderComponent(_component_nuxt_link, { to: "/blog" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<img class="img-fluid avatar-96"${ssrRenderAttr("src", blog.authorThumb)} alt="avatar"${_scopeId}> ${ssrInterpolate(blog.authorName)}`);
        } else {
          return [
            createVNode("img", {
              class: "img-fluid avatar-96",
              src: blog.authorThumb,
              alt: "avatar"
            }, null, 8, ["src"]),
            createTextVNode(" " + toDisplayString(blog.authorName), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div><div class="post-date"><span class="far fa-calendar meta-icon"></span> ${ssrInterpolate(blog.postDate)}</div><div class="post-view"><span class="meta-icon far fa-eye"></span> ${ssrInterpolate(blog.postView)} views </div></div><div class="post-excerpt mt-15"><p>${ssrInterpolate(blog.desc)}</p></div><div class="read-post-share-wrap mt-20"><div class="row align-items-center"><div class="col-lg-6 col-md-6 col-sm-6"><div class="post-read-more">`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: `/blog/${blog.slug}`,
      class: "ht-btn ht-btn-md"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Read More `);
        } else {
          return [
            createTextVNode(" Read More ")
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div></div><div class="col-lg-6 col-md-6 col-sm-6"><div id="entry-post-share" class="entry-post-share"><div class="share-label"> Share this post </div><div class="share-media"><span class="share-icon fas fa-share-alt"></span><div class="share-list"><a class="hint--bounce hint--top hint--primary twitter" target="_blank" aria-label="Twitter" href="https://twitter.com"><i class="fab fa-twitter"></i></a><a class="hint--bounce hint--top hint--primary facebook" target="_blank" aria-label="Facebook" href="https://web.facebook.com"><i class="fab fa-facebook-f"></i></a><a class="hint--bounce hint--top hint--primary linkedin" target="_blank" aria-label="Linkedin" href="https://www.linkedin.com/"><i class="fab fa-linkedin"></i></a></div></div></div></div></div></div></div></div>`);
  });
  _push(`<!--]--><div class="ht-pagination mt-30 pagination justify-content-center"><div class="pagination-wrapper"><ul class="pagination"><li class="page-item disabled"><a href="#">PREV</a></li><li class="page-item active"><a href="#">1</a></li><li class="page-item"><a href="#">2</a></li><li class="page-item"><a href="#">3</a></li><li class="page-item"><a href="#">4</a></li><li class="page-item"><a href="#">Next</a></li></ul></div></div></div></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/BlogPageWrapper.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const BlogPageWrapper = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    Header: __nuxt_component_0$1,
    Breadcrumbs: __nuxt_component_1,
    BlogPageWrapper,
    CtaThree: __nuxt_component_2,
    Footer: __nuxt_component_3,
    OffCanvasMobileMenu: __nuxt_component_4
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Header = __nuxt_component_0$1;
  const _component_Breadcrumbs = __nuxt_component_1;
  const _component_BlogPageWrapper = resolveComponent("BlogPageWrapper");
  const _component_CtaThree = __nuxt_component_2;
  const _component_Footer = __nuxt_component_3;
  const _component_OffCanvasMobileMenu = __nuxt_component_4;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-container" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(ssrRenderComponent(_component_Breadcrumbs, {
    items: "Blogs",
    breadcrumbTitle: "Blogs"
  }, null, _parent));
  _push(ssrRenderComponent(_component_BlogPageWrapper, null, null, _parent));
  _push(ssrRenderComponent(_component_CtaThree, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(ssrRenderComponent(_component_OffCanvasMobileMenu, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-44f2c981.mjs.map
