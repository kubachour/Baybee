import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFire } from 'angularfire2';
import 'rxjs/Rx';

@Injectable()
export class NamesListProvider {

  public dbUserTempKey: string;
  public sureNameEntered: string = 'Chour';
  public selectedSex: string;
  // private af: any;

  public constructor(private af: AngularFire) {}

findAllNames(): Observable<any[]>{

  

  // return this.af.database.list('/UserListOfNames/unsorted/-JZl_BbXymAnOCPppMzP/');
  const NamesByUserList = this.af.database.list('/UserListOfNames/unsorted/-JZl_BbXymAnOCPppMzP/');

  const NamesByPushKeys = NamesByUserList
    .map(list => list.map(name => this.af.database.object('Names/' + name.$key)))
    .flatMap(listOfObservables => Observable.combineLatest(listOfObservables))
    
    

  return NamesByPushKeys;
}
  
}

