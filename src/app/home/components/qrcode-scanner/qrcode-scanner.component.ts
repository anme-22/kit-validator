import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnDestroy } from '@angular/core';

import {Html5QrcodeScanner} from "html5-qrcode";
import {Html5Qrcode} from "html5-qrcode";
@Component({
  selector: 'app-qrcode-scanner',
  imports: [CommonModule],
  templateUrl: './qrcode-scanner.component.html',
  styleUrl: './qrcode-scanner.component.css'
})
export class QrcodeScannerComponent implements  OnDestroy {

  scanResult: string | null = null;
  isScanning = false;
  html5QrCode!: Html5Qrcode;

  ngOnDestroy() {
    this.stopScanning();
  }


  startScanner() {
    this.html5QrCode = new Html5Qrcode("reader"); // Asigna la instancia a la variable de clase
  
    this.html5QrCode.start(
      { facingMode: "environment" }, // Usa la cámara trasera
      { fps: 10, qrbox: { width: 250, height: 250 } },
      (decodedText) => {
        console.log("Resultado:", decodedText);
        this.scanResult = decodedText; // Guarda el resultado escaneado
        this.stopScanning(); // Detener el escáner después de escanear
      },
      (error) => console.error(error)
    );
  
    this.isScanning = true; // Marca que el escaneo está en curso
  }

  stopScanning() {
    if (this.html5QrCode) {
      this.html5QrCode.stop().then(() => {
        console.log("Escaneo detenido");
        this.isScanning = false;
      }).catch(err => console.error("Error al detener el escáner:", err));
    }
  }
}

