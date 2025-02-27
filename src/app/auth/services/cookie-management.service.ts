import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../../environments/environment.development';
import moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class CookieManagementService {
  constructor(private _cookieService: CookieService) {}

  setCookie(key: string, value: string) {
    this._cookieService.set(key, value, {
      // domain: environment.domain,
      domain: location.host.startsWith('localhost')
        ? 'localhost'
        : location.host,
      path: '/',
      expires: moment().add(12, 'hours').toDate(),
    });
  }

  getCookie(key: string) {
    return this._cookieService.get(key);
  }

  deleteCookie(key: string) {
    this._cookieService.delete(key, '/');
  }
}
