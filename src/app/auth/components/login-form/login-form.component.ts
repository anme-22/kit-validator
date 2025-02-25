import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PrimengModule } from '../../../shared/primeng/primeng.module';
import { Icredentials } from '../../../shared/interfaces/user.interface';
import { AuthService } from '../../services/auth.service';
import { finalize, Subscription } from 'rxjs';
import { Methods } from '../../../utils/utils';
import { CookieManagementService } from '../../services/cookie-management.service';
import { Router } from '@angular/router';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule, PrimengModule, CommonModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  public isLoading: boolean = false;
  public loginForm!: FormGroup;
  protected loginSubscription!: Subscription;
  protected redirectTo: string = '';

  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService,
    private _cookieService: CookieManagementService,
    private _router: Router,
    private _toastService: ToastService
  ) {}

  get isEmptyEmail() {
    return (
      this.loginForm.get('username')?.touched &&
      this.loginForm.get('username')?.hasError('required')
    );
  }

  get isInvalidEmailFormat() {
    return (
      this.loginForm.get('username')?.touched &&
      this.loginForm.get('username')?.hasError('username')
    );
  }

  get isEmptyPassword() {
    return (
      this.loginForm.get('password')?.touched &&
      this.loginForm.get('password')?.hasError('required')
    );
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      const data: Icredentials = this.loginForm.value;
      console.log('Data:', data);

      this.loginSubscription = this._authService
        .login(data)
        .pipe(finalize(() => (this.isLoading = false)))
        .subscribe({
          next: (res) => {
            if (this.canAccess(res.token)) {
              this._cookieService.setCookie('token', res.token);
              console.log('Login success');
              const url = this.redirectTo ? this.redirectTo : '/home';
              this._router.navigate([url]).then();
            } else {
              console.log('No tienes los permisos de acceso');
              this._toastService.show({
                summary: 'Error permisos de usuario',
                detail: 'No tienes los permisos para acceder a este módulo',
                severity: 'error',
              });
            }
          },
          error: (error) => {
            this._toastService.show({
              summary: 'Error al iniciar sesión',
              detail: 'Usuario ó contraseña incorrectos',
              severity: 'error',
            });
          },
        });
    }
  }

  canAccess(token: string) {
    const system = this._authService.parseJWT(token).sistemas;

    if (system.length) {
      return Methods.getRolOfThisSystem(system);
    } else {
      return null;
    }
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.loginForm = this._fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}
