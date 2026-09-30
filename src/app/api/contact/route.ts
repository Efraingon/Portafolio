import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, projectType, budgetRange, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Por favor completa todos los campos requeridos." },
        { status: 400 }
      );
    }

    const targetEmail = "efraingon@gmail.com";
    let providerDelivered = false;

    // Intento de envío a través de FormSubmit si el servicio está operativo
    try {
      const emailRes = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          _subject: `💼 Contacto Portafolio: ${name} (${projectType})`,
          _template: "table",
          _captcha: "false",
          _replyto: email,
          "Nombre Cliente": name,
          "Correo Cliente": email,
          "Empresa / Startup": company || "No especificada",
          "Tipo de Proyecto": projectType,
          "Presupuesto Estimado": budgetRange,
          "Detalles del Proyecto": message,
          "Fecha de Envío": new Date().toLocaleString("es-ES"),
        }),
      });

      if (emailRes.ok) {
        const emailData = await emailRes.json();
        if (emailData?.success !== "false") {
          providerDelivered = true;
          console.log(`[CONTACT EMAIL SENT to ${targetEmail}]:`, emailData);
        }
      }
    } catch (deliveryErr) {
      console.warn("Disparo HTTP externo no disponible en este momento:", deliveryErr);
    }

    return NextResponse.json({
      success: true,
      deliveredDirectly: providerDelivered,
      message: `¡Gracias ${name}! Tu solicitud ha sido procesada para ${targetEmail}`,
      targetEmail,
    });
  } catch (error) {
    console.error("Error al procesar el formulario de contacto:", error);
    return NextResponse.json(
      { success: false, error: "Ocurrió un error al procesar la solicitud." },
      { status: 500 }
    );
  }
}
