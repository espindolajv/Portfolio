import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EmailSend } from '@/app/components/EmailSend';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
    try {
        const apiKey = process.env.RESEND_API_KEY;
        if (!apiKey) {
            return NextResponse.json({ message: 'RESEND_API_KEY não configurada.' }, { status: 500 });
        }
        const resend = new Resend(apiKey);
        const body = await request.json();
        const { from, subject } = body;

        console.log(body)

        if (!from || !subject) {
            return NextResponse.json(
                { message: 'Os campos "from" e "subject" são obrigatórios.' },
                { status: 400 }
            );
        }

        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: ['joao.espmacedo@gmail.com'],
            subject: 'Contato via Portfolio recebido!!!',
            react: EmailSend({ email: from, subject })
        });

        if (error) {
            return NextResponse.json({ message: 'Erro ao enviar o e-mail', error }, { status: 400 });
        }

        return NextResponse.json({ message: 'E-mail enviado com sucesso!', data });
    } catch (err) {
        return NextResponse.json({ message: 'Erro no servidor', error: err }, { status: 500 });
    }
}
