# Climara
 
**Laboratório de futuros regenerativos.**

Site institucional e caderno de campo da Climara em Guarulhos: energia limpa acessível para a casa, o pequeno comércio e o bairro.

> O futuro não será distópico. Será plantado.

## O que é este repositório

- **Landing** — apresentação da Climara, valores e caminhos de parceria (solar por assinatura e indicação).
- **Caderno** (`/campo`) — ferramenta operacional da equipe: plano da semana, log de conversas, lista de contatos, telhados e escoteiros. Os dados ficam no navegador local; não é backend compartilhado.

Sem jargão. Sem greenwashing. Começamos no telhado e na tomada.

## Stack

- TanStack Start (React + Vite)
- TypeScript
- Tailwind CSS v4

## Desenvolvimento

Instale as dependências e suba o servidor local:

```
npm install
npm run dev
```

## Build

```
npm run build
```

## Estrutura útil

| Caminho | Conteúdo |
| --- | --- |
| `src/routes/index.tsx` | Landing page |
| `src/routes/campo.tsx` | Caderno operacional |
| `src/lib/sementeira.ts` | Dados das parcerias e plano da semana |
| `src/styles.css` | Tokens de marca (menta, floresta, cobre) |
| `public/climara-mark.jpg` | Marca |
| `public/og.jpg` | Card de compartilhamento |
| `public/favicon.svg` | Ícone |

## Marca

| Token | Hex | Uso |
| --- | --- | --- |
| Menta | `#B8D8BE` | Fundo |
| Floresta | `#1B4332` | Primária / botões |
| Cobre | `#C08A5A` | Acento |
| Off-white | `#F5F8F5` | Seções alternadas |
| Texto | `#243324` | Corpo |

- Títulos: Fraunces
- Corpo: Outfit
- Conceito visual: folha + circuito (natureza encontra tecnologia)

## Contato

climaratech@gmail.com

## Status

Projeto em estágio inicial. O site é a face pública; o caderno apoia a operação da semana. Parcerias e números de comissão devem ser conferidos com cada fornecedor antes de qualquer compromisso comercial.

---

Se você acredita que dá pra construir um mundo mais fresco, mais justo e mais bonito — bora plantar.
