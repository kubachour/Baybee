import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthProvider {

  public userUnsortedListFbPushKey: string = '-KbzTVdWFjS7iFiw69ao'
  public userLikedListFbPushKey: string = '-Kc2P3Yt16x-uBfCPm6y'
  public userDislikedListFbPushKey: string = '-Kc2P8AO6YaO38kQX1pc'

  constructor(public http: Http) {
  }

}
