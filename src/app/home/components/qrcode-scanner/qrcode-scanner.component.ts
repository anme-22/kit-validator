import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';

import {Html5QrcodeScanner} from "html5-qrcode";
import {Html5Qrcode} from "html5-qrcode";
import { PrimengModule } from '../../../shared/primeng/primeng.module';
@Component({
  selector: 'app-qrcode-scanner',
  imports: [CommonModule, PrimengModule],
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
    this.isScanning = true;
    setTimeout(() => {
      this.html5QrCode = new Html5Qrcode("reader");
      this.html5QrCode.start(
        { facingMode: "environment" },
        { fps: 10, qrbox: { width: 250, height: 250 } },
        (decodedText) => {
          console.log("Resultado:", decodedText);
          this.scanResult = decodedText;
          this.stopScanning();
        },
        (error) => console.error(error)
      );
    }); // Marca que el escaneo está en curso
  }

  stopScanning() {
    if (this.html5QrCode) {
      this.html5QrCode.stop().then(() => {
        console.log("Escaneo detenido");
        this.isScanning = false; // Ocultar el div#reader DESPUÉS de detener el escaneo
      }).catch(err => console.error("Error al detener el escáner:", err));
    } else {
      this.isScanning = false; // Asegurarse de que isScanning sea false si html5QrCode no está inicializado
    }
  }
}

