import { _ as __nuxt_component_0 } from './Header-a5549ad8.mjs';
import { _ as __nuxt_component_1 } from './Breadcrumbs-39496f55.mjs';
import { _ as __nuxt_component_1$1 } from './server.mjs';
import { _ as __nuxt_component_2 } from './CtaThree-ae57b218.mjs';
import { _ as __nuxt_component_3, a as __nuxt_component_4 } from './OffCanvasMobileMenu-4675e8aa.mjs';
import { d as data } from './blog-af81b322.mjs';
import { useSSRContext, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _imports_1, a as _imports_2, b as _imports_3, c as _imports_4 } from './reply-comm-2bb0df25.mjs';
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
import './cta-0c725fc4.mjs';
import './paths.mjs';

const _sfc_main = {
  components: {
    Header: __nuxt_component_0,
    Breadcrumbs: __nuxt_component_1,
    CtaThree: __nuxt_component_2,
    Footer: __nuxt_component_3,
    OffCanvasMobileMenu: __nuxt_component_4
  },
  data() {
    return {
      data,
      slug: this.$route.params.slug
    };
  },
  mounted() {
    this.data = data.blogPosts.find((blog) => blog.slug == this.slug);
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Header = __nuxt_component_0;
  const _component_Breadcrumbs = __nuxt_component_1;
  const _component_nuxt_link = __nuxt_component_1$1;
  const _component_CtaThree = __nuxt_component_2;
  const _component_Footer = __nuxt_component_3;
  const _component_OffCanvasMobileMenu = __nuxt_component_4;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-container" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(ssrRenderComponent(_component_Breadcrumbs, {
    items: $data.slug,
    breadcrumbTitle: "Blog Details"
  }, null, _parent));
  _push(`<div class="blog-pages-wrapper section-space--ptb_100"><div class="container"><div class="row"><div class="col-lg-12"><div class="post-feature blog-thumbnail wow move-up"><img class="img-fluid"${ssrRenderAttr("src", $data.data.image)} alt="Blog Images"></div></div><div class="col-lg-8 ms-auto me-auto"><div class="main-blog-wrap"><div class="single-blog-item wow move-up"><div class="post-info lg-blog-post-info"><div class="post-categories text-center">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/blog" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($data.data.category)}`);
      } else {
        return [
          createTextVNode(toDisplayString($data.data.category), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><h3 class="post-title text-center">${ssrInterpolate($data.data.title)}</h3><div class="post-meta mt-20 justify-content-center"><div class="post-author">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="img-fluid avatar-96"${ssrRenderAttr("src", _imports_1)} alt="thumbnail"${_scopeId}> Harry Ferguson `);
      } else {
        return [
          createVNode("img", {
            class: "img-fluid avatar-96",
            src: _imports_1,
            alt: "thumbnail"
          }),
          createTextVNode(" Harry Ferguson ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="post-date"><span class="far fa-calendar meta-icon"></span> January 14, 2019 </div><div class="post-view"><span class="meta-icon far fa-eye"></span> 346 views </div><div class="post-comments"><span class="far fa-comment-alt meta-icon"></span>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/",
    class: "smooth-scroll-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`4 Comments`);
      } else {
        return [
          createTextVNode("4 Comments")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="post-excerpt mt-15"><p>Creative jobs website and networking platform The Dots has launched the \u201Cbias blocker\u201D, a new browsing mode that stops employers being able to see candidates\u2019 photos, names, education and employment history, on the basis that they should be judged on the \u201Cquality of their work\u201D only. Will tools like this help to build a more diverse design workforce?</p><blockquote><p class="p1">We\u2019re on a mission to build a better future where technology creates good jobs for everyone. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse moles dolore eu feugiat.. </p></blockquote><p>Regardless of our gender, race, religion, cultural beliefs or education, all of us are biased in some way. This no doubt seeps into recruitment \u2013 whether we are subconsciously looking for people we relate to, or we are actively going against this to try to diversify the workplace, personal feelings and opinion are making their way into the hiring process.</p><p>Positive discrimination \u2013 giving an advantage to those from minority backgrounds or discriminated groups to put them on a level playing field with others \u2013 can only be a good thing. It increases the diversity of people, and therefore the diversity of ideas, in the workplace.</p><p>Source: designweek.co.uk</p><div class="entry-post-share-wrap border-bottom"><div class="row align-items-center"><div class="col-lg-6 col-md-6"><div class="entry-post-tags"><div class="tagcloud-icon"><i class="fa fa-tags"></i></div><div class="tagcloud">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/it-services" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`IT Service`);
      } else {
        return [
          createTextVNode("IT Service")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/it-services" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`IT Service`);
      } else {
        return [
          createTextVNode("IT Service")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div class="col-lg-6 col-md-6"><div id="entry-post-share" class="entry-post-share"><div class="share-label"> Share this post </div><div class="share-media"><span class="share-icon fas fa-share-alt"></span><div class="share-list"><a class="hint--bounce hint--top hint--primary twitter" target="_blank" aria-label="Twitter" href="https://twitter.com/"><i class="fab fa-twitter"></i></a><a class="hint--bounce hint--top hint--primary facebook" target="_blank" aria-label="Facebook" href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a><a class="hint--bounce hint--top hint--primary linkedin" target="_blank" aria-label="Linkedin" href="https://www.linkedin.com/"><i class="fab fa-linkedin"></i></a></div></div></div></div></div></div><div class="entry-author"><div class="author-info"><div class="author-avatar"><img${ssrRenderAttr("src", _imports_2)} alt="thumbnail"><div class="author-social-networks"><div class="inner"><a class="hint--bounce hint--top hint--primary" aria-label="Twitter" href="https://twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a><a class="hint--bounce hint--top hint--primary" aria-label="Facebook" href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></a><a class="hint--bounce hint--top hint--primary" aria-label="Instagram" href="https://www.linkedin.com/" target="_blank"><i class="fab fa-instagram"></i></a></div></div></div><div class="author-description"><h6 class="author-name">Owen Christ</h6><div class="author-biographical-info"> Harry Ferguson is an author, blogger, and designer living in a suburb of Washington, DC. When he\u2019s not designing, blogging, or writing, Ferguson can be found with his head in a book or pinning like a madman. </div></div></div></div><div class="related-posts-wrapper"><div class="row mtn-30"><div class="col-lg-6 mt-30">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/blog/blog-details",
    class: "single-valid-post-wrapper"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="single-blog__item"${_scopeId}><div class="single-valid__thum bg-img" style="${ssrRenderStyle({ backgroundImage: `url('/images/blog/blog-03-370x120.jpg')` })}"${_scopeId}></div><div class="post-content"${_scopeId}><h6 class="post-title font-weight--bold"${_scopeId}>Designers\u2019 Identities &amp; Social Unconscious Bias</h6></div></div>`);
      } else {
        return [
          createVNode("div", { class: "single-blog__item" }, [
            createVNode("div", {
              class: "single-valid__thum bg-img",
              style: { backgroundImage: `url('/images/blog/blog-03-370x120.jpg')` }
            }, null, 4),
            createVNode("div", { class: "post-content" }, [
              createVNode("h6", { class: "post-title font-weight--bold" }, "Designers\u2019 Identities & Social Unconscious Bias")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="col-lg-6 mt-30">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/blog/blog-details",
    class: "single-valid-post-wrapper"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="single-blog__item"${_scopeId}><div class="single-valid__thum bg-img" style="${ssrRenderStyle({ backgroundImage: `url('/images/blog/blog-05-370x120.jpg')` })}"${_scopeId}></div><div class="post-content"${_scopeId}><h6 class="post-title font-weight--bold"${_scopeId}>Designers\u2019 Identities &amp; Social Unconscious Bias</h6></div></div>`);
      } else {
        return [
          createVNode("div", { class: "single-blog__item" }, [
            createVNode("div", {
              class: "single-valid__thum bg-img",
              style: { backgroundImage: `url('/images/blog/blog-05-370x120.jpg')` }
            }, null, 4),
            createVNode("div", { class: "post-content" }, [
              createVNode("h6", { class: "post-title font-weight--bold" }, "Designers\u2019 Identities & Social Unconscious Bias")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div class="comment-list-wrapper"><div class="row"><div class="col-lg-12"><h4 class="widget-title section-space--mb_50">Comments (1) </h4></div><div class="col-lg-12"><ol class="comment-list"><li class="comment"><div class="comment-5"><div class="comment-author vcard"><img alt="thumb"${ssrRenderAttr("src", _imports_3)}></div><div class="comment-content"><div class="meta"><h6 class="fn">James Scott</h6><div class="comment-datetime"> November 13, 2018 at 4:50 am </div></div><div class="comment-text"><p>Thanks for always keeping your HTML Template up to date. Your level of support and dedication is second to none.</p></div><div class="comment-actions"><div class="comment-datetime"> February 12, 2018 at 6:31 am </div><span> | </span><button class="comment-reply-link">Reply</button></div></div></div><ol class="children"><li class="comment"><div class="comment-6"><div class="comment-author vcard"><img alt=""${ssrRenderAttr("src", _imports_4)}></div><div class="comment-content"><div class="meta"><h6 class="fn">Harry Ferguson</h6><div class="comment-datetime"> February 13, 2019 at 4:51 am </div></div><div class="comment-text"><p>Thanks for always keeping your HTML Template up to date. Your level of support and dedication is second to none.</p></div><div class="comment-actions"><div class="comment-datetime"> November 13, 2018 at 4:31 am </div><span> | </span><button class="comment-reply-link">Reply</button></div></div></div></li></ol></li></ol></div></div></div><div class="comment-list-wrapper"><div class="row"><div class="col-lg-12"><h4 class="widget-title mb-20">Leave your thought here </h4><p>Your email address will not be published. Required fields are marked *</p></div><div class="col-lg-12"><div class="contact-from-wrapper section-space--mt_30"><form action="#" method="post"><div class="contact-page-form"><div class="contact-input"><div class="contact-inner"><input name="name" type="text" placeholder="Your Comment *"></div><div class="contact-inner"><input name="email" type="email" placeholder="Your Email *"></div></div><div class="contact-inner contact-message"><textarea name="comment" placeholder="Your Comment"></textarea></div><p class="comment-form-cookies-consent"><input type="checkbox"><label>Save my name, email, and website in this browser for the next time I comment.</label></p><div class="comment-submit-btn text-center"><button class="ht-btn ht-btn-md" type="submit">Submit</button></div></div></form></div></div></div></div></div></div></div></div></div></div></div></div>`);
  _push(ssrRenderComponent(_component_CtaThree, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(ssrRenderComponent(_component_OffCanvasMobileMenu, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_-c691f56f.mjs.map
