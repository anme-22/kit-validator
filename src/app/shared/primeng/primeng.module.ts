import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { TableModule } from 'primeng/table';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

@NgModule({
  exports: [
    InputTextModule,
    FloatLabelModule,
    ButtonModule,
    ToastModule,
    CardModule,
    CarouselModule,
    TableModule,
    IconFieldModule,
    InputIconModule,
  ],
})
export class PrimengModule {}
