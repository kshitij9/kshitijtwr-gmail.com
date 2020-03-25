import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFilter'
})

//Pipe for filtering out messages within the specified timestamp
export class TimeFilterPipe implements PipeTransform {

    transform(items: any[], timestamp: number): any[] {
        if(!items) return [];
        if(!timestamp) return items;
        return items.filter(n => n.timestamp > timestamp);
    }
}
