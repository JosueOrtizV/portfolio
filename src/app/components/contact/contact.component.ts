import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  copy(text: string, tooltip: HTMLElement): void {
    navigator.clipboard.writeText(text).then(() => {
      console.log('Copied to clipboard: ', text);
      tooltip.textContent = 'Copied';
      setTimeout(() => {
        tooltip.textContent = 'Click to copy';
      }, 1000); // Vuelve a 'Click to copy' después de 2 segundos
    }).catch(err => {
      console.error('Could not copy text: ', err);
    });
  }
}
