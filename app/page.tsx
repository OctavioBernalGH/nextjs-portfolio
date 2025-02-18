"use client";
import Image from "next/image";
import { useState } from "react";

// Función modificada para apuntar al endpoint que hemos creado
async function sendEmail(contactData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const res = await fetch("/api/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contactData),
  });

  if (!res.ok) {
    throw new Error("Error al enviar el mensaje");
  }

  return res.json();
}

export default function Home() {
  // Estado para el idioma: "es" o "en"
  const [language, setLanguage] = useState<"es" | "en">("es");

  // Traducciones para cada sección, incluyendo artículos y cards
  const texts = {
    es: {
      heroTitle: "Octavio Bernal Vilana",
      heroSubtitle: "Full Stack Developer & IT Manager",
      heroDescription:
        "¡Hola! Soy un apasionado de la tecnología, el desarrollo de software y la gestión de infraestructuras IT. Me encanta resolver problemas y construir soluciones modernas que destaquen por su rendimiento y calidad.",
      aboutTitle: "Sobre mí",
      aboutText:
        "Llevo varios años trabajando como desarrollador Full Stack, manejando tanto frontend como backend. Además, soy IT Manager, lo que me permite coordinar equipos y asegurar la disponibilidad de servicios de forma eficiente. Me apasionan las tecnologías web, la arquitectura de software y el trabajo colaborativo.",
      technologiesTitle: "Tecnologías",
      articlesTitle: "Artículos Recientes",
      featuredProjectsTitle: "Proyectos Destacados",
      contactTitle: "Contacto",
      contactDescription:
        "¿Tienes un proyecto en mente o necesitas asesoría? ¡Contáctame y trabajemos juntos!",
      modalMessage: "Mensaje enviado correctamente.",
      sendButton: "Enviar mensaje",
      placeholders: {
        name: "Nombre",
        email: "Correo electrónico",
        subject: "Asunto",
        message: "Mensaje",
      },
      sending: "Enviando...",
      error: "Error al enviar el mensaje. Inténtalo de nuevo.",
      modalButton: "Aceptar",
      featuredProjects: [
        {
          title: "Plataforma de Seguridad del paciente: PROSP2",
          description:
            "Aplicación para la gestión de listas de verificaciones en ámbitos sanitarios.",
          link: "https://prosp.salut.gencat.cat/login",
          image: "/prosp2.png",
        },
        {
          title: "Código IAM (Código del Infarto)",
          description:
            "Aplicación utilizada para gestionar el evento e informar sobre el código IAM referente a la detección del infarto.",
          link: "https://iam.icscampdetarragona.cat/",
          image: "/iam.png",
        },
        {
          title: "Plataforma de gestión de aptitudes Psicofísicas CatSalut",
          description:
            "Aplicación para gestionar los formularios de aptitudes psicofísicas de CatSalut, permitiendo acelerar los procesos de gestión.",
          link: "https://wsm.ics.gencat.cat/questionarivaloracio/",
          image: "/wsm.png",
        },
        {
          title: "Plataforma de gestión de actos Gencat",
          description:
            "Descripción breve de tu proyecto, tecnologías utilizadas y objetivos alcanzados.",
          link: "https://assistentsactes.salut.gencat.cat/agenda",
          image: "/aaa.png",
        },
      ],
      articles: [
        {
          title: "ASP.NET Core 9.0 API with Angular",
          date: "Noviembre 19, 2024",
          summary:
            "Tutorial de cómo crear un proyecto con ASP.NET Core 9.0 integrado con AngularJs.",
          link: "https://javascript.plainenglish.io/asp-net-core-9-0-api-with-angular-332c70072e17",
        },
        {
          title: "Top 10 Laravel Plugins",
          date: "Julio 25, 2024",
          summary:
            "Descubre los 10 plugins más utilizados y conocidos para Laravel.",
          link: "https://medium.com/stackademic/top-10-laravel-plugins-d7786e9ceb02",
        },
        {
          title: "5 Amazing UI Libraries for Next.js",
          date: "Julio 25, 2024",
          summary:
            "Descubre cinco de las mejores librerías UI para Next.js.",
          link: "https://medium.com/@octabevi/5-amazing-ui-libraries-for-next-js-2f9417cd7a99",
        },
        {
          title: "Create Next.js project with JWT Authentication and Prisma ORM",
          date: "Julio 21, 2024",
          summary:
            "Creación de un proyecto en Next.js con autenticación mediante JWT y Prisma.",
          link: "https://medium.com/stackademic/create-next-js-project-with-jwt-authentication-and-prisma-orm-5a08f547cdb4",
        },
        {
          title: "Top 5 Visual Studio Code Plugins for Next.js Development",
          date: "Julio 25, 2024",
          summary:
            "Descubre cinco plugins de Next.js para Visual Studio Code.",
          link: "https://medium.com/@octabevi/top-5-visual-studio-code-plugins-for-next-js-development-de3717ff6072",
        },
      ],
    },
    en: {
      heroTitle: "Octavio Bernal Vilana",
      heroSubtitle: "Full Stack Developer & IT Manager",
      heroDescription:
        "Hello! I am passionate about technology, software development, and IT management. I love solving problems and building modern solutions that stand out for their performance and quality.",
      aboutTitle: "About Me",
      aboutText:
        "I have been working as a Full Stack Developer, handling both frontend and backend. I am also an IT Manager, which allows me to coordinate teams and ensure efficient service availability. I am passionate about web technologies, software architecture, and collaborative work.",
      technologiesTitle: "Technologies",
      articlesTitle: "Recent Articles",
      featuredProjectsTitle: "Featured Projects",
      contactTitle: "Contact",
      contactDescription:
        "Do you have a project in mind or need advice? Contact me and let's work together!",
      modalMessage: "Message sent successfully.",
      sendButton: "Send message",
      placeholders: {
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
      },
      sending: "Sending...",
      error: "Error sending message. Please try again.",
      modalButton: "OK",
      featuredProjects: [
        {
          title: "Patient Safety Platform: PROSP2",
          description:
            "Application for managing checklists in healthcare settings.",
          link: "https://prosp.salut.gencat.cat/login",
          image: "/prosp2.png",
        },
        {
          title: "IAM Code (Heart Attack Code)",
          description:
            "Application used to manage the event and report on the IAM code for heart attack detection.",
          link: "https://iam.icscampdetarragona.cat/",
          image: "/iam.png",
        },
        {
          title: "CatSalut Psychophysical Aptitude Management Platform",
          description:
            "Application to manage CatSalut psychophysical aptitude forms, speeding up management processes.",
          link: "https://wsm.ics.gencat.cat/questionarivaloracio/",
          image: "/wsm.png",
        },
        {
          title: "Gencat Event Management Platform",
          description:
            "Brief description of your project, technologies used, and achieved goals.",
          link: "https://assistentsactes.salut.gencat.cat/agenda",
          image: "/aaa.png",
        },
      ],
      articles: [
        {
          title: "ASP.NET Core 9.0 API with Angular",
          date: "November 19, 2024",
          summary:
            "Tutorial on how to create a project with ASP.NET Core 9.0 integrated with AngularJs.",
          link: "https://javascript.plainenglish.io/asp-net-core-9-0-api-with-angular-332c70072e17",
        },
        {
          title: "Top 10 Laravel Plugins",
          date: "July 25, 2024",
          summary:
            "Discover the 10 most used and well-known plugins for Laravel.",
          link: "https://medium.com/stackademic/top-10-laravel-plugins-d7786e9ceb02",
        },
        {
          title: "5 Amazing UI Libraries for Next.js",
          date: "July 25, 2024",
          summary:
            "Discover five of the best UI libraries for Next.js.",
          link: "https://medium.com/@octabevi/5-amazing-ui-libraries-for-next-js-2f9417cd7a99",
        },
        {
          title: "Create Next.js Project with JWT Authentication and Prisma ORM",
          date: "July 21, 2024",
          summary:
            "Creation of a Next.js project with JWT authentication and Prisma.",
          link: "https://medium.com/stackademic/create-next-js-project-with-jwt-authentication-and-prisma-orm-5a08f547cdb4",
        },
        {
          title: "Top 5 VS Code Plugins for Next.js Development",
          date: "July 25, 2024",
          summary:
            "Discover five Next.js plugins for Visual Studio Code.",
          link: "https://medium.com/@octabevi/top-5-visual-studio-code-plugins-for-next-js-development-de3717ff6072",
        },
      ],
    },
  };

  const currentText = texts[language];

  const technologies = [
    { name: "Java", gradient: "from-red-500 to-yellow-500" },
    { name: "Spring Boot", gradient: "from-green-500 to-blue-500" },
    { name: "Python", gradient: "from-blue-400 to-green-400" },
    { name: "PHP", gradient: "from-indigo-500 to-pink-500" },
    { name: "Laravel", gradient: "from-red-600 to-orange-600" },
    { name: "Flutter", gradient: "from-blue-300 to-blue-500" },
    { name: "MySQL", gradient: "from-blue-600 to-blue-800" },
    { name: "MariaDB", gradient: "from-purple-500 to-purple-700" },
    { name: "PostgreSQL", gradient: "from-indigo-600 to-blue-600" },
    { name: "NextJs", gradient: "from-gray-700 to-gray-900" },
    { name: "Angular", gradient: "from-red-500 to-red-700" },
    { name: "HTML", gradient: "from-orange-400 to-orange-600" },
    { name: "CSS", gradient: "from-blue-400 to-blue-600" },
    { name: "TailwindCSS", gradient: "from-sky-400 to-blue-400" },
  ];

  // Estados para el formulario y modal de contacto
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(currentText.sending);
    try {
      const response = await sendEmail(contactData);
      console.log(response);
      setStatus(currentText.modalMessage);
      setContactData({ name: "", email: "", subject: "", message: "" });
      setShowModal(true);
    } catch (error) {
      console.error(error);
      setStatus(currentText.error);
    }
  };

  return (
    <main className="min-h-screen w-full flex flex-col items-center bg-gray-50 text-gray-800 font-sans relative">
      {/* Botón de idioma en la esquina superior derecha con bandera */}
      <div className="absolute top-4 right-4">
        <button
          onClick={() => setLanguage(language === "es" ? "en" : "es")}
          className="px-4 py-2 bg-gray-200 rounded"
        >
          {language === "es" ? "🇺🇸" : "🇪🇸"}
        </button>
      </div>

      {/* Modal de éxito */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 text-center">
            <p className="mb-4 text-lg font-semibold">
              {currentText.modalMessage}
            </p>
            <button
              onClick={() => {
                setShowModal(false);
                window.location.reload();
              }}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md"
            >
              {currentText.modalButton}
            </button>
          </div>
        </div>
      )}

      {/* Portada (Hero Section) */}
      <section className="w-full h-[80vh] flex flex-col justify-center items-center bg-gradient-to-br from-teal-500 to-blue-500 text-white px-8">
        <div className="mb-6">
          <Image
            src="/octavio.jpg"
            alt="Foto de Octavio"
            width={150}
            height={150}
            className="rounded-full border-4 border-white"
          />
        </div>
        <h1 className="typewriter text-3xl sm:text-5xl md:text-7xl font-bold mb-4 text-center">
          {currentText.heroTitle}
        </h1>
        {/* Iconos sociales */}
        <div className="flex gap-4 mb-4">
          <a
            href="https://www.linkedin.com/in/octavio-bernal-vilana-lk/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center justify-center h-12 w-12 rounded-full bg-[#0A66C2] text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11.5 19h-3v-9h3v9zm-1.5-10.25c-.966 0-1.75-.783-1.75-1.75 0-.966.784-1.75 1.75-1.75s1.75.784 1.75 1.75c0 .967-.784 1.75-1.75 1.75zm13.5 10.25h-3v-4.5c0-1.076-.024-2.463-1.5-2.463-1.5 0-1.73 1.172-1.73 2.383v4.58h-3v-9h2.885v1.23h.041c.403-.762 1.387-1.563 2.855-1.563 3.054 0 3.619 2.012 3.619 4.626v4.707z" />
            </svg>
          </a>
          <a
            href="https://medium.com/@octabevi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Blog"
            className="flex items-center justify-center h-12 w-12 rounded-full bg-white text-black border border-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V5a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z"
              />
            </svg>
          </a>
          <a
            href="https://github.com/OctavioBernalGH"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex items-center justify-center h-12 w-12 rounded-full bg-black text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.93.43.37.81 1.1.81 2.23v3.31c0 .32.21.69.82.57A12 12 0 0012 0z" />
            </svg>
          </a>
          <a
            href="mailto:octabevi@protonmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Gmail"
            className="flex items-center justify-center h-12 w-12 rounded-full bg-[#D14836] text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 13.065L2 6.747V18a2 2 0 002 2h16a2 2 0 002-2V6.747l-10 6.318zM22 4H2a2 2 0 00-2 2v.401l12 7.573 12-7.573V6a2 2 0 00-2-2z" />
            </svg>
          </a>
        </div>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center">
          {currentText.heroSubtitle}
        </h2>
        <p className="max-w-xl text-center text-lg">
          {currentText.heroDescription}
        </p>
      </section>

      {/* Sección "Sobre mí" / "About Me" */}
      <section className="w-full max-w-5xl px-6 py-12">
        <h3 className="text-3xl sm:text-4xl font-extrabold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
          {currentText.aboutTitle}
        </h3>
        <p className="leading-relaxed text-lg text-center">
          {currentText.aboutText}
        </p>
      </section>

      {/* Sección "Tecnologías" / "Technologies" */}
      <section className="w-full max-w-5xl px-6 py-12">
        <h3 className="text-3xl sm:text-4xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
          {currentText.technologiesTitle}
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {technologies.map((tech, idx) => (
            <div
              key={idx}
              className={`rounded-lg shadow-lg p-4 bg-gradient-to-r ${tech.gradient} text-white text-center font-bold text-lg`}
            >
              {tech.name}
            </div>
          ))}
        </div>
      </section>

      {/* Sección "Artículos Recientes" / "Recent Articles" */}
      <section className="w-full max-w-5xl px-6 py-12">
        <h3 className="text-3xl sm:text-4xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          {currentText.articlesTitle}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {currentText.articles.map((article, idx) => (
            <div key={idx} className="rounded-lg shadow-md bg-white p-6 flex flex-col">
              <h4 className="text-xl font-semibold mb-2">{article.title}</h4>
              <p className="text-sm text-gray-500 mb-1">{article.date}</p>
              <p className="text-sm text-gray-700 mb-4">{article.summary}</p>
              <div className="mt-auto">
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 text-sm font-semibold"
                >
                  {language === "es" ? "Leer más →" : "Read more →"}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sección "Proyectos Destacados" / "Featured Projects" */}
      <section className="w-full max-w-5xl px-6 py-12">
        <h3 className="text-3xl sm:text-4xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
          {currentText.featuredProjectsTitle}
        </h3>
        <div className="grid gap-8 sm:grid-cols-2">
          {currentText.featuredProjects.map((proj, idx) => (
            <div key={idx} className="rounded-lg shadow-md bg-white p-6">
              <Image
                src={proj.image}
                alt={proj.title}
                width={600}
                height={400}
                className="rounded-md mb-4 object-cover w-full h-40"
              />
              <h4 className="text-xl font-semibold mb-2">{proj.title}</h4>
              <p className="text-sm text-gray-600 mb-2">{proj.description}</p>
              <a
                href={proj.link}
                className="inline-block mt-2 text-indigo-600 hover:text-indigo-800"
              >
                {language === "es" ? "Ver más →" : "See more →"}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Sección "Contacto" / "Contact" */}
      <section className="w-full max-w-5xl px-6 py-12">
        <h3 className="text-3xl sm:text-4xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500">
          {currentText.contactTitle}
        </h3>
        <p className="leading-relaxed mb-6 text-lg text-center">
          {currentText.contactDescription}
        </p>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder={currentText.placeholders.name}
            value={contactData.name}
            onChange={handleChange}
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
            required
          />
          <input
            type="email"
            name="email"
            placeholder={currentText.placeholders.email}
            value={contactData.email}
            onChange={handleChange}
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder={currentText.placeholders.subject}
            value={contactData.subject}
            onChange={handleChange}
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
            required
          />
          <textarea
            name="message"
            placeholder={currentText.placeholders.message}
            value={contactData.message}
            onChange={handleChange}
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
            rows={5}
            required
          ></textarea>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-indigo-700 transition-colors text-lg font-semibold"
          >
            {currentText.sendButton}
          </button>
        </form>
        {status && <p className="mt-4 text-center text-lg">{status}</p>}
      </section>

      {/* Footer */}
      <footer className="w-full py-4 flex items-center justify-center bg-gray-100 mt-auto">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} Octavio Bernal Vilana</p>
      </footer>

      <style jsx>{`
        .typewriter {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          border-right: 0.15em solid rgba(255, 255, 255, 0.75);
          background: linear-gradient(90deg, rgb(255, 196, 0), rgb(255, 75, 30));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: typewriter 4s steps(21, end) infinite, blink-caret 0.75s step-end infinite;
        }
        @keyframes typewriter {
          0% { width: 0ch; }
          50% { width: 21ch; }
          60% { width: 21ch; }
          100% { width: 0ch; }
        }
        @keyframes blink-caret {
          from, to { border-color: transparent; }
          50% { border-color: rgba(255, 255, 255, 0.75); }
        }
      `}</style>
    </main>
  );
}
