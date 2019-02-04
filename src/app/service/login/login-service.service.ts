import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }

  authenticateUser(User) {
    const heaers = new HttpHeaders({ 'Content-Type': 'application/json' });
 //   let options = new RequestOptions({ headers: headers });
   
   
    const userDtl = JSON.stringify(User);
    console.log(User);
   return  this.http.post('http://localhost:8080/authenticate',
      User

    );
   //   this.http.post("test",)
  }
}
