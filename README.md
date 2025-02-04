# Monty Hall 🎭🚪

### O que é o problema de Monty Hall?

O problema de **Monty Hall** é um paradoxo matemático baseado em um jogo de três portas. A ideia é simples:

1. Você participa de um jogo onde há **três portas**.
2. Atrás de uma delas há um **prêmio**, e atrás das outras não há nada.
3. Você escolhe uma das portas (sem abrir).
4. O apresentador (que sabe onde está o prêmio) abre uma das portas restantes, revelando **sempre** uma porta vazia.
5. Agora você tem duas opções:
   - **Manter sua escolha inicial**.
   - **Trocar para a outra porta que sobrou**.

### Qual é a melhor estratégia?

A melhor decisão é **sempre trocar de porta**.

📊 **Probabilidades:**
- Se você **mantiver sua escolha**, sua chance de ganhar é **1/3 (33,3%)**.
- Se você **trocar de porta**, sua chance de ganhar sobe para **2/3 (66,6%)**.

Isso acontece porque, no início, há **1/3 de chance de escolher o prêmio** e **2/3 de escolher uma porta vazia**. Como o apresentador sempre elimina uma porta errada, ao trocar, você aproveita esses **2/3 de chance restantes**.

🎯 **Conclusão:** Sempre trocar **dobra** suas chances de ganhar!

Este projeto implementa uma simulação do Problema de Monty Hall para testar essa estratégia e visualizar os resultados. 🚀

---

## Getting Started

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.