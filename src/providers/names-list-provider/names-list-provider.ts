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
  private pushKey: string;
  
  public constructor(private af: AngularFire, private authProvider: AuthProvider) {
    this.unsortedPushKey = this.authProvider.userUnsortedListFbPushKey;
    this.likedPushKey = this.authProvider.userLikedListFbPushKey;
    this.dislikedPushKey = this.authProvider.userDislikedListFbPushKey;
   
  }



findAllNames(pageName: string): Observable<any[]>{

  if (pageName === 'unsorted') {
    this.pushKey = this.unsortedPushKey
  }
  else if (pageName === 'liked') {
    this.pushKey = this.likedPushKey
  }
  else if (pageName === 'disliked') {
    this.pushKey = this.dislikedPushKey
  }
  else {
    this.pushKey = this.unsortedPushKey;
    console.log('Error when trying to get right name list :(')
  }
  
  const NamesByUserList = this.af.database.list('/UserListOfNames/' + pageName + '/' + this.pushKey + '/');

  const NamesByPushKeys = NamesByUserList
    .map(list => list.map(name => this.af.database.object('Names/' + name.$key)))
    .flatMap(listOfObservables => Observable.combineLatest(listOfObservables))

  console.log('Louduju z : ' + pageName)  
  
  return NamesByPushKeys;
}

pushList(pageName: string, nameKeysAsObject){
  console.log('Pushuju do : ' + pageName)
  const saveList = this.af.database.list('UserListOfNames/' + pageName + '/')

  let newPushKey = saveList.push(nameKeysAsObject).key
  console.log('novy pushKey je: ' + newPushKey)
  console.log('mazu pushKey: ' + this.pushKey)
  saveList
    .remove(this.pushKey)   

   if (pageName === 'unsorted') {
    this.unsortedPushKey = newPushKey
  }
  else if (pageName === 'liked') {
    this.likedPushKey = newPushKey
  }
  else if (pageName === 'disliked') {
    this.dislikedPushKey = newPushKey
  }
  else {
    console.log('Could not save this list :(')
  }
    
}
  
}

