import { Component } from '@angular/core';
import { QrcodeScannerComponent } from '../../components/qrcode-scanner/qrcode-scanner.component';

@Component({
  selector: 'app-home-page',
  imports: [QrcodeScannerComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
