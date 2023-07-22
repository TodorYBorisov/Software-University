import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject$$ = new BehaviorSubject<Object | null>(null);
  private isLoading$$ = new BehaviorSubject<boolean>(false);



  public userObject$ = this.userSubject$$.asObservable()
  public isLoadingUsers$ = this.isLoading$$.asObservable()

  constructor(private htpp: HttpClient) { }

  loadUsers(): void {

    this.userSubject$$.next(null);
    this.isLoading$$.next(true) // да стартира лоудъра

    this.htpp.get('/api/users').subscribe({
      next: (users) => {
        this.isLoading$$.next(false)
        this.userSubject$$.next(users)
      },
    });
  }


}
