import { f as createComponent, m as maybeRenderHead, r as renderTemplate, l as renderComponent } from "../chunks/astro/server_DMQip7Ni.mjs";
import "kleur/colors";
import { $ as $$Layout, a as $$SectionContainer } from "../chunks/SectionContainer_BeuoeahX.mjs";
import "clsx";
import { renderers } from "../renderers.mjs";
const $$Products = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Sección: Productos y Servicios -->${maybeRenderHead()}<section id="products" class="py-16"> <div class="w-full xl:w-[1120px] mx-auto px-4"> <div class="text-center mb-12"> <h2 class="text-4xl font-bold text-gray-900 mb-6">
Nuestros Productos y Servicios
</h2> <p class="text-lg text-gray-600 max-w-2xl mx-auto">
Ofrecemos una variedad de opciones para satisfacer todas tus necesidades
        de agua purificada.
</p> </div> <!-- Grid de productos --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"> <!-- Garrafones 20L --> <div class="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 overflow-hidden"> <div class="p-6 text-center"> <div class="bg-[#0288c7] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M12 2v20"></path> <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path> </svg> </div> <h3 class="text-xl font-semibold text-gray-900 mb-2">
Garrafones 20L
</h3> <p class="text-gray-600 mb-4">
Perfectos para hogar y oficina. Capacidad familiar con agua
            purificada de máxima calidad.
</p> <ul class="text-sm text-gray-500 mb-6 space-y-1"> <li>• 20 litros de capacidad</li> <li>• Material libre de BPA</li> <li>• Reutilizable y ecológico</li> <li>• Ideal para dispensadores</li> </ul> <button class="bg-[#0288c7] text-white px-4 py-2 rounded-md hover:bg-[#083049] transition-colors duration-300 w-full cursor-pointer">
Solicitar
</button> </div> </div> <!-- Botellas 1L --> <div class="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 overflow-hidden"> <div class="p-6 text-center"> <div class="bg-[#0288c7] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M5 12V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v5"></path> <path d="M5 12v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7"></path> <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"></path> </svg> </div> <h3 class="text-xl font-semibold text-gray-900 mb-2">Botellas 1L</h3> <p class="text-gray-600 mb-4">
Formato personal ideal para llevar contigo. Agua purificada en
            envase práctico.
</p> <ul class="text-sm text-gray-500 mb-6 space-y-1"> <li>• 1 litro de capacidad</li> <li>• Tapón hermético</li> <li>• Fácil transporte</li> <li>• Diseño ergonómico</li> </ul> <button class="bg-[#0288c7] text-white px-4 py-2 rounded-md hover:bg-[#083049] transition-colors duration-300 w-full cursor-pointer">
Solicitar
</button> </div> </div> <!-- Entrega a Domicilio --> <div class="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 overflow-hidden"> <div class="p-6 text-center"> <div class="bg-[#0288c7] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="m8 7 4-4 4 4"></path> <path d="m8 17 4 4 4-4"></path> <path d="M12 3v18"></path> <path d="M8 5h8"></path> <path d="M8 19h8"></path> </svg> </div> <h3 class="text-xl font-semibold text-gray-900 mb-2">
Entrega a Domicilio
</h3> <p class="text-gray-600 mb-4">
Servicio de entrega puntual en tu hogar u oficina. Comodidad
            garantizada.
</p> <ul class="text-sm text-gray-500 mb-6 space-y-1"> <li>• Entregas programadas</li> <li>• Horarios flexibles</li> <li>• Cobertura amplia</li> <li>• Sin costo adicional</li> </ul> <button class="bg-[#0288c7] text-white px-4 py-2 rounded-md hover:bg-[#083049] transition-colors duration-300 w-full cursor-pointer">
Programar
</button> </div> </div> <!-- Venta en Planta --> <div class="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 overflow-hidden"> <div class="p-6 text-center"> <div class="bg-[#0288c7] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path> <polyline points="9,22 9,12 15,12 15,22"></polyline> </svg> </div> <h3 class="text-xl font-semibold text-gray-900 mb-2">
Venta en Planta
</h3> <p class="text-gray-600 mb-4">
Visítanos directamente en nuestra planta purificadora. Precios
            especiales.
</p> <ul class="text-sm text-gray-500 mb-6 space-y-1"> <li>• Precios preferenciales</li> <li>• Recarga inmediata</li> <li>• Horario extendido</li> <li>• Atención personalizada</li> </ul> <button class="bg-[#0288c7] text-white px-4 py-2 rounded-md hover:bg-[#083049] transition-colors duration-300 w-full cursor-pointer">
Ubicación
</button> </div> </div> </div> <!-- Call to Action --> <div class="text-center"> <div class="bg-white p-8 rounded-lg shadow-sm border border-gray-100 max-w-2xl mx-auto"> <h3 class="text-2xl font-semibold text-gray-900 mb-4">
¿Listo para disfrutar agua pura?
</h3> <p class="text-gray-600 mb-6">
Elige la opción que mejor se adapte a tus necesidades y comienza a
          disfrutar de agua de máxima calidad.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a href="/solicitar" class="bg-[#0288c7] text-white px-6 py-3 rounded-md hover:bg-[#083049] transition-colors duration-300 font-semibold">
Solicita tu entrega
</a> <a href="/productos" class="border border-[#0288c7] text-[#0288c7] px-6 py-3 rounded-md hover:bg-[#0288c7] hover:text-white transition-colors duration-300 font-semibold">
Conoce nuestras opciones
</a> </div> </div> </div> </div> </section>`;
}, "C:/Users/javie/agua-maxima/src/components/Products.astro", void 0);
const $$Productos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Productos - Agua Máxima" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionContainer", $$SectionContainer, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Products", $$Products, {})} ` })} ` })}`;
}, "C:/Users/javie/agua-maxima/src/pages/productos.astro", void 0);
const $$file = "C:/Users/javie/agua-maxima/src/pages/productos.astro";
const $$url = "/productos";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Productos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
