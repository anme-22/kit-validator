import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Html5Qrcode } from "html5-qrcode";
import { PrimengModule } from '../../../shared/primeng/primeng.module';

@Component({
  selector: 'app-qrcode-scanner',
  imports: [CommonModule, PrimengModule],
  templateUrl: './qrcode-scanner.component.html',
  styleUrl: './qrcode-scanner.component.css'
})
export class QrcodeScannerComponent   {

  scanResult: string | null = null;
  isScanning = false;
  html5QrCode!: Html5Qrcode;

  constructor(private router: Router) {}


  startScanner() {
    this.isScanning = true;
    setTimeout(() => {
      this.html5QrCode = new Html5Qrcode("reader");
      this.html5QrCode.start(
        { facingMode: "environment" },
        { fps: 10, qrbox: { width: 250, height: 250 } },
        (decodedText) => {
          this.scanResult = decodedText;
          this.stopScanning();
          this.router.navigate(['/kit-detail', { result: decodedText }]); 
        },
        (error) => console.error(error)
      );
    }); 
  }

  stopScanning() {
    if (this.html5QrCode) {
      this.html5QrCode.stop().then(() => {
        console.log("Escaneo detenido");
        this.isScanning = false; 
      }).catch(err => console.error("Error al detener el escáner:", err));
    } else {
      this.isScanning = false; 
    }
  }
}