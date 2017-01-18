import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFire } from 'angularfire2';
import { AuthProvider } from '../auth-provider/auth'; 
import 'rxjs/Rx';

@Injectable()
export class NamesListProvider {

  public dbUserTempKey: string;
  public sureNameEntered: string = 'Chour';
  public selectedSex: string;
  private dislikedPushKey: string;
  private likedPushKey: string;
  private unsortedPushKey: string;
    // private af: any;

  public constructor(private af: AngularFire, private authProvider: AuthProvider) {
    this.unsortedPushKey = this.authProvider.userUnsortedListFbPushKey;
    this.likedPushKey = this.authProvider.userLikedListFbPushKey;
    this.dislikedPushKey = this.authProvider.userDislikedListFbPushKey;
  }

findAllNames(): Observable<any[]>{

  

  // return this.af.database.list('/UserListOfNames/unsorted/-JZl_BbXymAnOCPppMzP/');
  const NamesByUserList = this.af.database.list('/UserListOfNames/unsorted/' + this.unsortedPushKey + '/');

  const NamesByPushKeys = NamesByUserList
    .map(list => list.map(name => this.af.database.object('Names/' + name.$key)))
    .flatMap(listOfObservables => Observable.combineLatest(listOfObservables))
    
    

  return NamesByPushKeys;
}
  
}

