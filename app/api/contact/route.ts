import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO = "roman.francisc.lopez@gmail.com";
const FROM = process.env.RESEND_FROM || "Grind Factory <onboarding@resend.dev>";

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Servidor sin configurar. Escribime a hola@grindfactory.app." },
      { status: 500 },
    );
  }

  let name = "";
  let email = "";
  let message = "";
  let honeypot = "";

  const ct = req.headers.get("content-type") || "";
  try {
    if (ct.includes("application/json")) {
      const json = await req.json();
      name = (json.name || "").toString();
      email = (json.email || "").toString();
      message = (json.message || "").toString();
      honeypot = (json.company || "").toString();
    } else {
      const fd = await req.formData();
      name = (fd.get("name") || "").toString();
      email = (fd.get("email") || "").toString();
      message = (fd.get("message") || "").toString();
      honeypot = (fd.get("company") || "").toString();
    }
  } catch {
    return NextResponse.json({ error: "Payload inválido." }, { status: 400 });
  }

  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  name = name.trim();
  email = email.trim();
  message = message.trim();

  if (!name || name.length < 2) {
    return NextResponse.json({ error: "Faltó tu nombre." }, { status: 400 });
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Email inválido." }, { status: 400 });
  }
  if (!message || message.length < 20) {
    return NextResponse.json({ error: "Contame un poco más (mín 20 caracteres)." }, { status: 400 });
  }
  if (message.length > 5000) {
    return NextResponse.json({ error: "Mensaje demasiado largo." }, { status: 400 });
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `[Grind Factory] ${name} — ${message.slice(0, 60)}…`,
      text: `De: ${name} <${email}>\n\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "No se pudo enviar." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Contact POST error:", e);
    return NextResponse.json({ error: "Error interno." }, { status: 500 });
  }
}
