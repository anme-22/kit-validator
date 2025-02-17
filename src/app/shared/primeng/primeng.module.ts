import { NgModule } from '@angular/core'
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';


@NgModule({
    exports: [InputTextModule, FloatLabelModule, ButtonModule, ToastModule],
  })
  export class PrimengModule {}