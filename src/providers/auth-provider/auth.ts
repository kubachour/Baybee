import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthProvider {

  public userUnsortedListFbPushKey: string = '-Kc29gXJNv__x9ebDMd0'
  public userLikedListFbPushKey: string = '-KcbeuV8Dvn4nCiiZVjX'
  public userDislikedListFbPushKey: string = '-Kc2PRx1jhBQOkz_PKZc'

  constructor(public http: Http) {
  }

}
