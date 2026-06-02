// src/data/projects.js

export const projects = [
  {
    id: 1,
    title: "Restaurante",
    description:
      "Sistema de gestión desacoplado con frontend en Angular y backend en Node.js. Implementa arquitectura híbrida REST + GraphQL Subscriptions para monitoreo en tiempo real, persistencia con Prisma ORM y despliegue en Railway/Vercel.",
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
      "Sistema monolítico desarrollado en PHP nativo y SQL, construido desde cero bajo una arquitectura MVC propia. Incluye enrutamiento manual, autenticación por sesiones, protección contra XSS/CSRF, hash de contraseñas y optimización de consultas relacionales.",
    tags: [
      "PHP Vanilla / PHP Native",
      "SQL (Nativo)",
      "MySQL",
      "Arquitectura MVC",
      "Rutas Personalizadas",
      "Programación Orientada a Objetos",
      "Gestión de Sesiones",
      "Seguridad Web (XSS / CSRF)",
      "Password Hashing (Bcrypt)",
      "Railway",
      "HeidiSQL",
    ],
    github: "https://github.com/YvesGeraud/el-rosario",
    live: "https://elrosario.up.railway.app/",
  },
];
