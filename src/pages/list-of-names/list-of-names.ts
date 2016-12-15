import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NameView } from '../name-view/name-view';
import { ListOfLists } from '../list-of-lists/list-of-lists';
import { ToastProvider } from '../../providers/toast-provider/toast-provider';
import { NamesListProvider } from '../../providers/names-list-provider/names-list-provider';
import { Observable } from 'rxjs/Observable';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
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
    public namesDB: any;
    private userDB: any;
    private searchQuery: string = '';
    private UserDbPath: string = '';
    // public af: any;
    private namesArray: any;


 ionViewWillLeave() {
    // this.updateList();
  }    
   
constructor(private nav: NavController, private navParams: NavParams, private toastProvider: ToastProvider, private namesListProvider: NamesListProvider, af: AngularFire)  {
    this.sureNameEntered = this.namesListProvider.sureNameEntered;
    this.toastProvider = toastProvider;
    // this.af = af;
    this.actualList = this.navParams.get('listToShow') || 'unsorted';
    this.pageTitle = this.navParams.get('pageTitle') || 'Seznam jmen';

    // this.dbItems = this.af.database.list('/users/dummy3/lists', { preserveSnapshot: false });
    
  //   let DbPath = '/users/dummy1/lists/' + this.actualList;
  //   this.namesDB = af.database.list(DbPath, {
  //     query: {
  //             // place for limiting no. of names loaded
  //     }  
  //   })
  //   .map((lists) => {
  //     this.namesArray = lists;
  //     return lists.map( list => {
  //     return list;
  //       });
  //   });
  // }
  
  // updateList(item: any){
  //   this.UserDbPath = '/users/' + 'dummy3' + '/lists/whatever'
  //   this.userDB = this.af.database.list(this.UserDbPath);
  //   console.log(item)
  //   this.userDB
  //   .remove();
  //   this.userDB
  //   .push({'item': item});
    // this.userDB.update(this.namesArray);
    // konvertovat array na object
    // console.log(this.namesArray);
    // console.log(this.namesArray[0]);
    // this.namesDB
    // .remove(itemKey
    // )
  }  

  
  // updateDB() {
  //   this.dbItems.remove();
  //   let tempArraySpliced = this.dataListAll.splice(-1,1);
  //   console.log(tempArraySpliced);
  //   let tempArray = {
  //     'unsorted': tempArraySpliced,
  //     'favourite': this.dataListDisliked.splice(-1,1), 
  //     'disliked': this.dataListFavourites.splice(-1,1)
      
  //     // 'unsorted': ['a', {'b':1}],
  //     // 'favourite': [],
  //     // 'disliked': []
  //   };
  //   console.log()
  //   console.log('tempArray from update DB is');
  //   console.log(tempArray)
  //   let postID = this.dbItems.push(tempArray);
  //   this.namesListProvider.dbUserTempKey = postID.key;
  //   console.log(this.namesListProvider.dbUserTempKey);

  
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
