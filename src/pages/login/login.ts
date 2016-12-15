import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Settings } from '../settings/settings';

@Component({
  templateUrl: 'login.html'
})

export class Login {

  constructor(private navCtrl: NavController) {

  }

  login(){
    this.navCtrl.push(Settings);
  }
}
