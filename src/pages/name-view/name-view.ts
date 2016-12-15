import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Bcard } from '../../components/bcard/bcard';

@Component({
  templateUrl: 'name-view.html',
})
export class NameView {

  private neco: string;

  constructor(private nav: NavController) {
    this.neco = 'neco';
  }

}
