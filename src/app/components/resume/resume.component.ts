import { AfterViewInit, Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';

register();

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit, AfterViewInit {
  certificates = [
    { title: 'Master en JavaScript', image: '/assets/img/certificados/certificado1.jpg', link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-cf58a6ec-2b45-4c80-9770-b58f78f31d13.pdf' },
    { title: 'HTML5 y CSS3 parte 1, 2 y 3', image: '/assets/img/certificados/certificado2.jpg', link: 'https://app.aluracursos.com/certificate/9e0e52f0-462b-4025-9705-cde6b7d7c0f3?lang' },
    { title: 'Logica de programacion', image: '/assets/img/certificados/certificado3.jpg', link: 'https://app.aluracursos.com/user/josue-ortiz/course/logica-de-programacion-conceptos-primordiales/certificate' },
    { title: 'Programa Oracle Next Education', image: '/assets/img/certificados/certificado4.jpg', link: 'https://app.aluracursos.com/program/certificate/e9be5d9c-a44c-4927-98ae-a60adda98071' },
    { title: 'Formación Java Orientado a Objetos', image: '/assets/img/certificados/certificado5.jpg', link: 'https://app.aluracursos.com/degree/certificate/71b42372-61b9-47ca-86f7-0213ef0bbcba' },
    { title: 'Git y GitHub', image: '/assets/img/certificados/certificado6.jpg', link: 'https://app.aluracursos.com/certificate/2808bd8f-a53a-49e4-88da-eb3daa78b7c2' },
  ];

  certificatesLink = 'https://www.linkedin.com/in/josue-ortizv/details/certifications/';

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.swiperOptionsResume();
  }

  swiperOptionsResume(): void {
    if (typeof document !== 'undefined') {
      const swiperEl = document.querySelector('swiper-container');
      if (swiperEl) {
        const swiperParams: SwiperOptions = {
          navigation: true,
          pagination: { clickable: true },
          loop: true,
          grabCursor: true,
          slidesPerView: 5,
          spaceBetween: 10,
          autoplay: {
            delay: 2000,
            disableOnInteraction: true,
          },
          breakpoints: {
            "1200": { slidesPerView: 5, spaceBetween: 10 },
            "992": { slidesPerView: 4, spaceBetween: 20 },
            "768": { slidesPerView: 3, spaceBetween: 15 },
            "576": { slidesPerView: 2, spaceBetween: 10 },
            "360": { slidesPerView: 1, spaceBetween: 10 }
          },
          on: {
            init() {
              console.log('Swiper initialized');
            },
          },
        };
        Object.assign(swiperEl, swiperParams);
        if (swiperEl.initialize) {
          swiperEl.initialize();
          console.log("Iniciado");
        } else {
          console.error('Swiper initialize method not found');
        }
      } else {
        console.error('Swiper element not found');
      }
    }
  }
}
