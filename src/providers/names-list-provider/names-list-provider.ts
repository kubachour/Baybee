import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFire } from 'angularfire2';


@Injectable()
export class NamesListProvider {

  public dbUserTempKey: string;
  public sureNameEntered: string;
  public selectedSex: string;
  // private af: any;

  public constructor(private af: AngularFire) {}

findAllNames(): Observable<any[]>{
  return this.af.database.list('/UserListOfNames/-JZl_BbXymAnOCPppMzP/');
}

}

