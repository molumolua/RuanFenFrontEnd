import { _ as __nuxt_component_0, a as __nuxt_component_1$2 } from './VideoWithImages-0ba18ea3.mjs';
import { d as data } from './hero-2aa9cd53.mjs';
import { useSSRContext, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, resolveComponent } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderStyle, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { _ as __nuxt_component_2 } from './CtaThree-ae57b218.mjs';
import { _ as __nuxt_component_2$1 } from './BrandLogoCarousel-3686721b.mjs';
import { _ as __nuxt_component_3, a as __nuxt_component_4 } from './OffCanvasMobileMenu-4675e8aa.mjs';
import { _ as __nuxt_component_6 } from './SearchOverlay-4dc97e85.mjs';
import { F as FeatureGallery } from './FeatureGallery-005ff30a.mjs';
import { _ as __nuxt_component_1$1 } from './server.mjs';
import { S as ServiceStyleTwo } from './ServiceStyleTwo-77310fd3.mjs';
import { F as FourSteps } from './FourSteps-908f1e7b.mjs';
import { C as CaseStudiesSectionTwo, P as PricingOne } from './PricingOne-a01fc61a.mjs';
import { d as data$1 } from './blog-af81b322.mjs';
import './paths.mjs';
import 'ufo';
import './config.mjs';
import 'destr';
import 'scule';
import './HeaderTop-a728fcac.mjs';
import './cta-0c725fc4.mjs';
import 'swiper/vue';
import 'swiper/core';
import './FeatureItemTwo-cd355d93.mjs';
import './service-6308e97d.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
import 'defu';
import './SectionTitle-b03cc0d0.mjs';
import './caseStidies-14b56fd1.mjs';

const _sfc_main$4 = {
  data() {
    return {
      data
    };
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "service-hero-wrapper service-hero-space service-hero-bg",
    style: { backgroundImage: `url(${$data.data.heroService.bgImg})` }
  }, _attrs))}><div class="container"><div class="row"><div class="col-lg-12 col-md-12 ms-auto me-auto"><div class="service-hero-wrap wow move-up"><div class="service-hero-text text-center"><h3 class="text-white">${ssrInterpolate($data.data.heroService.subTitle)}</h3><h1 class="font-weight--reguler text-white mb-30">${ssrInterpolate($data.data.heroService.title)}</h1><div class="service-solution-form-wrap me-auto ms-auto"><form action="#" method="post"><div class="hero-select-form"><div class="contact-select"><div class="form-item contact-inner"><span class="inquiry"><select class="select-item" style="${ssrRenderStyle({ backgroundImage: `url('/images/icons/hero-selector-icon.png')` })}"><option value="Your inquiry about">How can we help you?</option><option value="General Information Request">It Services</option><option value="Partner Relations">Managed IT Services</option></select></span></div></div></div></form></div><p class="text-white">${ssrInterpolate($data.data.heroService.desc)}</p></div></div></div></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroService.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_link = __nuxt_component_1$1;
  const _component_VideoWithImages = __nuxt_component_1$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "our-company-history section-space--ptb_100" }, _attrs))}><div class="container-fluid"><div class="grid-wrapper"><div class="line line-1"></div><div class="line line-2"></div><div class="line line-3"></div><div class="line line-4"></div></div><div class="row align-items-center"><div class="col-lg-6"><div class="faq-custom-col"><div class="section-title-wrap"><h6 class="section-sub-title mb-20">Our company</h6><h3 class="heading">We\u2019ve been triumphing <br> all these <span> 38 years.</span> <br> Sacrifices are made up <br> with success.</h3><p class="text mt-30">Mitech takes into consideration every little detail to make sure the system run smoothly and responsively. Mitech employs a new technique called Minified Technology for securing customers\u2019 database &amp; building up highly confidential firewalls.</p><div class="inner-button-box section-space--mt_60">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/about",
    class: "ht-btn ht-btn-md"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Find out more`);
      } else {
        return [
          createTextVNode("Find out more")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div><div class="col-lg-6">`);
  _push(ssrRenderComponent(_component_VideoWithImages, null, null, _parent));
  _push(`</div></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/CompanyHistory.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const CompanyHistory = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "contact-us-area service-contact-bg section-space--ptb_100",
    style: { backgroundImage: `url('/images/bg/mitech-home-services-contact-bg.png')` }
  }, _attrs))}><div class="container"><div class="row align-items-center"><div class="col-lg-4"><div class="contact-info sytle-one service-contact text-left"><div class="contact-info-title-wrap text-center"><h3 class="heading text-white mb-10">4.9/5.0</h3><div class="ht-star-rating lg-style"><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span></div><p class="sub-text">by 700+ customers for 3200+ clients</p></div><div class="contact-list-item"><a href="tel:190068668" class="single-contact-list"><div class="content-wrap"><div class="content"><div class="icon"><span class="fa fa-phone"></span></div><div class="main-content"><h6 class="heading">Call for advice now!</h6><div class="text">1900 68668</div></div></div></div></a><a href="mailto:hello@mitech.com" class="single-contact-list"><div class="content-wrap"><div class="content"><div class="icon"><span class="far fa-envelope"></span></div><div class="main-content"><h6 class="heading">Say hello</h6><div class="text">hello@mitech.com</div></div></div></div></a></div></div></div><div class="col-lg-7 ms-auto"><div class="contact-form-service-wrap"><div class="contact-title text-center section-space--mb_40"><h3 class="mb-10">Need a hand?</h3><p class="text">Reach out to the world\u2019s most reliable IT services.</p></div><form id="contact-form"><div class="contact-form__two"><div class="contact-input"><div class="contact-inner"><input name="con_name" type="text" placeholder="Name *"></div><div class="contact-inner"><input name="con_email" type="email" placeholder="Email *"></div></div><div class="contact-select"><div class="form-item contact-inner"><span class="inquiry"><select name="inquiry" class="select-item"><option value="Your inquiry about">Your inquiry about</option><option value="General Information Request">General Information Request</option><option value="Partner Relations">Partner Relations</option><option value="Careers">Careers</option><option value="Software Licencing">Software Licencing</option></select></span></div></div><div class="contact-inner contact-message"><textarea name="con_message" placeholder="Please describe what you need."></textarea></div><div class="submit-btn text-center"><button class="ht-btn ht-btn-md" type="submit">Send message</button><p class="form-messege"></p></div></div></form></div></div></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/ContactUsTwo.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ContactUsTwo = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  data() {
    return {
      data: data$1
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "service-projects-wrapper section-space--ptb_100" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-12"><div class="section-title-wrap text-center section-space--mb_60"><h6 class="section-sub-title mb-20">${ssrInterpolate($data.data.blogStyletwo.sectionSubTitle)}</h6><h3 class="heading">${$data.data.blogStyletwo.sectionTitle}</h3></div></div></div><div class="latest-news-wrap"><div class="row"><div class="col-lg-6"><!--[-->`);
  ssrRenderList($data.data.blogPosts.slice(7, 8), (blog) => {
    _push(`<div class="single-blog-lg-item wow move-up">`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: `/blog/${blog.slug}`
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="post-blog-thumbnail"${_scopeId}><img class="img-fluid"${ssrRenderAttr("src", blog.image)} alt="Blog Images"${_scopeId}><div class="post-meta mt-20"${_scopeId}><div class="post-author"${_scopeId}><img class="img-fluid avatar-96"${ssrRenderAttr("src", blog.authorThumb)} alt="avatar"${_scopeId}> ${ssrInterpolate(blog.authorName)}</div><div class="post-date"${_scopeId}><span class="far fa-calendar meta-icon"${_scopeId}></span> ${ssrInterpolate(blog.postDate)}</div></div></div>`);
        } else {
          return [
            createVNode("div", { class: "post-blog-thumbnail" }, [
              createVNode("img", {
                class: "img-fluid",
                src: blog.image,
                alt: "Blog Images"
              }, null, 8, ["src"]),
              createVNode("div", { class: "post-meta mt-20" }, [
                createVNode("div", { class: "post-author" }, [
                  createVNode("img", {
                    class: "img-fluid avatar-96",
                    src: blog.authorThumb,
                    alt: "avatar"
                  }, null, 8, ["src"]),
                  createTextVNode(" " + toDisplayString(blog.authorName), 1)
                ]),
                createVNode("div", { class: "post-date" }, [
                  createVNode("span", { class: "far fa-calendar meta-icon" }),
                  createTextVNode(" " + toDisplayString(blog.postDate), 1)
                ])
              ])
            ])
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`<div class="post-info lg-blog-post-info mt-20"><h4 class="post-title">`);
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
    _push(`</h4><div class="post-excerpt mt-15"><p>${ssrInterpolate(blog.desc)}</p></div><div class="btn-text mt-15">`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: `/blog/${blog.slug}`
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Read More <i class="ms-1 button-icon fas fa-arrow-right ms-1"${_scopeId}></i>`);
        } else {
          return [
            createTextVNode(" Read More "),
            createVNode("i", { class: "ms-1 button-icon fas fa-arrow-right ms-1" })
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div></div></div>`);
  });
  _push(`<!--]--></div><div class="col-lg-6 blog-list-service"><!--[-->`);
  ssrRenderList($data.data.blogPosts.slice(0, 3), (blog) => {
    _push(`<div class="single-blog-lg-list wow move-up">`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: `/blog/${blog.slug}`
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="post-blog-thumbnail"${_scopeId}><img class="img-fluid"${ssrRenderAttr("src", blog.image)} alt="Blog Images"${_scopeId}><div class="post-meta mt-20"${_scopeId}><div class="post-author"${_scopeId}><img class="img-fluid avatar-96"${ssrRenderAttr("src", blog.authorThumb)} alt="author thumb"${_scopeId}> ${ssrInterpolate(blog.authorName)}</div></div></div>`);
        } else {
          return [
            createVNode("div", { class: "post-blog-thumbnail" }, [
              createVNode("img", {
                class: "img-fluid",
                src: blog.image,
                alt: "Blog Images"
              }, null, 8, ["src"]),
              createVNode("div", { class: "post-meta mt-20" }, [
                createVNode("div", { class: "post-author" }, [
                  createVNode("img", {
                    class: "img-fluid avatar-96",
                    src: blog.authorThumb,
                    alt: "author thumb"
                  }, null, 8, ["src"]),
                  createTextVNode(" " + toDisplayString(blog.authorName), 1)
                ])
              ])
            ])
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`<div class="post-info lg-blog-post-info"><div class="post-meta mb-10"><div class="post-date"><span class="far fa-calendar meta-icon"></span> ${ssrInterpolate(blog.postDate)}</div></div><h5 class="post-title">`);
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
    _push(`</h5></div></div>`);
  });
  _push(`<!--]--></div></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/BlogStyleTwo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const BlogStyleTwo = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    HeaderProcessing: __nuxt_component_0,
    HeroService: __nuxt_component_1,
    FeatureGallery,
    CompanyHistory,
    ServiceStyleTwo,
    FourSteps,
    CtaThree: __nuxt_component_2,
    CaseStudiesSectionTwo,
    PricingOne,
    BlogStyleTwo,
    ContactUsTwo,
    BrandLogoCarousel: __nuxt_component_2$1,
    Footer: __nuxt_component_3,
    OffCanvasMobileMenu: __nuxt_component_4,
    SearchOverlay: __nuxt_component_6
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HeaderProcessing = __nuxt_component_0;
  const _component_HeroService = __nuxt_component_1;
  const _component_FeatureGallery = resolveComponent("FeatureGallery");
  const _component_CompanyHistory = resolveComponent("CompanyHistory");
  const _component_ServiceStyleTwo = resolveComponent("ServiceStyleTwo");
  const _component_FourSteps = resolveComponent("FourSteps");
  const _component_CtaThree = __nuxt_component_2;
  const _component_CaseStudiesSectionTwo = resolveComponent("CaseStudiesSectionTwo");
  const _component_PricingOne = resolveComponent("PricingOne");
  const _component_BlogStyleTwo = resolveComponent("BlogStyleTwo");
  const _component_ContactUsTwo = resolveComponent("ContactUsTwo");
  const _component_BrandLogoCarousel = __nuxt_component_2$1;
  const _component_Footer = __nuxt_component_3;
  const _component_OffCanvasMobileMenu = __nuxt_component_4;
  const _component_SearchOverlay = __nuxt_component_6;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-container" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_HeaderProcessing, null, null, _parent));
  _push(ssrRenderComponent(_component_HeroService, null, null, _parent));
  _push(ssrRenderComponent(_component_FeatureGallery, null, null, _parent));
  _push(ssrRenderComponent(_component_CompanyHistory, null, null, _parent));
  _push(ssrRenderComponent(_component_ServiceStyleTwo, { class: "bg-gray" }, null, _parent));
  _push(ssrRenderComponent(_component_FourSteps, null, null, _parent));
  _push(ssrRenderComponent(_component_CtaThree, null, null, _parent));
  _push(ssrRenderComponent(_component_CaseStudiesSectionTwo, null, null, _parent));
  _push(ssrRenderComponent(_component_PricingOne, null, null, _parent));
  _push(ssrRenderComponent(_component_BlogStyleTwo, null, null, _parent));
  _push(ssrRenderComponent(_component_ContactUsTwo, null, null, _parent));
  _push(ssrRenderComponent(_component_BrandLogoCarousel, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(ssrRenderComponent(_component_OffCanvasMobileMenu, null, null, _parent));
  _push(ssrRenderComponent(_component_SearchOverlay, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Service.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Service = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Service as default };
//# sourceMappingURL=Service-39fa9a86.mjs.map
