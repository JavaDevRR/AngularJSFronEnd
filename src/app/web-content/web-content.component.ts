import { Component, OnInit } from '@angular/core';
import { WebContentServiceService } from '../service/webcontent/web-content-service.service';

@Component({
  selector: 'app-web-content',
  templateUrl: './web-content.component.html',
  styleUrls: ['./web-content.component.css']
})
export class WebContentComponent implements OnInit {

  topContent: "Welcome";
  constructor(private webContentService: WebContentServiceService) { }

  ngOnInit() {

   console.log(this.webContentService.getTopContent().subscribe());
    this.webContentService.getTopContent().subscribe(
     
      response => this.handleResponse(response)
    )
    
    
  }
  handleResponse(Response) {
    this.topContent= Response.topContent;
  }
}
