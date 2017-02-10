import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NameView } from '../name-view/name-view';
import { ListOfLists } from '../list-of-lists/list-of-lists';
import { ToastProvider } from '../../providers/toast-provider/toast-provider';
import { AuthProvider } from '../../providers/auth-provider/auth';
import { NamesListProvider } from '../../providers/names-list-provider/names-list-provider';
import { SearchFilter } from '../../pipes/search-filter/search-filter';
import 'rxjs/add/operator/map';


@Component({
  templateUrl: 'list-of-names.html',
})
export class ListOfNames {

    public sureNameEntered: string;
    public pageTitle: string;
    private swipingSide: string;
    private actualPage: string;
    public namesList: any[];
    private searchQuery: string = '';
    private UserDbPath: string = '';
    private namesArray: any;
    private namesSwipedLeft: Array<any> = [];
    private namesSwipedRight: Array<any> = [];

ionViewWillEnter() {
  this.namesListProvider.findAllNames(this.actualPage)
    .do(console.log)
    .subscribe(
      names => this.namesList = names
    );
  
}

ionViewWillLeave() {
var namesKeysObject = {}
var namesExtracted = this.namesList.map((a) => a.$key)

namesExtracted.forEach(function(key) {
  namesKeysObject[key] = 'true'
})

this.namesListProvider.pushList(this.actualPage, namesKeysObject);
  
}
   
constructor(private nav: NavController, private navParams: NavParams, private toastProvider: ToastProvider, private namesListProvider: NamesListProvider)  {
    this.sureNameEntered = this.namesListProvider.sureNameEntered;
    
    this.toastProvider = toastProvider;
    this.actualPage = this.navParams.get('listToShow') || 'unsorted';
    this.pageTitle = this.navParams.get('pageTitle') || 'Seznam jmen';


  }  

 
  
  continue(){
    this.nav.push(NameView);
  }

  ondrag(nameOrder) {
   let percent = nameOrder.getSlidingPercent();
    if (percent > -1){
      this.swipingSide = 'left'; 
      console.info('Swiping ' + this.swipingSide);
    } else if(percent < 1) {
      this.swipingSide = 'right'; 
      console.info('Swiping ' + this.swipingSide);
    } 
  }

  onSwipe(nameOrder:number) {
  console.log('Jméno po swipování: ' + this.namesList[nameOrder].$key + ' ' + this.namesList[nameOrder].name)  
    
    if (this.swipingSide === 'left') {
      // ulozit do namesSwipedLeft
      // vyhodit ze seznamu this.namesList pomoci delete
      // on WillLeave poslat seznamy 3x
      this.toastProvider.make('Jméno ' + this.namesList[nameOrder].name + ' do Nelíbí se mi');
      }
    if (this.swipingSide === 'right') {

      this.toastProvider.make('Jméno ' + this.namesList[nameOrder].name + ' do vašeho výběru');
      }
  }


}
