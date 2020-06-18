import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mysort'
})
export class MysortPipe implements PipeTransform {

  transform(value: any,param:string): any {
    console.log(value);
    console.log(param);
    if(param === "name"){
      value.sort((a,b)=>{
        if(a.name>b.name)
        return 1;
        else
        return -1;
      })
    }
    else if(param==="cname"){
      value.sort((a,b)=>{
        if(a.cname>b.cname)
        return 1;
        else
        return -1;
      })
    }
    return value;
  }

}
