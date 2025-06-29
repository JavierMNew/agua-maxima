import { renderers } from "./renderers.mjs";
import { s as serverEntrypointModule } from "./chunks/_@astrojs-ssr-adapter_DYQ_v7bF.mjs";
import { manifest } from "./manifest_U5yCyc2y.mjs";
import { createExports } from "@astrojs/netlify/ssr-function.js";
const serverIslandMap = /* @__PURE__ */ new Map();
;
const _page0 = () => import("./pages/_image.astro.mjs");
const _page1 = () => import("./pages/404.astro.mjs");
const _page2 = () => import("./pages/api/contact.astro.mjs");
const _page3 = () => import("./pages/contacto/exito-correo.astro.mjs");
const _page4 = () => import("./pages/contacto/exito-whatsapp.astro.mjs");
const _page5 = () => import("./pages/contacto.astro.mjs");
const _page6 = () => import("./pages/nosotros.astro.mjs");
const _page7 = () => import("./pages/politicas.astro.mjs");
const _page8 = () => import("./pages/productos.astro.mjs");
const _page9 = () => import("./pages/solicitar/confirmacion-whatsapp.astro.mjs");
const _page10 = () => import("./pages/solicitar/cuenta.astro.mjs");
const _page11 = () => import("./pages/solicitar/rapido.astro.mjs");
const _page12 = () => import("./pages/solicitar.astro.mjs");
const _page13 = () => import("./pages/index.astro.mjs");
const pageMap = /* @__PURE__ */ new Map([
  ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
  ["src/pages/404.astro", _page1],
  ["src/pages/api/contact.js", _page2],
  ["src/pages/contacto/exito-correo.astro", _page3],
  ["src/pages/contacto/exito-whatsapp.astro", _page4],
  ["src/pages/contacto.astro", _page5],
  ["src/pages/nosotros.astro", _page6],
  ["src/pages/politicas.astro", _page7],
  ["src/pages/productos.astro", _page8],
  ["src/pages/solicitar/confirmacion-whatsapp.astro", _page9],
  ["src/pages/solicitar/cuenta.astro", _page10],
  ["src/pages/solicitar/rapido.astro", _page11],
  ["src/pages/solicitar.astro", _page12],
  ["src/pages/index.astro", _page13]
]);
const _manifest = Object.assign(manifest, {
  pageMap,
  serverIslandMap,
  renderers,
  actions: () => import("./_noop-actions.mjs"),
  middleware: () => import("./_astro-internal_middleware.mjs")
});
const _args = {
  "middlewareSecret": "98762c5c-bb77-45a3-99d2-4833dc44c11f"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = "start";
if (_start in serverEntrypointModule) {
  serverEntrypointModule[_start](_manifest, _args);
}
export {
  __astrojsSsrVirtualEntry as default,
  pageMap
};
