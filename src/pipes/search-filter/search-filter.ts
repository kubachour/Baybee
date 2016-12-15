import { Pipe, PipeTransform } from '@angular/core';

@Pipe ({
    name: 'searchFilter' 
})

export class SearchFilter implements PipeTransform {
    transform(list: any, query: string) {
        if(query && query != '') {
            let loweredQuery = query.toLowerCase();
            return list.filter(item => 
                // what if I want to search all names, not even those loaded?
                item.name.toLowerCase().indexOf(loweredQuery) > -1
            )
         }
         else return list;

    }
}