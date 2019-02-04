import { Component } from '@angular/core';
import { RestAPIService } from './service/rest-api.service';
import { error } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoAngularFrontEnd';
  message = "Welcome To Wedding website !!";
  constructor(private restAPIService: RestAPIService) {
  }
  callService() {
   
    this.restAPIService.callService().subscribe(
           
      response => this.handleSuccessResoponse(response),
      error => this.handleErrorResoponse(error)
    )

    //this.restAPIService.subscribe();

  };

 
  


  handleErrorResoponse(error) {
    console.log(error.error.message);
  }
  handleSuccessResoponse(response) {
    console.log(response.id);
    console.log(response.content);
  }
}
