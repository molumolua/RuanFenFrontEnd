import __nuxt_component_0 from './SectionTitle-b03cc0d0.mjs';
import SwiperCore, { Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { d as data } from './testimonial-a07af300.mjs';
import { resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

SwiperCore.use([Pagination]);
const _sfc_main = {
  components: {
    Swiper,
    SwiperSlide,
    SectionTitle: () => import('./SectionTitle-b03cc0d0.mjs')
  },
  data() {
    return {
      data,
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination-t01",
          type: "bullets",
          clickable: true
        },
        breakpoints: {
          992: {
            slidesPerView: 2
          },
          320: {
            slidesPerView: 1
          }
        }
      }
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SectionTitle = __nuxt_component_0;
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "testimonial-slider-area section-space--ptb_120 bg-gray" }, _attrs))}><div class="container"><div class="row"><div class="col-12">`);
  _push(ssrRenderComponent(_component_SectionTitle, {
    class: "text-center section-space--mb_60",
    title: $data.data.sectionTitle,
    subTitle: $data.data.sectionSubTitle
  }, null, _parent));
  _push(`<div class="testimonial-slider"><div class="testimonial-slider__container"><div class="testimonial-slider__wrapper">`);
  _push(ssrRenderComponent(_component_swiper, {
    "space-between": 30,
    speed: 1e3,
    loop: false,
    breakpoints: $data.swiperOptions.breakpoints,
    pagination: $data.swiperOptions.pagination
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($data.data.testimonials, (testimonial) => {
          _push2(ssrRenderComponent(_component_swiper_slide, {
            key: testimonial.id
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="testimonial-slider__one wow move-up"${_scopeId2}><div class="testimonial-slider--info"${_scopeId2}><div class="testimonial-slider__media"${_scopeId2}><img${ssrRenderAttr("src", testimonial.thumb)} class="img-fluid" alt="client thumbnail"${_scopeId2}></div><div class="testimonial-slider__author"${_scopeId2}><div class="testimonial-rating"${_scopeId2}><span class="fa fa-star"${_scopeId2}></span><span class="fa fa-star"${_scopeId2}></span><span class="fa fa-star"${_scopeId2}></span><span class="fa fa-star"${_scopeId2}></span><span class="fa fa-star"${_scopeId2}></span></div><div class="author-info"${_scopeId2}><h6 class="name"${_scopeId2}>${ssrInterpolate(testimonial.name)}</h6><span class="designation"${_scopeId2}>${ssrInterpolate(testimonial.designation)}</span></div></div></div><div class="testimonial-slider__text"${_scopeId2}>${ssrInterpolate(testimonial.desc)}</div></div>`);
              } else {
                return [
                  createVNode("div", { class: "testimonial-slider__one wow move-up" }, [
                    createVNode("div", { class: "testimonial-slider--info" }, [
                      createVNode("div", { class: "testimonial-slider__media" }, [
                        createVNode("img", {
                          src: testimonial.thumb,
                          class: "img-fluid",
                          alt: "client thumbnail"
                        }, null, 8, ["src"])
                      ]),
                      createVNode("div", { class: "testimonial-slider__author" }, [
                        createVNode("div", { class: "testimonial-rating" }, [
                          createVNode("span", { class: "fa fa-star" }),
                          createVNode("span", { class: "fa fa-star" }),
                          createVNode("span", { class: "fa fa-star" }),
                          createVNode("span", { class: "fa fa-star" }),
                          createVNode("span", { class: "fa fa-star" })
                        ]),
                        createVNode("div", { class: "author-info" }, [
                          createVNode("h6", { class: "name" }, toDisplayString(testimonial.name), 1),
                          createVNode("span", { class: "designation" }, toDisplayString(testimonial.designation), 1)
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "testimonial-slider__text" }, toDisplayString(testimonial.desc), 1)
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
          (openBlock(true), createBlock(Fragment, null, renderList($data.data.testimonials, (testimonial) => {
            return openBlock(), createBlock(_component_swiper_slide, {
              key: testimonial.id
            }, {
              default: withCtx(() => [
                createVNode("div", { class: "testimonial-slider__one wow move-up" }, [
                  createVNode("div", { class: "testimonial-slider--info" }, [
                    createVNode("div", { class: "testimonial-slider__media" }, [
                      createVNode("img", {
                        src: testimonial.thumb,
                        class: "img-fluid",
                        alt: "client thumbnail"
                      }, null, 8, ["src"])
                    ]),
                    createVNode("div", { class: "testimonial-slider__author" }, [
                      createVNode("div", { class: "testimonial-rating" }, [
                        createVNode("span", { class: "fa fa-star" }),
                        createVNode("span", { class: "fa fa-star" }),
                        createVNode("span", { class: "fa fa-star" }),
                        createVNode("span", { class: "fa fa-star" }),
                        createVNode("span", { class: "fa fa-star" })
                      ]),
                      createVNode("div", { class: "author-info" }, [
                        createVNode("h6", { class: "name" }, toDisplayString(testimonial.name), 1),
                        createVNode("span", { class: "designation" }, toDisplayString(testimonial.designation), 1)
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "testimonial-slider__text" }, toDisplayString(testimonial.desc), 1)
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
  _push(`</div></div><div class="swiper-pagination swiper-pagination-t01 section-space--mt_30 text-center"></div></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/TestimonialTwo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TestimonialTwo = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { TestimonialTwo as T };
//# sourceMappingURL=TestimonialTwo-77c88a65.mjs.map
