import { interval, map, range, tap } from "rxjs";

//RXJS and Observables
const p = new Promise((resole, reject) => {

    setInterval(() => {
      resole(1200)
    }, 4000);
  });
  
  //асинхронен промис... изчаква резултата от асинхронната функция и го обработва след това
  Promise.resolve(100)
    .then((d) => d * 10)
    .then((x) => console.log('From promise', x)
    );
  
  //синхронна аналогия с Обзървабълс
  [1, 2, 3, 4].map((x) => x * 2).map((x) => x * 10);
  
  
  //асинхронна аналогия Observable
  
  // function interval(inatervalValue: number) {
  
  //   return new Observable<number>((observer) => {
  //     // observer.next(1000);
  //     // observer.next(2000);
  //     // observer.next(3000);
  
  //     let counter = 0;
  //     const timer = setInterval(() => {
  //       observer.next(counter++);
  //       observer.complete();
  //     }, inatervalValue)
      
  //това го извикваме когато искаме да премахнем нещо
  //     return () => {
  //       clearInterval(timer);
  //       observer.unsubscribe();
  //     }
  //   });
  // }
  
  const stream$ = interval(3000).pipe(map((x) => x * 2));
  
  setTimeout(() => {
    stream$.subscribe({
      next: (x) => console.log('data', x),
      error: (error) => console.log(`Error occured ${error}`),
      complete: () => console.log('Stream has been completed'),
  
    });
  
  }, 3000);
  
  const obs = range(1, 10)
    .pipe(
      tap(i => console.log(`Hello: ${i}`))
    );
  //с pipe можем да модифицираме данните на потока преди да се събскрайабнем за него