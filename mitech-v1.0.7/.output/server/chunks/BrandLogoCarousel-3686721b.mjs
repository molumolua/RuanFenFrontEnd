import { _ as __nuxt_component_1$1 } from './server.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Autoplay } from 'swiper/core';
import { resolveComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

const logoList = [
  {
    image: "/images/brand/client-logo-01.png",
    hoverImage: "/images/brand/client-logo-01-hover.png"
  },
  {
    image: "/images/brand/client-logo-02.png",
    hoverImage: "/images/brand/client-logo-02-hover.png"
  },
  {
    image: "/images/brand/client-logo-03.png",
    hoverImage: "/images/brand/client-logo-03-hover.png"
  },
  {
    image: "/images/brand/client-logo-04.png",
    hoverImage: "/images/brand/client-logo-04-hover.png"
  },
  {
    image: "/images/brand/client-logo-05.png",
    hoverImage: "/images/brand/client-logo-05-hover.png"
  },
  {
    image: "/images/brand/client-logo-06.png",
    hoverImage: "/images/brand/client-logo-06-hover.png"
  },
  {
    image: "/images/brand/client-logo-07.png",
    hoverImage: "/images/brand/client-logo-07-hover.png"
  },
  {
    image: "/images/brand/client-logo-08.png",
    hoverImage: "/images/brand/client-logo-08-hover.png"
  }
];
const data = {
  logoList
};
SwiperCore.use([Autoplay]);
const _sfc_main = {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      data,
      swiperOptions: {
        breakpoints: {
          1499: {
            slidesPerView: 6
          },
          991: {
            slidesPerView: 4
          },
          767: {
            slidesPerView: 3
          },
          320: {
            slidesPerView: 2
          }
        }
      }
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  const _component_nuxt_link = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "brand-logo-slider-area section-space--ptb_60" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-12"><div class="brand-logo-slider__container-area"><div class="brand-logo-slider__container"><div class="brand-logo-slider__one">`);
  _push(ssrRenderComponent(_component_swiper, {
    "space-between": 30,
    speed: 1e3,
    loop: false,
    autoplay: { "delay": 3e3 },
    breakpoints: $data.swiperOptions.breakpoints
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($data.data.logoList, (logo) => {
          _push2(ssrRenderComponent(_component_swiper_slide, {
            class: "brand-logo brand-logo--slider",
            key: logo.id
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<div class="brand-logo__image"${_scopeId3}><img${ssrRenderAttr("src", logo.image)} class="img-fluid" alt="logo"${_scopeId3}></div><div class="brand-logo__image-hover"${_scopeId3}><img${ssrRenderAttr("src", logo.hoverImage)} class="img-fluid" alt="logo"${_scopeId3}></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "brand-logo__image" }, [
                          createVNode("img", {
                            src: logo.image,
                            class: "img-fluid",
                            alt: "logo"
                          }, null, 8, ["src"])
                        ]),
                        createVNode("div", { class: "brand-logo__image-hover" }, [
                          createVNode("img", {
                            src: logo.hoverImage,
                            class: "img-fluid",
                            alt: "logo"
                          }, null, 8, ["src"])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(_component_nuxt_link, { to: "/" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "brand-logo__image" }, [
                        createVNode("img", {
                          src: logo.image,
                          class: "img-fluid",
                          alt: "logo"
                        }, null, 8, ["src"])
                      ]),
                      createVNode("div", { class: "brand-logo__image-hover" }, [
                        createVNode("img", {
                          src: logo.hoverImage,
                          class: "img-fluid",
                          alt: "logo"
                        }, null, 8, ["src"])
                      ])
                    ]),
                    _: 2
                  }, 1024)
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($data.data.logoList, (logo) => {
            return openBlock(), createBlock(_component_swiper_slide, {
              class: "brand-logo brand-logo--slider",
              key: logo.id
            }, {
              default: withCtx(() => [
                createVNode(_component_nuxt_link, { to: "/" }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "brand-logo__image" }, [
                      createVNode("img", {
                        src: logo.image,
                        class: "img-fluid",
                        alt: "logo"
                      }, null, 8, ["src"])
                    ]),
                    createVNode("div", { class: "brand-logo__image-hover" }, [
                      createVNode("img", {
                        src: logo.hoverImage,
                        class: "img-fluid",
                        alt: "logo"
                      }, null, 8, ["src"])
                    ])
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BrandLogoCarousel.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_2 as _ };
//# sourceMappingURL=BrandLogoCarousel-3686721b.mjs.map
