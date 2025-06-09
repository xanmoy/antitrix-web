// /app/api/schedule-call-email/route.ts
import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
    const { date, time, name, email, description, plan } = await req.json()

    try {
        const data = await resend.emails.send({
            from: "Antitrix AI <onboarding@resend.dev>",
            to: ["antitrixcorporation@gmail.com"], // Change this to your destination
            subject: `New Call Scheduled from ${name}`,
            html: `
        <h2>New Schedule Call Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Plan:</strong> ${plan}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Description:</strong></p>
        <p>${description}</p>
      `,
        })

        return NextResponse.json({ success: true, data })
    } catch (error) {
        console.error("Resend error:", error)
        return NextResponse.json({ success: false, error })
    }
}
