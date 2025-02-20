import { Component } from '@angular/core';
import { PrimengModule } from '../../../shared/primeng/primeng.module';
import { QrcodeScannerComponent } from '../../components/qrcode-scanner/qrcode-scanner.component';
import { InstructionsCarouselComponent } from '../../components/instructions-carousel/instructions-carousel.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
//  imports: [ QrcodeScannerComponent],
  imports: [InstructionsCarouselComponent, PrimengModule, QrcodeScannerComponent, CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  showInstructions = true; // Variable para controlar la visibilidad de las instrucciones
  showQRCodeScanner = false; // Variable para controlar la visibilidad del escáner QR
  showHelpButton = false; // Variable para controlar la visibilidad del botón de ayuda

  ngAfterViewInit() {
    // Mostrar el botón de ayuda solo cuando se muestra el escáner QR
    const qrScannerElement = document.querySelector('app-qrcode-scanner') as HTMLElement;
    const observer = new MutationObserver(() => {
      this.showHelpButton = qrScannerElement?.offsetParent !== null; // Verifica si el elemento está visible
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  next() {
    this.showInstructions = false; // Oculta las instrucciones
    this.showQRCodeScanner = true; // Muestra el escáner QR
    this.showHelpButton = true; 
  }

  showHelp() {
    this.showHelpButton = true; // Oculta el botón de ayuda
    this.showInstructions = true;
    this.showQRCodeScanner = false;
  }

}
