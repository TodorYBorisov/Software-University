import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { BehaviorSubject, Subject } from 'rxjs';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));



// subjects

const subj$$ = new Subject();

subj$$.subscribe(console.log);
subj$$.next(123);
subj$$.subscribe(console.log);
subj$$.next(1234);
subj$$.next(12345);

subj$$.subscribe({
  next: console.log,
  error: (error) => console.log(`Error: ${error}`),
  complete: () => console.log(`Obs complete`)
});

const bSubj$$ = new BehaviorSubject(100);
bSubj$$.subscribe(console.log)
bSubj$$.next(101)