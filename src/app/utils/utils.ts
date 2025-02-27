import { environment } from '../../environments/environment.development';

export class Methods {
  static getRolOfThisSystem(roles: any[]) {
    return roles.find((e) => {
      return e.id_sistema === environment.system;
    });
  }
}
