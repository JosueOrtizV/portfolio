// data/project-data.ts
import { Project } from '../models/project';

export const PROJECTS: Project[] = [
    {
        name: {
            en: 'Text Encryptor and Decryptor',
            es: 'Encriptador y Desencriptador de texto'
        },
        images: ['./assets/img/encriptador/1.png','./assets/img/encriptador/2.png','./assets/img/encriptador/3.png','./assets/img/encriptador/4.png','./assets/img/encriptador/5.png',],
        languages: ['HTML', 'CSS', 'JavaScript'],
        description: {
            en: 'It is a challenge that I did when I was doing the G5 - ONE Object Oriented Java training, from the Oracle Next Education program. <strong>Responsive Web</strong>.',
            es: 'Es un challenge que hice cuando realizaba la formacion Java Orientado a Objetos G5 - One, del programa de Oracle Next Education. <strong>Responsive Web</strong>.'
        },
        codeLink: 'https://github.com/JosueOrtizV/Challenge-Oracle-Decoder',
        demoLink: 'https://josueortizv.github.io/Challenge-Oracle-Decoder/'
    },
    {
        name: {
            en: 'My Portfolio (This web)',
            es: 'Mi portafolio (Esta web)'
        },
        images: ['./assets/img/portfolio/1.png','./assets/img/portfolio/2.png', './assets/img/portfolio/3.png','./assets/img/portfolio/4.png','./assets/img/portfolio/5.png'],
        languages: ['HTML', 'CSS','TypeScript', 'Angular'],
        description: {
            en: 'This project is my portfolio, basically this webpage. Here is the complete code in case anyone is interested in checking it out. It is made with HTML, CSS, TypeScript, and Angular. (the images are shown with "SwiperJS"). <strong>Responsive Web</strong>.',
            es: 'Este proyecto es mi portafolio, basicamente es esta pagina web. Aqui esta el codigo completo por si a alguien le interesa pueda checarlo, esta hecho con html, css, typescript, y angular. (las imagenes las muestro con "SwiperJS"). <strong>Responsive Web</strong>.'
        },
        codeLink: 'https://github.com/JosueOrtizV/AngularCourseProject/tree/main/frontend',
        demoLink: 'https://josueortizv.github.io/Challenge-Oracle-Decoder/'
    },
    {
        name: {
            en: '"Master in Javascript" Course Project - Frontend part',
            es: 'Proyecto de Curso "Master en Javascript" - Parte Frontend'
        },
        images: ['./assets/img/proyecto-angular/1.png','./assets/img/proyecto-angular/2.png', './assets/img/proyecto-angular/3.png','./assets/img/proyecto-angular/4.png', './assets/img/proyecto-angular/5.png'],
        languages: ['HTML', 'CSS','TypeScript', 'Angular'],
        description: {
            en: 'Portfolio project done in Angular during the JavaScript Master course: Learn JS, jQuery, Angular, NodeJS. - Udemy. This is just the frontend part. <strong>Responsive Web</strong>.',
            es: 'Proyecto tipo portafolio hecho en angular durante el curso de Master en JavaScript: Aprender JS, jQuery, Angular, NodeJS. - Udemy Esta solo es la parte del frontend. <strong>Responsive Web</strong>.'
        },
        codeLink: 'https://github.com/JosueOrtizV/AngularCourseProject/tree/main/frontend',
        demoLink: 'https://josueortizv.github.io/AngularCourseProject/'
    },
    {
        name: {
            en: '"Master in Javascript" Course Project - Backend part',
            es: 'Proyecto de Curso "Master en Javascript" - Parte Backend'
        },
        images: ['./assets/img/proyecto-angular/3.png','./assets/img/proyecto-angular/1.png', './assets/img/proyecto-angular/2.png','./assets/img/proyecto-angular/4.png', './assets/img/proyecto-angular/5.png'],
        languages: ['Node.js', 'Javascript', 'MongoDB'],
        description: {
            en: 'This is the backend part of the Portfolio Project made in Angular during the JavaScript Master course - Udemy. <strong>MongoDB</strong> was used as a database to save the projects, an <strong>API</strong> was made for communication between frontend and backend to create, save, delete, edit, and view the projects.',
            es: 'Esta es la parte del backend del Proyecto tipo portafolio hecho en angular durante el curso de Master en JavaScript - Udemy. Se usó <strong>MongoDB</strong> como base de datos para guardar los proyectos, se hizo un <strong>API</strong> para la comunicación entre frontend y backend para crear, guardar, eliminar, editar y visualizar los proyectos.'
        },
        codeLink: 'https://github.com/JosueOrtizV/AngularCourseProject/tree/main/backend',
        demoLink: 'https://josueortizv.github.io/AngularCourseProject/'
    },
    // Añade más proyectos aquí

];
