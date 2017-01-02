import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NameView } from '../name-view/name-view';
import { ListOfLists } from '../list-of-lists/list-of-lists';
import { ToastProvider } from '../../providers/toast-provider/toast-provider';
import { NamesListProvider } from '../../providers/names-list-provider/names-list-provider';
import { Observable } from 'rxjs/Observable';
import { SearchFilter } from '../../pipes/search-filter/search-filter';
import 'rxjs/add/operator/map';


@Component({
  templateUrl: 'list-of-names.html',
})
export class ListOfNames {

    public sureNameEntered: string;
    public pageTitle: string;
    private swipingSide: string;
    private actualList: string;
    private af: any;
    // public namesDB: any;
    private userDB: any;
    private searchQuery: string = '';
    private UserDbPath: string = '';
    // public af: any;
    private namesArray: any;


 ionViewWillLeave() {
    // this.updateList();
  }    
   
constructor(private nav: NavController, private navParams: NavParams, private toastProvider: ToastProvider, private namesListProvider: NamesListProvider)  {
    this.sureNameEntered = this.namesListProvider.sureNameEntered;
    // this.af = af;
    this.toastProvider = toastProvider;
    this.actualList = this.navParams.get('listToShow') || 'unsorted';
    this.pageTitle = this.navParams.get('pageTitle') || 'Seznam jmen';

    // this.namesDB = af.database.list('/UserListOfNames/-JZl_BbXymAnOCPppMzP/namesContained');
 
  }  

  findListofNames():Observable<any> {
    return this.af.list('/UserListOfNames/-JZl_BbXymAnOCPppMzP/namesContained')
      .map(Observable)
      .do(console.log());     
  }
  
  continue(){
    this.nav.push(NameView);
  }

  ondrag(item) {
   let percent = item.getSlidingPercent();
    if (percent > -1){
      this.swipingSide = 'left'; 
      console.info('Swiping ' + this.swipingSide);
    } else if(percent < 1) {
      this.swipingSide = 'right'; 
      console.info('Swiping ' + this.swipingSide);
    } 
  }

  onSwipe(item:any) {
    if (this.swipingSide === 'left') {
      // this.updateList(item);
      this.toastProvider.make('Jméno přesunuto do Nelíbí se mi');
      }
    if (this.swipingSide === 'right') {

      this.toastProvider.make('Jméno přesunuto do vašeho výběru');
      }
  }


}
