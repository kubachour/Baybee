import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthProvider {

  public userUnsortedListFbPushKey: string = '-KbzSshu6e90SQ4hHiAs'
  public userLikedListFbPushKey: string = '-KbzT1Wp_8ofTkbLHWxx'
  public userDislikedListFbPushKey: string = '-KbzTWB9mgzZqIOl2RlX'

  constructor(public http: Http) {
  }

}
