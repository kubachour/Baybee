import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { SharePage } from '../pages/share-page/share-page';
import { Settings } from '../pages/settings/settings';
import { NameView } from '../pages/name-view/name-view';
import { Login } from '../pages/login/login';
import { ListOfNames } from '../pages/list-of-names/list-of-names';
import { ListOfLists } from '../pages/list-of-lists/list-of-lists';
import { Bcard } from '../components/bcard/bcard';
import { FavouritesTab } from '../components/favourites-tab/favourites-tab';
import { SearchFilter } from '../pipes/search-filter/search-filter';
import { ToastProvider } from '../providers/toast-provider/toast-provider';
import { NamesListProvider } from '../providers/names-list-provider/names-list-provider';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  apiKey: 'AIzaSyAKuiX2hGGLm1UUfAqNcgd85UgxnFRAwas',
  authDomain: 'baybee-e9869.firebaseapp.com',
  databaseURL: 'https://baybee-e9869.firebaseio.com/',
  storageBucket: 'baybee-e9869.appspot.com'
};

@NgModule({
  declarations: [
    MyApp,

    // pages
    SharePage,
    Settings,
    NameView,
    Login,
    ListOfNames,
    ListOfLists,

    // custom components
    Bcard,
    FavouritesTab,

    // pipes
    SearchFilter

  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SharePage,
    Settings,
    NameView,
    Login,
    ListOfNames,
    ListOfLists,
    FavouritesTab
  ],
  providers: [
    ToastProvider,
    NamesListProvider
  ]
})
export class AppModule {}
