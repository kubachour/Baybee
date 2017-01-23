import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

import { SharePage } from '../../pages/share-page/share-page';
import { ListOfNames } from '../../pages/list-of-names/list-of-names';
import { Settings } from '../../pages/settings/settings';


@Component({
  selector: 'favourites-tab',
  templateUrl: 'favourites-tab.html'
})

export class FavouritesTab {

  tab3Root: any = SharePage;
  tab1Root: any = ListOfNames;
  tab2Root: any = Settings;
  mainListParams: any;
  myDislikesPageParams: any;
  myFavouritesPageParams: any;

  constructor(private navParams: NavParams) {

    this.navParams = navParams;

    this.mainListParams = {
      listToShow: 'unsorted',
      pageTitle: 'Seznam všech jmen'
    };
    this.myDislikesPageParams = {
      listToShow: 'disliked',
      pageTitle: 'Jména, která se mi nelíbí'
    };
    this.myFavouritesPageParams = {
      listToShow: 'liked',
      pageTitle: 'Můj výběr'
    }
    
  }
}