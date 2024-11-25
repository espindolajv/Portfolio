export function EmailSend({ email, subject }: { email: string, subject: string}) {
    return (
        <div>
            <h2 className="text-brand-2">Enviado por {email}</h2>
            <p className="text-lg font-medium">Mensagem: {subject}</p>
        </div>
    )
}