import { f as createComponent, l as renderComponent, n as renderScript, r as renderTemplate, m as maybeRenderHead } from "../chunks/astro/server_DMQip7Ni.mjs";
import "kleur/colors";
import { $ as $$Layout, a as $$SectionContainer } from "../chunks/SectionContainer_BeuoeahX.mjs";
import { renderers } from "../renderers.mjs";
const $$Contacto = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contacto - Agua Máxima" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionContainer", $$SectionContainer, {}, { "default": async ($$result3) => renderTemplate`  ${maybeRenderHead()}<div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto mt-20"> <div class="rounded-2xl p-8 md:p-12"> <div class="text-center mb-10"> <h3 class="text-3xl font-bold text-gray-900 mb-4">
¿Necesitas ayuda específica?
</h3> <p class="text-gray-600 text-lg">
Selecciona el tema de tu consulta y nos pondremos en contacto
            contigo
</p> </div> <div class="max-w-2xl mx-auto"> <form id="contact-form" class="space-y-6"> <!-- Información personal --> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div> <label for="nombre" class="block text-sm font-semibold text-gray-900 mb-2">Nombre completo *</label> <input type="text" id="nombre" name="nombre" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0288c7] focus:border-transparent outline-none transition-all duration-300" placeholder="Tu nombre completo"> </div> <div> <label for="telefono" class="block text-sm font-semibold text-gray-900 mb-2">Teléfono *</label> <input type="tel" id="telefono" name="telefono" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0288c7] focus:border-transparent outline-none transition-all duration-300" placeholder="+52 961 123 4567"> </div> </div> <div> <label for="email" class="block text-sm font-semibold text-gray-900 mb-2">Correo electrónico *</label> <input type="email" id="email" name="email" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0288c7] focus:border-transparent outline-none transition-all duration-300" placeholder="tu@email.com"> </div> <!-- Selector de tema --> <div> <label for="tema" class="block text-sm font-semibold text-gray-900 mb-2">Tema de consulta *</label> <select id="tema" name="tema" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0288c7] focus:border-transparent outline-none transition-all duration-300 bg-white"> <option value="">Selecciona un tema</option> <option value="solicitar-entrega">🚚 Solicitar entrega de agua</option> <option value="informacion-productos">💧 Información de productos</option> <option value="precios-tarifas">💰 Precios y tarifas</option> <option value="servicio-cliente">🤝 Servicio al cliente</option> <option value="reclamos-sugerencias">📝 Reclamos o sugerencias</option> <option value="convenios-empresas">🏢 Convenios para empresas</option> <option value="otros">❓ Otros temas</option> </select> </div> <!-- Mensaje --> <div> <label for="mensaje" class="block text-sm font-semibold text-gray-900 mb-2">Mensaje *</label> <textarea id="mensaje" name="mensaje" rows="5" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0288c7] focus:border-transparent outline-none resize-none transition-all duration-300" placeholder="Describe tu consulta o solicitud..."></textarea> </div> <!-- Botones --> <div class="flex flex-col sm:flex-row gap-4 pt-6"> <button type="submit" class="flex-1 bg-[#0288c7] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#083049] transition-all duration-300 focus:ring-2 focus:ring-[#0288c7] focus:ring-offset-2 cursor-pointer">
📧 Enviar correo
</button> <button type="button" id="whatsapp-btn" class="flex-1 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300 text-center flex items-center justify-center cursor-pointer" title="Completa todos los campos (incluyendo el mensaje) para enviar por WhatsApp"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"> <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path> <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path> </svg>
WhatsApp directo
</button> </div> <!-- Nota informativa --> <div class="bg-[#bae7fd] border border-[#7dd5fc] rounded-lg p-4 mt-6"> <div class="flex items-start"> <div class="bg-[#0288c7] w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0"> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <circle cx="12" cy="12" r="10"></circle> <path d="M12 16v-4"></path> <path d="M12 8h.01"></path> </svg> </div> <div> <p class="text-sm text-gray-700 font-medium mb-1">
Tiempo de respuesta
</p> <p class="text-sm text-gray-600">
Nos pondremos en contacto contigo en un máximo de 2 horas
                    durante horario laboral (8:00 AM - 6:00 PM). Para consultas
                    urgentes, usa WhatsApp directo.
</p> </div> </div> </div> </form> </div> </div> </div> ` })} ` })} ${renderScript($$result, "C:/Users/javie/agua-maxima/src/pages/contacto.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/javie/agua-maxima/src/pages/contacto.astro", void 0);
const $$file = "C:/Users/javie/agua-maxima/src/pages/contacto.astro";
const $$url = "/contacto";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Contacto,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
