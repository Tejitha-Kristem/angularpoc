import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'namefilter'
})
export class NamefilterPipe implements PipeTransform {
  transform(value,search): any {
   
    if(!search) //while not searching
    return value; //retrun total data
    return value.filter(res=>
      res.name.toUpperCase().startsWith(search.toUpperCase())
      )
  }

}
