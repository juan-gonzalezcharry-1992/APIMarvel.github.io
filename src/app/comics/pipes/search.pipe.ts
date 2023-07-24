import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipe implements PipeTransform {

  transform(results: any[], searchText: string): any[] {
    if (!results || !searchText || searchText.length < 2) {
      return results;
    }

    searchText = searchText.toLowerCase();

    return results.filter(item => {
      // Personaliza el criterio de filtrado según tus necesidades
      console.log('--> Buscaste', searchText)
      return item.title.toLowerCase().includes(searchText);
    });
  }
}

