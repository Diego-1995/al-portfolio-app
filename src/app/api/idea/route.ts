import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const MAX_FILE_SIZE = 10 * 1024 * 1024;

export async function POST(request: Request) {
  const formData = await request.formData();
  const email = String(formData.get("email") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim();
  const file = formData.get("file");

  if (!email || !description) {
    return NextResponse.json(
      { message: "Email e descrizione sono obbligatorie." },
      { status: 400 },
    );
  }

  if (file instanceof File && file.size > MAX_FILE_SIZE) {
    return NextResponse.json(
      { message: "Il file non puo superare 10 MB." },
      { status: 400 },
    );
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = "info@automaprogetti.com";
  const from = user;

  if (!host || !user || !pass) {
    return NextResponse.json(
      {
        message:
          "Invio email non configurato. Mancano SMTP_HOST, SMTP_USER o SMTP_PASS.",
      },
      { status: 500 },
    );
  }

  const attachments = [];

  if (file instanceof File && file.size > 0) {
    const arrayBuffer = await file.arrayBuffer();

    attachments.push({
      filename: file.name,
      content: Buffer.from(arrayBuffer),
      contentType: file.type || undefined,
    });
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  await transporter.sendMail({
    from,
    to,
    replyTo: email,
    subject: "Nuova richiesta consulenza AUTOMA",
    text: `Email cliente: ${email}\n\nDescrizione:\n${description}`,
    html: `<p><strong>Email cliente:</strong> ${escapeHtml(email)}</p><p><strong>Descrizione:</strong></p><p>${escapeHtml(description).replace(/\n/g, "<br />")}</p>`,
    attachments,
  });

  return NextResponse.json({ message: "Richiesta inviata correttamente." });
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
