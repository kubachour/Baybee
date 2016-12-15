import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ListOfLists } from '../list-of-lists/list-of-lists';

@Component({
  templateUrl: 'settings.html'
})
export class Settings {

  public girlActive: boolean;
  public boyActive: boolean;
  public unknownSexActive: boolean;

  constructor(private nav: NavController) {

  this.girlActive = false;
  this.boyActive = false;
  this.unknownSexActive = true;
  this.nav = nav;

  }

sexClick(sex: string){
  if (sex === 'boy'){
    this.girlActive = false;
    this.boyActive = true;
    this.unknownSexActive = false;
 
 } else if (sex === 'girl') {
    this.girlActive = true;
    this.boyActive = false;
    this.unknownSexActive = false;
  
 } else {
    this.girlActive = false;
    this.boyActive = false;
    this.unknownSexActive = true;
  }
  
}

continue(){
    this.nav.setRoot(ListOfLists,{
      message: 'ahoj'
    });
}
  
}
