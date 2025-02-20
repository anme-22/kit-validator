import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';

@NgModule({
  exports: [
    InputTextModule,
    FloatLabelModule,
    ButtonModule,
    ToastModule,
    CardModule,
    CarouselModule],
})
export class PrimengModule {}
