import { Injectable } from '@angular/core';
import { MessageService, ToastMessageOptions } from 'primeng/api';


@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor( private _messageService: MessageService) { }

  show(message: ToastMessageOptions) {
    this._messageService.add({
      key: 'dashboard-toast',
      life: 400000,
      ...message
    })
  }
}
