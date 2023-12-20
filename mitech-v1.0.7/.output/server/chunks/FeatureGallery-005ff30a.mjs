import { _ as __nuxt_component_0 } from './FeatureItemTwo-cd355d93.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { d as data } from './service-6308e97d.mjs';
import { resolveComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main = {
  components: {
    Swiper,
    SwiperSlide,
    FeatureItemTwo: __nuxt_component_0
  },
  data() {
    return {
      data,
      swiperOptions: {
        breakpoints: {
          1200: {
            slidesPerView: 4
          },
          992: {
            slidesPerView: 3
          },
          576: {
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
  const _component_FeatureItemTwo = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "feature-images-wrapper position-relative" }, _attrs))}><div class="service-slider__container"><div class="service-slider__wrapper feature-images__three">`);
  _push(ssrRenderComponent(_component_swiper, {
    speed: 1e3,
    loop: false,
    breakpoints: $data.swiperOptions.breakpoints
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($data.data.services.slice(32, 37), (service) => {
          _push2(ssrRenderComponent(_component_swiper_slide, {
            key: service.id
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_FeatureItemTwo, { service }, null, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(_component_FeatureItemTwo, { service }, null, 8, ["service"])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($data.data.services.slice(32, 37), (service) => {
            return openBlock(), createBlock(_component_swiper_slide, {
              key: service.id
            }, {
              default: withCtx(() => [
                createVNode(_component_FeatureItemTwo, { service }, null, 8, ["service"])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/FeatureGallery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FeatureGallery = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { FeatureGallery as F };
//# sourceMappingURL=FeatureGallery-005ff30a.mjs.map
