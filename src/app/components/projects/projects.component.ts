import { Component, OnInit} from '@angular/core';
import { Project } from '../../models/project';
import { PROJECTS } from '../../data/project-data';
import { TranslateService } from '@ngx-translate/core';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
// register Swiper custom elements
register();

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{
  projects: Project[] = PROJECTS;
  languages: string[] = ['All', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'Node.js', 'MongoDB'];
  filteredProjects: Project[] = [];
  paginatedProjects: Project[] = [];
  selectedProject: Project | null = null;
  showAllLabel: string = '';
  currentLang: 'en' | 'es';
  selectedLanguage: string = 'All';

  // Paginación
  currentPage: number = 1;
  projectsPerPage: number = 8;

  constructor(private translate: TranslateService) {
    this.currentLang = this.translate.currentLang as 'en' | 'es' || 'en';
    this.translate.get('PROJECTS.ALL').subscribe((text: string) => {
      this.showAllLabel = text;
    });
  }

  ngOnInit(): void {
    this.filteredProjects = this.projects;
    this.paginateProjects();

    this.translate.onLangChange.subscribe((event) => {
      this.currentLang = event.lang as 'en' | 'es';
      this.translate.get('PROJECTS.ALL').subscribe((text: string) => {
        this.showAllLabel = text;
      });
      this.filterProjects('All');
    });
    
  }

  swiperOptions(): void {
    const swiperEl = document.querySelector('swiper-container');

    if (swiperEl) {
      const swiperParams: SwiperOptions = {
        navigation: true,
        pagination: true,
        loop: false,
        grabCursor: true,
        effect: 'coverflow',
        centeredSlides: true,
        slidesPerView: 1,
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        on: {
          init() {
            console.log('Swiper initialized');
          },
        },
      };
      Object.assign(swiperEl, swiperParams);
      swiperEl.initialize();
      console.log("Swiper initialized");
    } else {
      console.error('Swiper element not found');
    }
  }


  filterProjects(language: string): void {
    this.selectedLanguage = language;
    const pagination = document.querySelector('.pagination-buttons');
    if (language === 'All') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(project => project.languages.includes(language));
    }
    this.currentPage = 1;
    this.paginateProjects();
    this.scrollToTop();
  }

  paginateProjects(): void {
    const start = (this.currentPage - 1) * this.projectsPerPage;
    const end = start + this.projectsPerPage;
    this.paginatedProjects = this.filteredProjects.slice(start, end);
  }

  nextPage(): void {
    if (this.currentPage * this.projectsPerPage < this.filteredProjects.length) {
      this.currentPage++;
      this.paginateProjects();
      this.scrollToTop();
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.paginateProjects();
      this.scrollToTop();
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  openModal(project: Project): void {
    this.selectedProject = project;
    setTimeout(() => {
      const modal = document.querySelector('.modal');
      const modalContent = document.querySelector('.modal-content');
      if (modal && modalContent) {
        modal.classList.add('show');
        setTimeout(() => {
          modalContent.classList.add('show');
          if (this.selectedProject) {
            this.swiperOptions();
          }
        }, 100);
      }
    }, 100);
  }

  closeModal(): void {
    const modal = document.querySelector('.modal');
    const modalContent = document.querySelector('.modal-content');
    if (modal && modalContent) {
      modalContent.classList.remove('show');
      setTimeout(() => {
        modal.classList.remove('show');
      }, 500);
    }
    setTimeout(() => {
      this.selectedProject = null;
    }, 1000);
  }

  closeModalOnClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.closeModal();
    }
  }


}
