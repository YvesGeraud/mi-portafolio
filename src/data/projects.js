// src/data/projects.js

export const projects = [
  {
    id: 1,
    title: "Restaurante",
    description:
      "Sistema de gestión desacoplado. Frontend construido en Angular utilizando Signal State para reactividad óptima. Backend en Node.js con arquitectura híbrida (API REST + GraphQL Subscriptions en tiempo real para monitor de cocina) y persistencia mediante Prisma ORM.",
    tags: ["TypeScript", "Angular", "Node.js", "GraphQL", "Prisma"],
    image: `${import.meta.env.BASE_URL}images/restaurante.png`,
    githubFront: "https://github.com/YvesGeraud/restaurant-angular-frontend",
    githubBack: "https://github.com/YvesGeraud/restaurant-express-backend", // Puedes ajustar este link al real
    live: "https://restaurante-frontend-angular.vercel.app",
    codeGraph: `${import.meta.env.BASE_URL}/grafos/index.html`,
  },
  {
    id: 2,
    title: "Proyecto 2",
    description: "Descripción de tu segundo proyecto.",
    tags: ["Java", "Spring"],
    image: "",
    github: "https://github.com/tu-usuario/proyecto2",
  },
];
