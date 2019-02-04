import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToDosComponent } from './to-dos/to-dos.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { WebContentComponent } from './web-content/web-content.component';
import { HomeComponentComponent } from './home-component/home-component.component';


const routes: Routes = [
  { path: 'todos', component: ToDosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'welcome', component: HomeComponentComponent },
  { path: '**', component: AboutUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

