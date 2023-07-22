import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler, HTTP_INTERCEPTORS } from '@angular/common/http'
import { EMPTY, Observable, catchError, tap } from 'rxjs'
import { API_URL } from './constnts'
import { Provider } from '@angular/core';

export class AppInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let request = req;

        if (req.url.startsWith('/api')) {
            request = req.clone({
                url: req.url.replace('/api', API_URL)
            })
        }
        return next.handle(request).pipe(tap((req) => {
            if (req instanceof HttpRequest) {

                console.log(req);
            }
        }),
            catchError((error) => {
                if (error.status === 0){
                    
                    console.error(`Error from interceptor ${JSON.stringify(error)}`);
                    return EMPTY // е някаква парзна стойност на обзървъбъла
                }

                return [error]

            })

        );
    }
}

export const AppInterceptorProvider: Provider = {
    provide: HTTP_INTERCEPTORS,
    multi: true,
    useClass: AppInterceptor,

}