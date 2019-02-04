import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebContentServiceService {

  constructor(private http: HttpClient) { 
}
  extractData: 'test';
  getTopContent() {
  


    let myHeaders = new Headers();
    myHeaders.append('Authorization', 'cm9vdDpyb290');
    //let myParams = new URLSearchParams();
    //myParams.append('id', bookId);
    //let options = new RequestOptions({ headers: myHeaders });

    /*const httpOptions = {
      headers: new HttpHeaders({
       // 'Content-Type': 'application/json',
        'Authorization': 'Basic cm9vdDpyb290'
      })
    };*/
    //console.log(myHeaders);
    console.log(this.http.get('http://localhost:8080/getTopContent'));
    return this.http.get('http://localhost:8080/getTopContent');
    


    
     
  
   

  }
}
