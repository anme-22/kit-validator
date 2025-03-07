import { Component, OnInit } from '@angular/core'; // Importa OnInit
import { Router } from '@angular/router';
import { CookieManagementService } from '../../../auth/services/cookie-management.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PrimengModule } from '../../../shared/primeng/primeng.module';
import { ChangePasswordDialogComponent } from '../../components/change-password-dialog/change-password-dialog.component';
import { ThemeService } from '../../../shared/theme.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-setting-page',
  imports: [PrimengModule, FormsModule],
  templateUrl: './setting-page.component.html',
  styleUrl: './setting-page.component.css',
  providers: [DialogService],
})
export class SettingPageComponent implements OnInit {
  // Implementa OnInit
  ref: DynamicDialogRef | undefined;
  isDarkMode: boolean = false; // Nueva propiedad para el estado del tema

  constructor(
    private dialogService: DialogService,
    private router: Router,
    private _cookieService: CookieManagementService,
    public themeService: ThemeService
  ) {
    this.router.events.subscribe(() => {
      if (this.ref) {
        this.ref.close();
      }
    });
  }

  ngOnInit() {
    this.isDarkMode = this.themeService.isDark(); // Inicializa la propiedad con el estado del servicio
  }

  changePassword() {
    const ref = this.dialogService.open(ChangePasswordDialogComponent, {
      header: 'Cambiar Contraseña',
      width: '23rem',
      closable: true,
      modal: true,
    });
  }

  logout() {
    this._cookieService.deleteCookie('token');
    this.router.navigate(['/auth']);
  }

  toggleTheme() {
    this.themeService.setDarkMode(this.isDarkMode); // Actualiza el servicio con el estado local
    //this.isDarkMode = this.themeService.isDark(); // Actualiza el estado local
  }
}
