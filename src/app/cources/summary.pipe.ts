import {Pipe, PipeTransform} from '@angular/core';
//import PipeTransform interface

@Pipe({
    name:'summary'
})
export class SummaryPipe implements PipeTransform{
    //implement PipeTransform interface
    //https://angular.io/api/core/PipeTransform
    transform(value: string,arg?:any){
        if(!value)
            return null;
        
        return value.substr(0,50)+'...';
    }
    
}
