import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListOfNames } from '../list-of-names/list-of-names';

@Component({
  templateUrl: 'list-of-lists.html',
})
export class ListOfLists {

    private girl: boolean;
    public listOfLists: Array<any> = [
    {
      listName:'Nejoblíbenější česká jména 2015',
      labels: ['top', 'czech', '2015'], 
      id: 1
    },
    { 
      listName:'Kalendářní jména', 
      labels: ['czech', 'traditional'],
      id: 2
    },
    { 
      listName:'Redakční výběr neobvyklých jmen', 
      labels: ['uncommon', 'czech'],
      id: 3
    }
    ]

  constructor(private nav: NavController) {
    this.girl = true;
  }
  continue(){
    this.nav.setRoot(ListOfNames,{
      showedList: 'mainList'
    });
  }
}
