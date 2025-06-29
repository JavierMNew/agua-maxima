import { renderers } from "../../renderers.mjs";
const prerender = false;
async function POST({ request }) {
  try {
    console.log("=== API Contact - Inicio ===");
    const nodemailer = await import("nodemailer");
    console.log("Nodemailer importado correctamente");
    let data;
    try {
      const requestText = await request.text();
      console.log("Request body como texto:", requestText);
      if (!requestText || requestText.trim() === "") {
        throw new Error("Request body está vacío");
      }
      data = JSON.parse(requestText);
      console.log("Datos recibidos:", data);
    } catch (parseError) {
      console.error("Error parsing JSON:", parseError);
      return new Response(
        JSON.stringify({ success: false, message: "Datos del formulario inválidos" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const { nombre, telefono, email, tema, mensaje } = data;
    if (!nombre || !telefono || !email || !tema || !mensaje) {
      console.error("Faltan datos requeridos:", { nombre, telefono, email, tema, mensaje });
      return new Response(
        JSON.stringify({ success: false, message: "Faltan datos requeridos" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const temasMap = {
      "solicitar-entrega": "🚚 Solicitar entrega de agua",
      "informacion-productos": "💧 Información de productos",
      "precios-tarifas": "💰 Precios y tarifas",
      "servicio-cliente": "🤝 Servicio al cliente",
      "reclamos-sugerencias": "📝 Reclamos o sugerencias",
      "convenios-empresas": "🏢 Convenios para empresas",
      "otros": "❓ Otros temas"
    };
    const temaTexto = temasMap[tema] || tema;
    const transporter = nodemailer.default.createTransport({
      service: "gmail",
      auth: {
        user: "javiernew638@gmail.com",
        pass: "qkyc utgq upcy ieoq"
      }
    });
    console.log("Transportador creado");
    const mailOptions = {
      from: `"${nombre}" <${email}>`,
      to: "javiernew638@gmail.com",
      subject: `Nueva consulta: ${temaTexto}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #0288c7; color: white; padding: 20px; text-align: center;">
            <h1>💧 Agua Máxima - Nueva Consulta</h1>
          </div>
          
          <div style="padding: 20px; background-color: #f8f9fa;">
            <h2 style="color: #083049;">Información del cliente:</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px; font-weight: bold; color: #083049;">Nombre:</td>
                <td style="padding: 8px;">${nombre}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold; color: #083049;">Email:</td>
                <td style="padding: 8px;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold; color: #083049;">Teléfono:</td>
                <td style="padding: 8px;">${telefono}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold; color: #083049;">Tema:</td>
                <td style="padding: 8px;">${temaTexto}</td>
              </tr>
            </table>
            
            <h3 style="color: #083049; margin-top: 20px;">Mensaje:</h3>
            <div style="background-color: white; padding: 15px; border-left: 4px solid #0288c7; margin: 10px 0;">
              ${mensaje}
            </div>
          </div>
          
          <div style="background-color: #083049; color: white; padding: 15px; text-align: center;">
            <p style="margin: 0;">📞 Responder por WhatsApp: +52 961 123 4567</p>
          </div>
        </div>
      `
    };
    console.log("Intentando enviar email con opciones:", {
      from: mailOptions.from,
      to: mailOptions.to,
      subject: mailOptions.subject
    });
    const info = await transporter.sendMail(mailOptions);
    console.log("Email enviado exitosamente:", info.messageId);
    return new Response(
      JSON.stringify({ success: true, message: "Email enviado correctamente" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  } catch (error) {
    console.error("Error detallado al enviar email:", error);
    console.error("Stack trace:", error.stack);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Error al enviar el email",
        error: error.message
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
}
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
