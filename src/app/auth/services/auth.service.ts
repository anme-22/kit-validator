import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Icredentials } from '../../shared/interfaces/user.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  parseJWT(token: string){
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload: any = decodeURIComponent(atob(base64).split('').map((c) => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
  }

  public login(credentials: Icredentials){
    return this.http.post<{ token: string}>(`${environment.apiGeneralUrl}/auth/login`, credentials);
  }

}
