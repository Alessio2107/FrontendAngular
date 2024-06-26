import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value:any,nome:string): any[] {
    return value.filter(function(x: any){
      return x.nome==nome;
    });
  }

}
