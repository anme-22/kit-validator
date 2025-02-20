import { Component } from '@angular/core';
import { PrimengModule } from '../../../shared/primeng/primeng.module';

@Component({
  selector: 'app-instructions-carousel',
  imports: [PrimengModule],
  templateUrl: './instructions-carousel.component.html',
  styleUrl: './instructions-carousel.component.css'
})
export class InstructionsCarouselComponent {
  images = [
    {
      url: '../../../../assets/img/qr4.png',
      description: 'Coloca tu dispositivo sobre un código QR para escanearlo.'
    },
    {
      url: '../../../../assets/img/qr3.png',
      description: 'Coloca tu dispositivo sobre un código QR para escanearlo.'
    },
  ];

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];


}
