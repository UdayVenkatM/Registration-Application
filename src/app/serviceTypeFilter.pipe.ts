import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serviceTypeFilter'
})
export class ServiceTypeFilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
  
    return items.filter(item => {
      return Object.keys(item).some(key => {
        return String(item.serviceType).toLowerCase().includes(searchText.toLowerCase());
      });
    });
   }
}