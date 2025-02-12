import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'https://reqres.in/api';

  constructor( private http: HttpClient ) { }

  getUsers() {
    // Mock response data
    const mockUsers = [
      { id: 1, first_name: 'John', last_name: 'Doe', avatar: 'https://reqres.in/img/faces/1-image.jpg' },
      { id: 2, first_name: 'Jane', last_name: 'Doe', avatar: 'https://reqres.in/img/faces/2-image.jpg' }
    ];

    // Return mock response as an observable
    return of({ data: mockUsers }).pipe(
      map((resp: any) => resp['data'])
    );
    //return this.http.get(`${ this.url }/users`)
    //        .pipe(
    //          map( (resp: any) => resp['data'] )
    //        );
  }

  getUserById(id: string) {
    // Mock response data
    const mockUser = 
      { id: id, first_name: 'John', last_name: 'Doe', avatar: 'https://reqres.in/img/faces/1-image.jpg' }
    ;

    // Return mock response as an observable
    return of({ data: mockUser }).pipe(
      map((resp: any) => resp['data'])
    );
    //return this.http.get(`${ this.url }/users`)
    //        .pipe(
    //          map( (resp: any) => resp['data'] )
    //        );
  }
}
