import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  changePassword,
  Icredentials,
} from '../../shared/interfaces/user.interface';
import { environment } from '../../../environments/environment.development';
import { CookieManagementService } from './cookie-management.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public profileInfo!: any;
  public token!: string;

  constructor(
    private http: HttpClient,
    private _cookieService: CookieManagementService
  ) {}

  parseJWT(token: string) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload: any = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );
    return JSON.parse(jsonPayload);
  }

  public getUserInfo() {
    const token = this._cookieService.getCookie('token');
    return this.parseJWT(token);
  }

  public login(credentials: Icredentials) {
    return this.http.post<{ token: string }>(
      `${environment.apiGeneralUrl}/auth/login`,
      credentials
    );
  }

  public changePassword(passwords: changePassword) {
    return this.http.post(
      `${environment.apiGeneralUrl}/auth/modify-password`,
      passwords
    );
  }

  public getToken(): string | null {
    return this._cookieService.getCookie('token');
  }

  public isTokenExpired(token: string): boolean {
    const payload = this.parseJWT(token).exp;
    const currentTime = Math.floor(Date.now() / 1000);

    return payload < currentTime;
  }
}
