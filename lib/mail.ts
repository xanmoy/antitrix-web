import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendMail({ to, subject, html }: { to: string; subject: string; html: string }) {
    try {
        const data = await resend.emails.send({
            from: 'Antitrix <antitrixcorporation@gmail.com>',
            to,
            subject,
            html,
        });
        return data;
    } catch (error) {
        console.error('Email send failed:', error);
        throw error;
    }
}
