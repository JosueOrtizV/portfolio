// data/project-data.ts
import { Project } from '../models/project';

export const PROJECTS: Project[] = [
    {
        name: {
            en: 'Text Encryption & Decryption Tool',
            es: 'Herramienta de Encriptación y Desencriptación de Texto'
        },
        images: ['./assets/img/encriptador/1.png','./assets/img/encriptador/2.png','./assets/img/encriptador/3.png','./assets/img/encriptador/4.png','./assets/img/encriptador/5.png',],
        languages: ['HTML', 'CSS', 'JavaScript'],
        description: {
            en: 'This project is a text encryption and decryption tool, created as part of the G5 - ONE Object-Oriented Java training within the Oracle Next Education program. The application features a <strong>responsive web design</strong>, ensuring optimal usability across various devices.',
            es: 'Este proyecto es una herramienta de encriptación y desencriptación de texto, creada como parte de la formación Java Orientado a Objetos G5 - ONE del programa Oracle Next Education. La aplicación cuenta con un <strong>diseño web responsivo</strong>, garantizando una usabilidad óptima en diversos dispositivos.'
        },
        codeLink: 'https://github.com/JosueOrtizV/Challenge-Oracle-Decoder',
        demoLink: 'https://josueortizv.github.io/Challenge-Oracle-Decoder/'
    },
    {
        name: {
            en: 'My Professional Portfolio Website',
            es: 'Mi Sitio Web de Portafolio Profesional'
        },
        images: ['./assets/img/portfolio/1.png','./assets/img/portfolio/2.png', './assets/img/portfolio/3.png','./assets/img/portfolio/4.png','./assets/img/portfolio/5.png'],
        languages: ['HTML', 'CSS','TypeScript', 'Angular'],
        description: {
            en: 'This project is my personal portfolio, showcasing my skills and projects. The entire code is available for anyone interested in exploring it. Built with HTML, CSS, TypeScript, and Angular, it features <strong>responsive web design</strong> for optimal viewing on various devices. Images in the projects and certificates sections are displayed using SwiperJS. The website also supports language switching between English and Spanish.',
            es: 'Este proyecto es mi portafolio personal, donde muestro mis habilidades y proyectos. Todo el código está disponible para quienes estén interesados en explorarlo. Construido con HTML, CSS, TypeScript y Angular, cuenta con un <strong>diseño web responsivo</strong> para una visualización óptima en diversos dispositivos. Las imágenes en las secciones de proyectos y certificados se muestran utilizando SwiperJS. Además, el sitio web permite cambiar el idioma entre español e inglés.'
        },
        codeLink: 'https://github.com/JosueOrtizV/portfolio',
        demoLink: 'https://josueortizv.github.io/portfolio/'
    },
    {
        name: {
            en: 'Master in JavaScript Course Project - Frontend',
            es: 'Proyecto del Curso Master en Javascript - Frontend'
        },
        images: ['./assets/img/proyecto-angular/1.png','./assets/img/proyecto-angular/2.png', './assets/img/proyecto-angular/3.png','./assets/img/proyecto-angular/4.png', './assets/img/proyecto-angular/5.png'],
        languages: ['HTML', 'CSS','TypeScript', 'Angular'],
        description: {
            en: 'This is a portfolio project developed with Angular as part of the Master in JavaScript course: Learn JS, jQuery, Angular, NodeJS on Udemy. This segment represents the frontend component of the project. <strong>Responsive Web Design</strong> ensures optimal performance across all devices.',
            es: 'Este es un proyecto de portafolio desarrollado con Angular como parte del curso Master en JavaScript: Aprende JS, jQuery, Angular, NodeJS en Udemy. Este segmento representa el componente frontend del proyecto. <strong>Diseño Web Responsivo</strong> garantiza un rendimiento óptimo en todos los dispositivos.'
        },
        codeLink: 'https://github.com/JosueOrtizV/AngularCourseProject/tree/main/frontend',
        demoLink: 'https://josueortizv.github.io/AngularCourseProject/'
    },
    {
        name: {
            en: 'Master in JavaScript Course Project - CRUD API Backend',
            es: 'Proyecto del Curso Master en JavaScript - Backend API CRUD'
        },
        images: ['./assets/img/proyecto-angular/3.png','./assets/img/proyecto-angular/1.png', './assets/img/proyecto-angular/2.png','./assets/img/proyecto-angular/4.png', './assets/img/proyecto-angular/5.png'],
        languages: ['Node.js', 'Javascript', 'MongoDB'],
        description: {
            en: 'This backend component of the Portfolio Project was developed during the Master in JavaScript course on Udemy. It includes a CRUD API that allows the frontend to create, read, update, and delete projects. Leveraging <strong>MongoDB</strong> as the database, this API facilitates seamless communication between the frontend and backend. Project images are uploaded to Imgbb via its API, with links stored in MongoDB, ensuring dynamic image retrieval for each project.',
            es: '"Este componente backend del Proyecto de Portafolio fue desarrollado durante el curso Master en JavaScript en Udemy. Incluye una API CRUD que permite al frontend crear, leer, actualizar y eliminar proyectos. Utilizando <strong>MongoDB</strong> como base de datos, esta API facilita una comunicación fluida entre el frontend y el backend. Las imágenes de los proyectos se suben a Imgbb mediante su API, guardando los enlaces en MongoDB, garantizando la recuperación dinámica de imágenes para cada proyecto.'
        },
        codeLink: 'https://github.com/JosueOrtizV/AngularCourseProject/tree/main/backend',
        demoLink: 'https://josueortizv.github.io/AngularCourseProject/proyectos'
    },
    // Añade más proyectos aquí

];
