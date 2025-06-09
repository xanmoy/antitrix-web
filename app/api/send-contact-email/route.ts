// app/api/send-contact-email/route.ts
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
    const body = await req.json()
    const { name, email, phone, company, message } = body

    try {
        const data = await resend.emails.send({
            from: 'Antitrix AI <onboarding@resend.dev>',
            to: 'antitrixcorporation@gmail.com',
            subject: 'New Contact Form Submission',
            html: `
        <strong>Name:</strong> ${name} <br/>
        <strong>Email:</strong> ${email} <br/>
        <strong>Phone:</strong> ${phone} <br/>
        <strong>Company:</strong> ${company} <br/>
        <strong>Message:</strong><br/>${message}
      `,
        })

        return Response.json({ success: true })
    } catch (error) {
        return Response.json({ error })
    }
}
