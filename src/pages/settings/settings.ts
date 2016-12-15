import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ListOfLists } from '../list-of-lists/list-of-lists';
import { NamesListProvider} from '../../providers/names-list-provider/names-list-provider';

@Component({
  templateUrl: 'settings.html'
})
export class Settings {

  public girlActive: boolean;
  public boyActive: boolean;
  public unknownSexActive: boolean;
  public inputSureName: string;

  constructor(private nav: NavController, private NamesListProvider: NamesListProvider) {

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

  this.NamesListProvider.selectedSex = sex;
  
}

continue(){
    this.NamesListProvider.sureNameEntered = this.inputSureName;
    console.log(this.NamesListProvider.selectedSex + " " + this.NamesListProvider.sureNameEntered + " " + this.inputSureName);
    this.nav.setRoot(ListOfLists,{
      message: 'ahoj'
    });
}
  
}
