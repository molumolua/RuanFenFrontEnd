import __nuxt_component_0 from './SectionTitle-b03cc0d0.mjs';
import __nuxt_component_1 from './CaseStudiesItem-a6cb7c42.mjs';
import { _ as __nuxt_component_1$1 } from './server.mjs';
import SwiperCore, { Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { d as data } from './caseStidies-14b56fd1.mjs';
import { resolveComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

SwiperCore.use([Pagination]);
const _sfc_main = {
  components: {
    Swiper,
    SwiperSlide,
    SectionTitle: () => import('./SectionTitle-b03cc0d0.mjs'),
    CaseStudiesItem: () => import('./CaseStudiesItem-a6cb7c42.mjs')
  },
  data() {
    return {
      data,
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination-project",
          type: "bullets",
          clickable: true
        },
        breakpoints: {
          1200: {
            slidesPerView: 3
          },
          768: {
            slidesPerView: 2
          },
          575: {
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
  const _component_CaseStudiesItem = __nuxt_component_1;
  const _component_nuxt_link = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "projects-wrapper projectinfotechno-bg section-space--ptb_100",
    style: { backgroundImage: `url('/images/patterns/mitech-home-infotechno-case-study-section-bg.png')` }
  }, _attrs))}><div class="container"><div class="row"><div class="col-lg-12">`);
  _push(ssrRenderComponent(_component_SectionTitle, {
    class: "text-center section-space--mb_40",
    title: $data.data.sectionTitle,
    subTitle: $data.data.sectionSubTitle
  }, null, _parent));
  _push(`</div></div><div class="row"><div class="col-12"><div class="projects-wrap">`);
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
        ssrRenderList($data.data.projects, (project) => {
          _push2(ssrRenderComponent(_component_swiper_slide, {
            key: project.id
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_CaseStudiesItem, { project }, null, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(_component_CaseStudiesItem, { project }, null, 8, ["project"])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($data.data.projects, (project) => {
            return openBlock(), createBlock(_component_swiper_slide, {
              key: project.id
            }, {
              default: withCtx(() => [
                createVNode(_component_CaseStudiesItem, { project }, null, 8, ["project"])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="swiper-pagination swiper-pagination-project mt_20 text-center"></div></div><div class="section-under-heading text-center section-space--mt_40">${ssrInterpolate($data.data.underHeading)} `);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
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
  _push(`</div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/CaseStudiesSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CaseStudiesSection = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { CaseStudiesSection as C };
//# sourceMappingURL=CaseStudiesSection-56a6bdb5.mjs.map
