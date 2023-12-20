import { _ as __nuxt_component_0 } from './Header-a5549ad8.mjs';
import { u as useColor } from './state-902b2a76.mjs';
import { useSSRContext, ref, mergeProps } from 'vue';
import axios from 'axios';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { _ as __nuxt_component_3, a as __nuxt_component_4 } from './OffCanvasMobileMenu-4675e8aa.mjs';
import './server.mjs';
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
import './HeaderTop-a728fcac.mjs';

const _sfc_main$1 = {
  mounted() {
    var color = useColor();
    console.log(color.value);
    color.value = "black";
    var color2 = useColor();
    console.log(color2.value);
    const data = ref(null);
    data.value = fetchData();
    console.log("data=", data);
  }
};
const fetchData = async () => {
  try {
    const response = await axios.get("https://api.example.com/data");
  } catch (error) {
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "test-main" }, _attrs))} data-v-4491d539> hhhh!!! <li data-v-4491d539>error!!</li> wuwuwu!! <div class="btn test_todo" data-v-4491d539> test!! </div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TestMain.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-4491d539"]]);
const _sfc_main = {
  components: {
    Header: __nuxt_component_0,
    TestMain: __nuxt_component_1,
    Footer: __nuxt_component_3,
    OffCanvasMobileMenu: __nuxt_component_4
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Header = __nuxt_component_0;
  const _component_TestMain = __nuxt_component_1;
  const _component_Footer = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-container" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(ssrRenderComponent(_component_TestMain, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Test.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Test = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Test as default };
//# sourceMappingURL=Test-1db9e743.mjs.map
