import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { nome, email, empresa, tipoProjeto, mensagem } = await request.json()

    if (!nome || !email || !mensagem) {
      return NextResponse.json(
        { error: 'Nome, email e mensagem são obrigatórios.' },
        { status: 400 }
      )
    }

    const { error, data } = await resend.emails.send({
      from: 'Crievo <contato@crievo.tech>',
      to: ['dilanlopez009@gmail.com', 'dantasalexandre01@gmail.com'],
      subject: `Novo contato de ${nome} - ${tipoProjeto || 'Sem tipo definido'}`,
      replyTo: email,
      html: `
        <h2>Novo contato pelo site Crievo</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Empresa:</strong> ${empresa || 'Não informado'}</p>
        <p><strong>Tipo de Projeto:</strong> ${tipoProjeto || 'Não selecionado'}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${mensagem.replace(/\n/g, '<br>')}</p>
      `
    })

    if (error) {
      console.log(error)
      return NextResponse.json(
        { error: 'Erro ao enviar email.' },
        { status: 500 }
      )
    }

    console.log('DATA', data)
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: 'Erro interno do servidor.' },
      { status: 500 }
    )
  }
}
