import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listFilterPipe',
})
export class ListFilterPipe implements PipeTransform {
  transform(
    items: any,
    propertyKeys: Array<string>,
    searchTerm: string
  ): Array<any> {
    if (!items || !propertyKeys || !searchTerm) {
      return items;
    }

    return items.filter((item: any) => {
      for (let i = 0; i < propertyKeys.length; i++) {
        const propertyToSearch = propertyKeys[i];
        const value = item[propertyToSearch];
        // prettier-ignore
        if (value && value.toString().toLowerCase().indexOf(searchTerm) !== -1) { 
          return true; 
        }
      }
      return false;
    });
  }
}
