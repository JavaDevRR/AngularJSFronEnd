import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todos } from '../to-dos/to-dos.component';


export class Greetings {
  constructor(private id: String, private content: String) {
  }
}


@Injectable({
  providedIn: 'root'
})


export class RestAPIService {

  constructor(private http: HttpClient) { }

  callService() {
    return this.http.get<Greetings>('http://localhost:8080/greeting');
   
  }

  callToDoService() {
    return this.http.get<Todos[]>('http://localhost:8080/todos');

  }
}
