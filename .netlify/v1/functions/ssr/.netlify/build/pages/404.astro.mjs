import { f as createComponent, l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "../chunks/astro/server_DMQip7Ni.mjs";
import "kleur/colors";
import { $ as $$Layout, a as $$SectionContainer } from "../chunks/SectionContainer_BeuoeahX.mjs";
import { renderers } from "../renderers.mjs";
const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionContainer", $$SectionContainer, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col items-center justify-center h-screen"> <h1 class="flex items-center text-[150px] font-bold text-[#0288c7]/20">
4
<img src="public/awkward-seal-awkward.gif" alt="404" loading="lazy" class="size-32 rounded-full mx-4">4
</h1> <p class="text-2xl text-gray-600">¡Ups! Esta página se fue a nadar...</p> <!-- Back to Home --> <!-- <div class="mt-10 text-center">
        <a
          href="/"
          class="inline-flex items-center px-6 py-3 text-[#0288c7] border-2 border-[#0288c7] rounded-lg font-medium hover:bg-[#0288c7] hover:text-white transition-all duration-300 transform hover:scale-105"
        >
          <svg
            class="w-5 h-5 mr-2 transform rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
          Volver al inicio
        </a>
      </div> --> </div> ` })} ` })}`;
}, "C:/Users/javie/agua-maxima/src/pages/404.astro", void 0);
const $$file = "C:/Users/javie/agua-maxima/src/pages/404.astro";
const $$url = "/404";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
