import { create } from 'zustand'
import { IProyectos, ITechs } from "../@types/data";

interface DataStore {
  projects: IProyectos;
  techs: ITechs;
  toggleProjectsOrder: () => void;
}

export const useDataStore = create<DataStore>()(() => ({
  projects: [
    {
      id: "1",
      nombre: "Pokedex",
      anio: 2021,
      portada: "pokedex",
      galeria: ["pokedex", "pokedex", "imgPokedex3"],
      tecnologias: ["react", "sass", "bootstrap"],
      descripcionCorta: "Pokedex creada con React",
      descripcionCortaEng: "First React project",
      descripcionLarga:
        "Aplicación de Pokedex para buscar y analizar cada Pokemón, sus estadísticas, evoluciones y ataques. Creada con React, Typescript, Sass y React-Query.",
      descripcionLargaEng: "",
      tag: "WebApp",
      urlRepo: "https://github.com/NicolasGarin/pokedex",
      urlDemo: "https://nicolasgarin.github.io/pokedex/",
    },
    {
      id: "2",
      nombre: "Jap Ecommerce",
      anio: 2021,
      portada: "proyecto-jap",
      galeria: ["imgPokedex", "imgPokedex2", "imgPokedex3"],
      tecnologias: ["html-5", "javascript", "css-3", "bootstrap"],
      descripcionCorta: "Proyecto ecommerce para JaP",
      descripcionCortaEng: "Jap Ecommerce",
      descripcionLarga:
        "Proyecto final de curso para Jóvenes a Programar, eCommerce completo con catálogo de productos, filtros de búsqueda y proceso de compra. Realizado con Html, Css y Javascript.",
      descripcionLargaEng: "",
      tag: "WebApp",
      urlRepo: "https://github.com/nicolasgarin/Proyecto-JaP",
      urlDemo: "https://nicolasgarin.github.io/Proyecto-JaP/",
    },
    {
      id: "4",
      nombre: "Flashcard App",
      anio: 2023,
      portada: "flashcard-game",
      galeria: ["imgPokedex", "imgPokedex2", "imgPokedex3"],
      tecnologias: ["react", "sass", "bootstrap"],
      tag: "WebApp",
      descripcionCorta: "Juego de preguntas y respuestas",
      descripcionCortaEng: "Question and answer game",
      descripcionLarga:
        "Juego de preguntas y respuestas con elección de categorías y modalidad de juego, sección de estadísticas y tema claro/oscuro. Creado con React, Sass, Bootstrap.",
      descripcionLargaEng: "",
      urlRepo: "https://github.com/nicolasgarin/flashcard-app",
    },
    {
      id: "5",
      nombre: "Hangman App",
      anio: 2023,
      portada: "flashcard-game",
      galeria: ["imgPokedex", "imgPokedex2", "imgPokedex3"],
      tecnologias: ["react", "ts", "sass", "bootstrap"],
      descripcionCorta: "Juego del ahorcado",
      descripcionCortaEng: "Hangman Game",
      descripcionLarga: "Pokedex",
      descripcionLargaEng: "",
      tag: "WebApp",
      urlRepo: "https://github.com/NicolasGarin/pokedex",
      urlDemo: "https://nicolasgarin.github.io/pokedex/",
    },
    {
      id: "6",
      nombre: "Project Tracker",
      anio: 2024,
      portada: "poj-trac-1",
      galeria: ["poj-trac-1", "imgPokedex2", "imgPokedex3"],
      tecnologias: ["react", "ts", "sass", "bootstrap"],
      descripcionCorta: "Aplicación de seguimiento de proyectos",
      descripcionCortaEng: "Project Tracker",
      descripcionLarga:
        "Aplicación de seguimiento y gestión de proyectos para logro de objetivos personales. Visualización gráfica de avance mensual, opciones de filtrado de proyectos, tema claro/oscuro y elección de lenguaje. Creado con Vite, React, Typescript, Sass, Bootstrap y Vitest.",
      descripcionLargaEng: "",
      tag: "WebApp",
      urlRepo: "https://github.com/nicolasgarin/project-tracker-ts-app",
      urlDemo: "https://nicolasgarin.github.io/project-tracker-ts-app/",
    },
    {
      id: "7",
      nombre: "Project Tracker LP",
      anio: 2024,
      portada: "project-tracker-lp",
      galeria: ["imgPokedex", "imgPokedex2", "imgPokedex3"],
      tecnologias: ["html", "js", "sass", "tailwind"],
      descripcionCorta: "Landing page para Project Tracker",
      descripcionCortaEng: "Project Tracker Landing Page",
      descripcionLarga:
        "Landing page para Project Tracker app, creada con HTML, CSS, Tailwind y Javascript.",
      descripcionLargaEng: "",
      tag: "Landing Page",
      urlRepo: "https://github.com/nicolasgarin/project-tracker-lp",
      urlDemo: "https://nicolasgarin.github.io/project-tracker-lp/",
    },
    {
      id: "8",
      nombre: "Minimalist Portfolio",
      anio: 2024,
      portada: "pokedex",
      galeria: ["imgPokedex", "imgPokedex2", "imgPokedex3"],
      tecnologias: ["astro", "typescript", "css"],
      descripcionCorta: "Portfolio minimalista configurable via JSON",
      descripcionCortaEng: "Minimalist Portfolio",
      descripcionLarga:
        "Portfolio minimalista que toma toda la información a través de un JSON. Creado con Astro, Typescript, y Css.",
      descripcionLargaEng: "",
      tag: "Portfolio",
      urlRepo: "https://github.com/nicolasgarin/minimalist-portfolio-json",
      urlDemo: "https://nicolasgarin.github.io/minimalist-portfolio-json/",
    },
  ],
  techs: [
    {
      id: "git",
      name: "Git",
      imgSrc: "git",
      descrip: "Sistema de control de versiones",
      engDescrip: "Version control system",
      exp: 75,
      knowledge: 75,
    },
    {
      id: "html",
      name: "HTML 5",
      imgSrc: "html-5",
      descrip: "Lenguaje de marcado de hipertexto",
      engDescrip: "Markup language",
      exp: 100,
      knowledge: 100,
    },
    {
      id: "css",
      name: "Css 3",
      imgSrc: "css-3",
      descrip: "Lenguaje de hojas de estilo",
      engDescrip: "Style sheet language",
      exp: 100,
      knowledge: 100,
    },
    {
      id: "js",
      name: "Javascript",
      imgSrc: "javascript",
      descrip: "Lenguaje de programación",
      engDescrip: "Programming language",
      exp: 100,
      knowledge: 100,
    },
    {
      id: "python",
      name: "Python",
      imgSrc: "python",
      descrip: "Lenguaje de programación",
      engDescrip: "Programming language",
      exp: 25,
      knowledge: 50,
    },
    {
      id: "mysql",
      name: "Mysql",
      imgSrc: "mysql",
      descrip: "Sistema de gestión de bases de datos",
      engDescrip: "Database management system",
      exp: 25,
      knowledge: 75,
    },
    {
      id: "github",
      name: "Github",
      imgSrc: "github",
      descrip: "Plataforma de gestión de repositorios basado en git",
      engDescrip: "Repositories managment system based on git",
      exp: 100,
      knowledge: 80,
      hoverEffect: ["git"],
    },
    {
      id: "figma",
      name: "Figma",
      imgSrc: "figma",
      descrip: "Herramienta de diseño para la creación de prototipos",
      engDescrip: "Design tool for prototyping",
      exp: 75,
      knowledge: 75,
    },
    {
      id: "sass",
      name: "Sass",
      imgSrc: "sass",
      descrip: "Procesador de Css",
      engDescrip: "Css processor",
      exp: 100,
      knowledge: 100,
      hoverEffect: ["css"],
    },
    {
      id: "react",
      name: "React",
      imgSrc: "react",
      descrip:
        "Librería de Javascript para creación de interfaces de usuario y manejo de estados",
      engDescrip:
        "Javascript library for user interfaces creation and state handling",
      exp: 100,
      knowledge: 100,
    },
    {
      id: "ts",
      name: "Typescript",
      imgSrc: "typescript",
      descrip: "Extensión de Javascript para manejo de tipos",
      engDescrip: "Javascript extension for type handling",
      exp: 50,
      knowledge: 75,
      hoverEffect: ["js"],
    },
    {
      id: "jq",
      name: "JQuery",
      imgSrc: "jquery",
      descrip:
        "Librería de Javascript para el manejo de interacción con elementos HTML",
      engDescrip: "Javascript library for HTML elements interaction handling",
      exp: 100,
      knowledge: 100,
      hoverEffect: ["js"],
    },
    {
      id: "freemarker",
      name: "Freemarker",
      imgSrc: "freemarker",
      descrip: " Librería de Java para creación de plantillas",
      engDescrip: "Java library for templates creation",
      exp: 100,
      knowledge: 100,
      hoverEffect: ["java"],
    },
    {
      id: "clay",
      name: "Clay UI",
      imgSrc: "clay",
      descrip:
        "Librería de componentes y estilos basado en Bootstrap, creado para Liferay",
      engDescrip:
        "Library of components and styles based on Bootstrap, created for Liferay",
      exp: 100,
      knowledge: 100,
      hoverEffect: ["java", "bootst"],
    },
    {
      id: "vite",
      name: "Vite",
      imgSrc: "vite",
      descrip: "Herramienta de construcción de proyectos",
      engDescrip: "Project building tool",
      exp: 75,
      knowledge: 50,
      hoverEffect: ["js", "html", "react"],
    },
    {
      id: "bootst",
      name: "Bootstrap",
      imgSrc: "bootstrap",
      descrip: "Framework de css de reglas de estilos y componentes",
      engDescrip: "Css framework for style rules and components",
      exp: 100,
      knowledge: 100,
      hoverEffect: ["css", "html"],
    },
    {
      id: "tailwind",
      name: "Tailwind",
      imgSrc: "tailwind",
      descrip: "Framework de css enfocado en proveer clases de utilidad",
      engDescrip: "Css framework focused on providing utility classes",
      exp: 75,
      knowledge: 100,
      hoverEffect: ["css", "html", "js", "react"],
    },
    {
      id: "radix",
      name: "Radix",
      imgSrc: "radix",
      descrip: "Biblioteca de componentes de UI para React",
      engDescrip: "UI component library for React",
      exp: 50,
      knowledge: 100,
      hoverEffect: ["css", "html", "js", "react"],
    },
    {
      id: "next",
      name: "Next.js",
      imgSrc: "next-js",
      descrip: "Framework de React para crear paquetes SSR",
      engDescrip: "React framework for creating SSR packages",
      exp: 25,
      knowledge: 25,
      hoverEffect: ["js", "html", "react"],
    },
    {
      id: "liferay",
      name: "Liferay",
      imgSrc: "liferay",
      descrip: "CMS basado en Java",
      engDescrip: "Java based CMS",
      exp: 100,
      knowledge: 100,
      hoverEffect: ["java", "freemarker", "clay"],
    },
    {
      id: "vitest",
      name: "Vitest",
      imgSrc: "vitest",
      descrip: "Framework de testing basado en Vite",
      engDescrip: "Vite based testing framework",
      exp: 25,
      knowledge: 25,
      hoverEffect: ["js", "html", "vite", "react"],
    },
    {
      id: "bootswatch",
      name: "Bootswatch",
      imgSrc: "bootswatch",
      descrip: "Plugin de Bootstrap para generación de temas",
      engDescrip: "Bootstrap plugin for theme generation",
      exp: 25,
      knowledge: 100,
      hoverEffect: ["css", "html", "bootst"],
    },
    {
      id: "daisy",
      name: "DaisyUI",
      imgSrc: "daisyui",
      descrip:
        "Librería de componentes de Tailwind para frameworks de Javascript",
      engDescrip: "Tailwind based component library for Javascript frameworks",
      exp: 50,
      knowledge: 100,
      hoverEffect: ["css", "html", "js", "react", "tailwind"],
    },
    {
      id: "shadcn",
      name: "Shadcn/ui",
      imgSrc: "shadcn-ui",
      descrip: "Librería de componentes basado en Tailwind para React",
      engDescrip: "Tailwind based component library for React",
      exp: 50,
      knowledge: 100,
      hoverEffect: ["css", "html", "js", "react", "tailwind", "radix"],
    },
    {
      id: "astro",
      name: "Astro",
      imgSrc: "astro",
      descrip:
        "Framework de Javascript para creación de sitios estáticos optimizados",
      engDescrip: "Javascript framework for optimized static websites",
      exp: 25,
      knowledge: 50,
      hoverEffect: ["js"],
    },
  ],
  toggleProjectsOrder: () => set((state) => ({ 
    projects: [...state.projects].reverse() 
  })),
}))

// Hook para usar en los componentes
export const useData = () => {
  const { projects, techs, toggleProjectsOrder } = useDataStore()
  return { projects, techs, toggleProjectsOrder }
}
