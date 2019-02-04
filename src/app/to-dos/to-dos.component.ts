import { Component, OnInit } from '@angular/core';
import { RestAPIService } from '../service/rest-api.service';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})


export class ToDosComponent implements OnInit {
  todos : Todos [];


  constructor(private restAPIService: RestAPIService) { }
  

  ngOnInit() {

    this.restAPIService.callToDoService().subscribe(
      response => this.todos = response 

    )
  }

}

export class Todos {
  constructor(private id: number, private name: string, private finished: string) {

  }

}
