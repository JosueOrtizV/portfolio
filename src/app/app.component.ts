import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  @ViewChild('downloadButton') downloadButton!: ElementRef;
  title = 'portafolio';
  currentLanguage = 'en';

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    // Localstorage con el idioma
    if (typeof localStorage !== 'undefined') {
      const savedLanguage = localStorage.getItem('language');
      if (savedLanguage) {
        this.translate.use(savedLanguage);
        this.currentLanguage = savedLanguage;
      }
    }
    // Suscribir al cambio de idioma
    this.translate.onLangChange.subscribe((event) => {
      this.updateDownloadLink(event.lang);
      this.saveLanguage(event.lang);
    });
  }

  ngAfterViewInit(): void {
    // Inicializar enlace de descarga después de que la vista esté cargada
    this.updateDownloadLink(this.translate.currentLang);
  }

  updateDownloadLink(lang: string): void {
    const downloadLink = lang === 'es' ? '/assets/cv/Josue-Ortiz-CV.pdf' : '/assets/cv/Josue-Ortiz-CV-EN.pdf';
    this.downloadButton.nativeElement.href = downloadLink;
    this.downloadButton.nativeElement.download = lang === 'es' ? 'Josue-Ortiz-CV.pdf' : 'Josue-Ortiz-CV-EN.pdf';
  }

  switchLanguage(language: string) {
    this.translate.use(language);
    this.currentLanguage = language;
    this.saveLanguage(language);
  }

  saveLanguage(language: string): void {
    localStorage.setItem('language', language);
  }

  confirmDownload(event: Event): void {
    event.preventDefault();
    const lang = this.translate.currentLang;
    const downloadText = lang === 'es' ? 'Quieres descargar el archivo ' : 'Do you want to download the file ';
    const downloadFile = lang === 'es' ? '"Josue-Ortiz-CV.pdf"' : '"Josue-Ortiz-CV-EN.pdf"';
    const confirmation = confirm(downloadText + downloadFile + ' ?');
    if (confirmation) {
      window.open(this.downloadButton.nativeElement.href, '_blank');
    }
  }
  
}
