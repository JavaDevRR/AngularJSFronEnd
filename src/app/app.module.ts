import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ToDosComponent } from './to-dos/to-dos.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { WebContentComponent } from './web-content/web-content.component';
import { HomeComponentComponent } from './home-component/home-component.component';

//import { ToDosComponent } from './to-dos/to-dos.component';

@NgModule({
  declarations: [
    AppComponent//,
    , AboutUsComponent, ToDosComponent, LoginComponent, WebContentComponent, HomeComponentComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
