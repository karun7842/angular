import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usersUrl = 'assets/users.json'; // URL to JSON file

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<boolean> {
    return new Observable<boolean>(observer => {
      this.http.get<any[]>(this.usersUrl).subscribe(users => {
        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
          sessionStorage.setItem('username', username); // Store the username
          observer.next(true);
        } else {
          observer.next(false);
        }
        observer.complete();
      });
    });
  }
}
