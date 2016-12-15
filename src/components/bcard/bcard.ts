import { Component } from '@angular/core';

@Component({
  selector: 'bcard',
  templateUrl: 'bcard.html',
})
export class Bcard {

  text: string;

  constructor() {
    this.text = 'David Chour';
  }
}
