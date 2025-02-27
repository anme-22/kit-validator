import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieManagementService } from '../../../auth/services/cookie-management.service';
//import { ThemeService } from '../../shared/services/theme.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PrimengModule } from '../../../shared/primeng/primeng.module';
import { ChangePasswordDialogComponent } from '../../components/change-password-dialog/change-password-dialog.component';

@Component({
  selector: 'app-setting-page',
  imports: [PrimengModule],
  templateUrl: './setting-page.component.html',
  styleUrl: './setting-page.component.css',
  providers: [DialogService],
})
export class SettingPageComponent {
  ref: DynamicDialogRef | undefined;

  constructor(
    private dialogService: DialogService,
    private router: Router,
    private _cookieService: CookieManagementService
  ) {
    this.router.events.subscribe(() => {
      if (this.ref) {
        this.ref.close();
      }
    });
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
    // this.themeService.toggleTheme();
  }
}
