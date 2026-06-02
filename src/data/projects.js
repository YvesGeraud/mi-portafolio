// src/data/projects.js

export const projects = [
  {
    id: 1,
    title: "Restaurante",
    description:
      "Sistema de gestión desacoplado. Frontend construido en Angular utilizando Signal State para reactividad óptima. Backend en Node.js con arquitectura híbrida (API REST + GraphQL Subscriptions en tiempo real para monitor de cocina) y persistencia mediante Prisma ORM.",
    tags: [
      "Angular Signals",
      "Signal Store / RxJS",
      "State Management",
      "GraphQL Subscriptions",
      "WebSockets",
      "REST API",
      "MySQL / PostgreSQL",
      "Railway",
      "Vercel",
      "CI/CD (Vercel / Railway)",
      "D3.js",
      "Stripe API",
      "JWT (JSON Web Tokens)",
    ],
    image: `${import.meta.env.BASE_URL}images/restaurante.png`,
    githubFront: "https://github.com/YvesGeraud/restaurant-angular-frontend",
    githubBack: "https://github.com/YvesGeraud/restaurant-express-backend",
    live: "https://restaurante-frontend-angular.vercel.app",
    codeGraph: `${import.meta.env.BASE_URL}grafos/index.html`,
  },
  {
    id: 2,
    title: "El Rosario",
    image: `${import.meta.env.BASE_URL}images/el-rosario.png`,
    description:
      "Fundamentos y Arquitectura Nativa. Sistema monolítico desarrollado en PHP puro y SQL nativo, diseñado para demostrar el dominio de las bases de la ingeniería web sin dependencias de frameworks externos. Implementa una arquitectura MVC (Modelo-Vista-Controlador) construida desde cero, con un motor de enrutamiento propio, gestión manual de sesiones seguras, control estricto de autenticación y optimización de consultas relacionales. Desplegado y operando de forma continua en entorno de producción cloud.",
    tags: [
      "PHP Vanilla / PHP Native",
      "SQL (Nativo)",
      "MySQL",
      "MVC Architecture",
      "Custom Router",
      "OOP (Object-Oriented Programming)",
      "Session Management",
      "Web Security (XSS / CSRF)",
      "Password Hashing (Bcrypt)",
      "Railway",
      "HeidiSQL",
    ],
    github: "https://github.com/YvesGeraud/el-rosario",
    live: "https://elrosario.up.railway.app/",
  },
];
