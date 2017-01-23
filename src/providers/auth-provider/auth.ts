import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthProvider {

  public userUnsortedListFbPushKey: string = '-JZl_BbXymAnOCPppMzP'
  public userLikedListFbPushKey: string = '-Blt_BbXymAnOCPppPrD'
  public userDislikedListFbPushKey: string = '-Mnc_BbXymAnOCPppIuj'

  constructor(public http: Http) {
  }

}
