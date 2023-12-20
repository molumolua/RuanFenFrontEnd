import { p as publicAssetsURL } from './paths.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

const _imports_0 = "" + publicAssetsURL("images/banners/home-cybersecurity-contact-bg-image.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "contact-us-area infotechno-contact-us-bg section-space--pt_100 bg-cover",
    style: { backgroundImage: `url('/images/bg/home-infotechno-contact-bg.jpg')` }
  }, _attrs))}><div class="container"><div class="row align-items-center"><div class="col-lg-7"><div class="image"><img class="img-fluid"${ssrRenderAttr("src", _imports_0)} alt="image"></div></div><div class="col-lg-4 ms-auto"><div class="contact-info style-two text-left"><div class="contact-info-title-wrap text-center"><h3 class="heading mb-10">4.9/5.0</h3><div class="ht-star-rating lg-style"><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span></div><p class="sub-text">by 700+ customers for 3200+ clients</p></div><div class="contact-list-item"><a href="tel:190068668" class="single-contact-list"><div class="content-wrap"><div class="content"><div class="icon"><span class="fa fa-phone"></span></div><div class="main-content"><h6 class="heading">Call for advice now!</h6><div class="text">1900 68668</div></div></div></div></a><a href="mailto:hello@mitech.com" class="single-contact-list"><div class="content-wrap"><div class="content"><div class="icon"><span class="far fa-envelope"></span></div><div class="main-content"><h6 class="heading">Say hello</h6><div class="text">hello@mitech.com</div></div></div></div></a></div></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/ContactUsThree.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ContactUsThree = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { ContactUsThree as C };
//# sourceMappingURL=ContactUsThree-09024383.mjs.map
