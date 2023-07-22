import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduce',
  pure: false // not pure function will re-render;  ako e true pure function will be memoized(да сторва да кешва , да не преизчислява отново дадения код)
  //pure:true // е дефолтния вариант и винаги се опитва да сторва/кешва
})
export class ReducePipe<T> implements PipeTransform {

  transform(array: T[], reduceFn: (acc: any, curr: T) => any, initialValue: T): unknown {
    // const sum = ((acc,curr)=>acc+curr)
    //[1,2,3,4,5].reduce(sum,0)
    return array.reduce(reduceFn, initialValue)
  }

}
