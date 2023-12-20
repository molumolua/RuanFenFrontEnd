import { _ as __nuxt_component_0, a as __nuxt_component_1$2 } from './VideoWithImages-0ba18ea3.mjs';
import { _ as __nuxt_component_1$1 } from './server.mjs';
import { d as data } from './hero-2aa9cd53.mjs';
import { A as AppointmentForm } from './AppointmentForm-bc318ac9.mjs';
import { useSSRContext, mergeProps, withCtx, createTextVNode, createVNode, resolveComponent } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { _ as __nuxt_component_4 } from './FunFactThree-568dbb50.mjs';
import { d as data$1 } from './cta-0c725fc4.mjs';
import { _ as __nuxt_component_2 } from './BrandLogoCarousel-3686721b.mjs';
import { _ as __nuxt_component_3$1 } from './CtaContactTwo-c876b135.mjs';
import { _ as __nuxt_component_3$2, a as __nuxt_component_4$1 } from './OffCanvasMobileMenu-4675e8aa.mjs';
import { _ as __nuxt_component_6 } from './SearchOverlay-4dc97e85.mjs';
import { S as ServiceStyleThree } from './ServiceStyleThree-0c11ff0c.mjs';
import { T as TestimonialTwo } from './TestimonialTwo-77c88a65.mjs';
import './paths.mjs';
import 'ufo';
import './config.mjs';
import 'destr';
import 'scule';
import './HeaderTop-a728fcac.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
import 'defu';
import './funfact-d55c6eae.mjs';
import 'swiper/vue';
import 'swiper/core';
import './service-6308e97d.mjs';
import './SectionTitle-b03cc0d0.mjs';
import './testimonial-a07af300.mjs';

const _sfc_main$4 = {
  components: {
    AppointmentForm
  },
  data() {
    return {
      data
    };
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "processing-hero bg-cover",
    style: { backgroundImage: `url(${$data.data.heroProcessing.bgImg})` }
  }, _attrs))}><div class="container"><div class="row align-items-center"><div class="col-lg-8 col-md-7"><div class="processing-hero-text wow move-up"><h6>${ssrInterpolate($data.data.heroProcessing.subTitle)}</h6><h1 class="font-weight--reguler mb-15">${$data.data.heroProcessing.title}</h1><p>${ssrInterpolate($data.data.heroProcessing.desc)}</p><div class="hero-button mt-30">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/about",
    class: "btn btn--secondary"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Free Sample`);
      } else {
        return [
          createTextVNode("Free Sample")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="hero-popup-video video-popup"><a href="https://www.youtube.com/watch?v=eS9Qm4AOOBY" target="_blank" class="video-link"><div class="video-content"><div class="video-play"><span class="video-play-icon"><i class="fa fa-play"></i></span></div><div class="video-text">${ssrInterpolate($data.data.heroProcessing.videoText)}</div></div></a></div></div></div></div><div class="col-lg-4 col-md-5"><div class="processing-hero-images-wrap wow move-up"><div class="processing-hero-images"><img class="img-fluid"${ssrRenderAttr("src", $data.data.heroProcessing.image)} alt="hero image"></div></div></div></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroProcessing.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = {
  data() {
    return {
      data: data$1
    };
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "processing-computing-area bg-gray-3" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-12"><div class="computing-info-box text-center"><h2>${ssrInterpolate($data.data.ctaTwo.title)}</h2><div class="section-under-heading text-center mt-30">${ssrInterpolate($data.data.ctaTwo.subTitle)} `);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/about" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Take the challenge!`);
      } else {
        return [
          createTextVNode("Take the challenge!")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CtaTwo.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_VideoWithImages = __nuxt_component_1$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "accordion-wrapper section-space--ptb_100" }, _attrs))}><div class="container-fluid"><div class="row align-items-center"><div class="col-lg-6"><div class="faq-wrapper faq-custom-col"><div class="section-title section-space--mb_40"><h6 class="section-sub-title mb-20">Our company</h6><h3 class="heading">Share the joy of achieving <span> glorious moments</span> &amp; climbed up the top.</h3></div><div id="accordionExample"><div class="card"><h2 class="card-header" id="headingOne"><button class="btn faq-title btn-block btn-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> How can we help your business? <span><i class="fas fa-chevron-down"></i><i class="fas fa-chevron-up"></i></span></button></h2><div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample"><div class="card-body"> Through the collaboration with customers in discussing needs and demand, we&#39;re able to attain mutual understanding, gain customer trust to offer appropriate advice, and bring about suggestions on suitable technology to transform your business. </div></div></div><div class="card"><h2 class="card-header" id="headingTwo"><button class="btn faq-title btn-block btn-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> How working process is simplified? <span><i class="fas fa-chevron-down"></i><i class="fas fa-chevron-up"></i></span></button></h2><div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample"><div class="card-body"> Mitech takes into consideration every little detail to make sure the system run smoothly and responsively. Mitech employs a new technique called Minified Technology for securing customers&#39; database &amp; building up highly confidential firewalls. </div></div></div><div class="card"><h2 class="card-header" id="headingThree"><button class="btn faq-title btn-block btn-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> How can we help your business? <span><i class="fas fa-chevron-down"></i><i class="fas fa-chevron-up"></i></span></button></h2><div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample"><div class="card-body"> Through the collaboration with customers in discussing needs and demand, we&#39;re able to attain mutual understanding, gain customer trust to offer appropriate advice, and bring about suggestions on suitable technology to transform your business. </div></div></div></div></div></div><div class="col-lg-6">`);
  _push(ssrRenderComponent(_component_VideoWithImages, null, null, _parent));
  _push(`</div></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/AccordionWrapper.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const AccordionWrapper = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_link = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "feature-large-images-wrapper section-space--ptb_100" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-12"><div class="section-title-wrap text-center section-space--mb_30"><h6 class="section-sub-title mb-20">Optimal Technology Solutions</h6><h3 class="heading">Preparing for your success, <br> we provide <span class="text-color-primary">truly prominent IT solutions.</span></h3></div></div></div><div class="row"><div class="col-12"><div class="row"><div class="col-lg-3 col-md-6 mt-30">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/",
    class: "box-large-image__two"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="box-large-image__two__box"${_scopeId}><div class="box-large-image__midea"${_scopeId}><div class="single-gallery__thum bg-item-images bg-img" style="${ssrRenderStyle({ backgroundImage: `url('/images/box-image/home-processing-software-image-01.jpg')` })}"${_scopeId}></div></div><div class="box-info"${_scopeId}><h5 class="heading"${_scopeId}>IT Design</h5><div class="box-more-info"${_scopeId}><div class="text"${_scopeId}>We provide the most responsive and functional IT design for companies and businesses worldwide.</div><div class="btn"${_scopeId}><i class="button-icon fas fa-arrow-right ms-1"${_scopeId}></i></div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "box-large-image__two__box" }, [
            createVNode("div", { class: "box-large-image__midea" }, [
              createVNode("div", {
                class: "single-gallery__thum bg-item-images bg-img",
                style: { backgroundImage: `url('/images/box-image/home-processing-software-image-01.jpg')` }
              }, null, 4)
            ]),
            createVNode("div", { class: "box-info" }, [
              createVNode("h5", { class: "heading" }, "IT Design"),
              createVNode("div", { class: "box-more-info" }, [
                createVNode("div", { class: "text" }, "We provide the most responsive and functional IT design for companies and businesses worldwide."),
                createVNode("div", { class: "btn" }, [
                  createVNode("i", { class: "button-icon fas fa-arrow-right ms-1" })
                ])
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="col-lg-6 col-md-6 mt-30">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/",
    class: "box-large-image__two"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="box-large-image__two__box"${_scopeId}><div class="box-large-image__midea"${_scopeId}><div class="single-gallery__thum bg-item-images bg-img" style="${ssrRenderStyle({ backgroundImage: `url('/images/box-image/home-processing-software-image-02.jpg')` })}"${_scopeId}></div></div><div class="box-info"${_scopeId}><h5 class="heading"${_scopeId}>IT Management</h5><div class="box-more-info"${_scopeId}><div class="text"${_scopeId}>It\u2019s possible to simultaneously manage and transform key information from one server to another.</div><div class="btn"${_scopeId}><i class="button-icon fas fa-arrow-right ms-1"${_scopeId}></i></div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "box-large-image__two__box" }, [
            createVNode("div", { class: "box-large-image__midea" }, [
              createVNode("div", {
                class: "single-gallery__thum bg-item-images bg-img",
                style: { backgroundImage: `url('/images/box-image/home-processing-software-image-02.jpg')` }
              }, null, 4)
            ]),
            createVNode("div", { class: "box-info" }, [
              createVNode("h5", { class: "heading" }, "IT Management"),
              createVNode("div", { class: "box-more-info" }, [
                createVNode("div", { class: "text" }, "It\u2019s possible to simultaneously manage and transform key information from one server to another."),
                createVNode("div", { class: "btn" }, [
                  createVNode("i", { class: "button-icon fas fa-arrow-right ms-1" })
                ])
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="col-lg-3 col-md-6 mt-30">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/",
    class: "box-large-image__two"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="box-large-image__two__box"${_scopeId}><div class="box-large-image__midea"${_scopeId}><div class="single-gallery__thum bg-item-images bg-img" style="${ssrRenderStyle({ backgroundImage: `url('/images/box-image/home-processing-software-image-03.jpg')` })}"${_scopeId}></div></div><div class="box-info"${_scopeId}><h5 class="heading"${_scopeId}>Data Security</h5><div class="box-more-info"${_scopeId}><div class="text"${_scopeId}>Back up your database, store in a safe and secure place while still maintaining its accessibility.</div><div class="btn"${_scopeId}><i class="button-icon fas fa-arrow-right ms-1"${_scopeId}></i></div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "box-large-image__two__box" }, [
            createVNode("div", { class: "box-large-image__midea" }, [
              createVNode("div", {
                class: "single-gallery__thum bg-item-images bg-img",
                style: { backgroundImage: `url('/images/box-image/home-processing-software-image-03.jpg')` }
              }, null, 4)
            ]),
            createVNode("div", { class: "box-info" }, [
              createVNode("h5", { class: "heading" }, "Data Security"),
              createVNode("div", { class: "box-more-info" }, [
                createVNode("div", { class: "text" }, "Back up your database, store in a safe and secure place while still maintaining its accessibility."),
                createVNode("div", { class: "btn" }, [
                  createVNode("i", { class: "button-icon fas fa-arrow-right ms-1" })
                ])
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="col-lg-4 col-md-6 mt-30">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/",
    class: "box-large-image__two"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="box-large-image__two__box"${_scopeId}><div class="box-large-image__midea"${_scopeId}><div class="single-gallery__thum bg-item-images bg-img" style="${ssrRenderStyle({ backgroundImage: `url('/images/box-image/home-processing-software-image-04.jpg')` })}"${_scopeId}></div></div><div class="box-info"${_scopeId}><h5 class="heading"${_scopeId}>Business Reform</h5><div class="box-more-info"${_scopeId}><div class="text"${_scopeId}>We provide the most responsive and functional IT design for companies and businesses worldwide.</div><div class="btn"${_scopeId}><i class="button-icon fas fa-arrow-right ms-1"${_scopeId}></i></div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "box-large-image__two__box" }, [
            createVNode("div", { class: "box-large-image__midea" }, [
              createVNode("div", {
                class: "single-gallery__thum bg-item-images bg-img",
                style: { backgroundImage: `url('/images/box-image/home-processing-software-image-04.jpg')` }
              }, null, 4)
            ]),
            createVNode("div", { class: "box-info" }, [
              createVNode("h5", { class: "heading" }, "Business Reform"),
              createVNode("div", { class: "box-more-info" }, [
                createVNode("div", { class: "text" }, "We provide the most responsive and functional IT design for companies and businesses worldwide."),
                createVNode("div", { class: "btn" }, [
                  createVNode("i", { class: "button-icon fas fa-arrow-right ms-1" })
                ])
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="col-lg-4 col-md-6 mt-30">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/",
    class: "box-large-image__two"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="box-large-image__two__box"${_scopeId}><div class="box-large-image__midea"${_scopeId}><div class="single-gallery__thum bg-item-images bg-img" style="${ssrRenderStyle({ backgroundImage: `url('/images/box-image/mitech-home-infotechno-box-large-image_02-330x330.jpg')` })}"${_scopeId}></div></div><div class="box-info"${_scopeId}><h5 class="heading"${_scopeId}>Infrastructure Plan</h5><div class="box-more-info"${_scopeId}><div class="text"${_scopeId}>We provide the most responsive and functional IT design for companies and businesses worldwide.</div><div class="btn"${_scopeId}><i class="button-icon fas fa-arrow-right ms-1"${_scopeId}></i></div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "box-large-image__two__box" }, [
            createVNode("div", { class: "box-large-image__midea" }, [
              createVNode("div", {
                class: "single-gallery__thum bg-item-images bg-img",
                style: { backgroundImage: `url('/images/box-image/mitech-home-infotechno-box-large-image_02-330x330.jpg')` }
              }, null, 4)
            ]),
            createVNode("div", { class: "box-info" }, [
              createVNode("h5", { class: "heading" }, "Infrastructure Plan"),
              createVNode("div", { class: "box-more-info" }, [
                createVNode("div", { class: "text" }, "We provide the most responsive and functional IT design for companies and businesses worldwide."),
                createVNode("div", { class: "btn" }, [
                  createVNode("i", { class: "button-icon fas fa-arrow-right ms-1" })
                ])
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="col-lg-4 col-md-6 mt-30">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/",
    class: "box-large-image__two"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="box-large-image__two__box"${_scopeId}><div class="box-large-image__midea"${_scopeId}><div class="single-gallery__thum bg-item-images bg-img" style="${ssrRenderStyle({ backgroundImage: `url('/images/box-image/mitech-home-infotechno-box-large-image_04-330x330.jpg')` })}"${_scopeId}></div></div><div class="box-info"${_scopeId}><h5 class="heading"${_scopeId}>Firewall Advancement</h5><div class="box-more-info"${_scopeId}><div class="text"${_scopeId}>We provide the most responsive and functional IT design for companies and businesses worldwide.</div><div class="btn"${_scopeId}><i class="button-icon fas fa-arrow-right ms-1"${_scopeId}></i></div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "box-large-image__two__box" }, [
            createVNode("div", { class: "box-large-image__midea" }, [
              createVNode("div", {
                class: "single-gallery__thum bg-item-images bg-img",
                style: { backgroundImage: `url('/images/box-image/mitech-home-infotechno-box-large-image_04-330x330.jpg')` }
              }, null, 4)
            ]),
            createVNode("div", { class: "box-info" }, [
              createVNode("h5", { class: "heading" }, "Firewall Advancement"),
              createVNode("div", { class: "box-more-info" }, [
                createVNode("div", { class: "text" }, "We provide the most responsive and functional IT design for companies and businesses worldwide."),
                createVNode("div", { class: "btn" }, [
                  createVNode("i", { class: "button-icon fas fa-arrow-right ms-1" })
                ])
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="col-lg-12"><div class="feature-list-button-box mt-40 text-center">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/about",
    class: "ht-btn ht-btn-md"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Learn More`);
      } else {
        return [
          createTextVNode("Learn More")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/contact",
    class: "ht-btn ht-btn-md ht-btn--outline"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Contact Us`);
      } else {
        return [
          createTextVNode("Contact Us")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/GalleryOne.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const GalleryOne = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    HeaderProcessing: __nuxt_component_0,
    HeroProcessing: __nuxt_component_1,
    AccordionWrapper,
    ServiceStyleThree,
    FunFactThree: __nuxt_component_4,
    CtaTwo: __nuxt_component_3,
    GalleryOne,
    TestimonialTwo,
    BrandLogoCarousel: __nuxt_component_2,
    CtaContactTwo: __nuxt_component_3$1,
    Footer: __nuxt_component_3$2,
    OffCanvasMobileMenu: __nuxt_component_4$1,
    SearchOverlay: __nuxt_component_6
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HeaderProcessing = __nuxt_component_0;
  const _component_HeroProcessing = __nuxt_component_1;
  const _component_AccordionWrapper = resolveComponent("AccordionWrapper");
  const _component_ServiceStyleThree = resolveComponent("ServiceStyleThree");
  const _component_FunFactThree = __nuxt_component_4;
  const _component_CtaTwo = __nuxt_component_3;
  const _component_GalleryOne = resolveComponent("GalleryOne");
  const _component_TestimonialTwo = resolveComponent("TestimonialTwo");
  const _component_BrandLogoCarousel = __nuxt_component_2;
  const _component_CtaContactTwo = __nuxt_component_3$1;
  const _component_Footer = __nuxt_component_3$2;
  const _component_OffCanvasMobileMenu = __nuxt_component_4$1;
  const _component_SearchOverlay = __nuxt_component_6;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-container" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_HeaderProcessing, null, null, _parent));
  _push(ssrRenderComponent(_component_HeroProcessing, null, null, _parent));
  _push(ssrRenderComponent(_component_AccordionWrapper, null, null, _parent));
  _push(ssrRenderComponent(_component_ServiceStyleThree, null, null, _parent));
  _push(ssrRenderComponent(_component_FunFactThree, null, null, _parent));
  _push(ssrRenderComponent(_component_CtaTwo, null, null, _parent));
  _push(ssrRenderComponent(_component_GalleryOne, null, null, _parent));
  _push(ssrRenderComponent(_component_TestimonialTwo, null, null, _parent));
  _push(ssrRenderComponent(_component_BrandLogoCarousel, null, null, _parent));
  _push(ssrRenderComponent(_component_CtaContactTwo, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(ssrRenderComponent(_component_OffCanvasMobileMenu, null, null, _parent));
  _push(ssrRenderComponent(_component_SearchOverlay, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Processing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Processing = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Processing as default };
//# sourceMappingURL=Processing-79321a5e.mjs.map
