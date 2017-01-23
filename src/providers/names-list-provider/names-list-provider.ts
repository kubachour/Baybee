import { Injectable } from '@angular/core';
import { Component, ViewChild } from '@angular/core';
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
  private actualPage: string;
  
  public constructor(private af: AngularFire, private authProvider: AuthProvider) {
    this.unsortedPushKey = this.authProvider.userUnsortedListFbPushKey;
    this.likedPushKey = this.authProvider.userLikedListFbPushKey;
    this.dislikedPushKey = this.authProvider.userDislikedListFbPushKey;
   
  }



findAllNames(pageName: string): Observable<any[]>{
  let pushKey;

  if (pageName === 'unsorted') {
    pushKey = this.unsortedPushKey
  }
  else if (pageName === 'liked') {
    pushKey = this.likedPushKey
  }
  else if (pageName === 'disliked') {
    pushKey = this.dislikedPushKey
  }
  else {
    pushKey = this.unsortedPushKey;
    console.log('Error when trying to get right name list :(')
  }
  
  const NamesByUserList = this.af.database.list('/UserListOfNames/' + pageName + '/' + pushKey + '/');

  const NamesByPushKeys = NamesByUserList
    .map(list => list.map(name => this.af.database.object('Names/' + name.$key)))
    .flatMap(listOfObservables => Observable.combineLatest(listOfObservables))
    
    

  return NamesByPushKeys;
}
  
}

