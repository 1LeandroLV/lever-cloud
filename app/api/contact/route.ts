import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  try {
    const { name, email, company, message } = await req.json();

    if (!process.env.RESEND_API_KEY) {
      return Response.json(
        { success: false, error: "RESEND_API_KEY saknas" },
        { status: 500 }
      );
    }

    const data = await resend.emails.send({
      from: "lever.cloud <onboarding@resend.dev>",
      to: ["leandro.lever.cloud@gmail.com"],
      subject: `Ny förfrågan från ${name}`,
      html: `
        <h2>Ny kundförfrågan</h2>
        <p><strong>Namn:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Företag:</strong> ${company || "Ej angivet"}</p>
        <p><strong>Meddelande:</strong></p>
        <p>${message}</p>
      `,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    console.error("CONTACT_API_ERROR:", error);

    return Response.json(
      { success: false, error: "Mailet kunde inte skickas" },
      { status: 500 }
    );
  }
}