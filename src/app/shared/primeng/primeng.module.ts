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
import { InputSwitchModule } from 'primeng/inputswitch';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SidebarModule } from 'primeng/sidebar';
import { ToggleSwitchModule } from 'primeng/toggleswitch';

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
    InputSwitchModule,
    DynamicDialogModule,
    PanelMenuModule,
    SidebarModule,
    ToggleSwitchModule,
  ],
})
export class PrimengModule {}
