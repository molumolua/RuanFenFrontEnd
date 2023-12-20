import { Swiper, SwiperSlide } from 'swiper/vue';
import { d as data } from './caseStidies-14b56fd1.mjs';
import { resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main$1 = {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      data
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "service-projects-wrapper section-space--pt_100 mb-20" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-12"><div class="section-title-wrap text-center section-space--mb_60"><h6 class="section-sub-title mb-20">${ssrInterpolate($data.data.sectionSubTitle)}</h6><h3 class="heading">${$data.data.sectionTitle}</h3></div></div></div><div class="service-slider__project-active"><div class="service-slider__project">`);
  _push(ssrRenderComponent(_component_swiper, {
    speed: 1e3,
    loop: false
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($data.data.projectsTwo, (project) => {
          _push2(ssrRenderComponent(_component_swiper_slide, {
            key: project.id
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="row"${_scopeId2}><div class="slide-content col-lg-6 col-xl-5 order-2 order-lg-1"${_scopeId2}><div class="service-project-slide-info"${_scopeId2}><h4 class="heading font-weight--reguler mb-10"${_scopeId2}>${ssrInterpolate(project.heading)}</h4><p class="sub-text text-color-primary"${_scopeId2}>${ssrInterpolate(project.category)}</p><div class="text"${_scopeId2}>${ssrInterpolate(project.desc)}</div></div></div><div class="col-lg-6 col-xl-7 order-1 order-lg-2"${_scopeId2}><div class="slide-image"${_scopeId2}><div class="image-wrap"${_scopeId2}><div class="image"${_scopeId2}><img class="img-fluid"${ssrRenderAttr("src", project.image)}${ssrRenderAttr("alt", project.alt)}${_scopeId2}></div></div></div></div></div>`);
              } else {
                return [
                  createVNode("div", { class: "row" }, [
                    createVNode("div", { class: "slide-content col-lg-6 col-xl-5 order-2 order-lg-1" }, [
                      createVNode("div", { class: "service-project-slide-info" }, [
                        createVNode("h4", { class: "heading font-weight--reguler mb-10" }, toDisplayString(project.heading), 1),
                        createVNode("p", { class: "sub-text text-color-primary" }, toDisplayString(project.category), 1),
                        createVNode("div", { class: "text" }, toDisplayString(project.desc), 1)
                      ])
                    ]),
                    createVNode("div", { class: "col-lg-6 col-xl-7 order-1 order-lg-2" }, [
                      createVNode("div", { class: "slide-image" }, [
                        createVNode("div", { class: "image-wrap" }, [
                          createVNode("div", { class: "image" }, [
                            createVNode("img", {
                              class: "img-fluid",
                              src: project.image,
                              alt: project.alt
                            }, null, 8, ["src", "alt"])
                          ])
                        ])
                      ])
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($data.data.projectsTwo, (project) => {
            return openBlock(), createBlock(_component_swiper_slide, {
              key: project.id
            }, {
              default: withCtx(() => [
                createVNode("div", { class: "row" }, [
                  createVNode("div", { class: "slide-content col-lg-6 col-xl-5 order-2 order-lg-1" }, [
                    createVNode("div", { class: "service-project-slide-info" }, [
                      createVNode("h4", { class: "heading font-weight--reguler mb-10" }, toDisplayString(project.heading), 1),
                      createVNode("p", { class: "sub-text text-color-primary" }, toDisplayString(project.category), 1),
                      createVNode("div", { class: "text" }, toDisplayString(project.desc), 1)
                    ])
                  ]),
                  createVNode("div", { class: "col-lg-6 col-xl-7 order-1 order-lg-2" }, [
                    createVNode("div", { class: "slide-image" }, [
                      createVNode("div", { class: "image-wrap" }, [
                        createVNode("div", { class: "image" }, [
                          createVNode("img", {
                            class: "img-fluid",
                            src: project.image,
                            alt: project.alt
                          }, null, 8, ["src", "alt"])
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/CaseStudiesSectionTwo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const CaseStudiesSectionTwo = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const pricingData = [
  {
    plan: "basic",
    icon: "/images/icons/mitech-pricing-box-icon-01-90x90.png",
    price: 19,
    currency: "$",
    period: "/mon",
    isPopular: false,
    active: false,
    lists: [
      "03 projects",
      "Quality & Customer Experience",
      "Try for free, forever!"
    ]
  },
  {
    plan: "Professional",
    icon: "/images/icons/mitech-pricing-box-icon-02-88x88.png",
    price: 99,
    currency: "$",
    period: "/mon",
    isPopular: true,
    active: true,
    lists: [
      "Unlimited project",
      "Power And Predictive Dialing",
      "Quality & Customer Experience",
      "24/7 phone and email support"
    ]
  },
  {
    plan: "Advanced",
    icon: "/images/icons/mitech-pricing-box-icon-03-90x90.png",
    price: 49,
    currency: "$",
    period: "/mon",
    isPopular: false,
    active: false,
    lists: [
      "10 projects",
      "Power And Predictive Dialing",
      "Quality & Customer Experience"
    ]
  }
];
const _sfc_main = {
  data() {
    return {
      pricingData
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "pricing-table-area section-space--pb_70 bg-gradient" }, _attrs))}><div class="pricing-table-title-area position-relative"><div class="container"><div class="row"><div class="col-lg-12"><div class="section-title-wrapper text-center section-space--mb_60 wow move-up"><h6 class="section-sub-title mb-20">Pricing and plan</h6><h3 class="section-title">1 monthly fee for <span>all IT services.</span></h3></div></div></div></div></div><div class="pricing-table-content-area"><div class="container"><div class="row pricing-table-one"><!--[-->`);
  ssrRenderList($data.pricingData, (pricing, index) => {
    _push(`<div class="col-md-6 col-lg-4 pricing-table wow move-up"><div class="pricing-table__inner">`);
    if (pricing.isPopular) {
      _push(`<div class="pricing-table__feature-mark"><span>Popular Choice</span></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<div class="pricing-table__header"><h6 class="sub-title">${ssrInterpolate(pricing.plan)}</h6><div class="pricing-table__image"><img${ssrRenderAttr("src", pricing.icon)} class="img-fluid" alt="icon"></div><div class="pricing-table__price-wrap"><h6 class="currency">${ssrInterpolate(pricing.currency)}</h6><h6 class="price">${ssrInterpolate(pricing.price)}</h6><h6 class="period">${ssrInterpolate(pricing.period)}</h6></div></div><div class="pricing-table__body"><div class="pricing-table__footer"><button class="${ssrRenderClass([{ "ht-btn--outline": !pricing.active }, "ht-btn ht-btn-md"])}">Get started</button></div><ul class="pricing-table__list text-left"><!--[-->`);
    ssrRenderList(pricing.lists, (list) => {
      _push(`<li>${ssrInterpolate(list)}</li>`);
    });
    _push(`<!--]--></ul></div></div></div>`);
  });
  _push(`<!--]--></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/PricingOne.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PricingOne = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { CaseStudiesSectionTwo as C, PricingOne as P };
//# sourceMappingURL=PricingOne-a01fc61a.mjs.map
