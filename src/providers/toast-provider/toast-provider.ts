import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ToastController } from 'ionic-angular';
import 'rxjs/add/operator/map';

@Injectable()
export class ToastProvider {

  constructor(private toastController: ToastController) {}
  
  make(text: string, timeshowed?: number, position = 'bottom'){
    let toast = this.toastController.create({
      message: text,
      duration: timeshowed || 800,
    })
    toast.present();
  }

}

