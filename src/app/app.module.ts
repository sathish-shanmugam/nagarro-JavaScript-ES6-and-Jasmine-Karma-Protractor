import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'', component: HomeComponent},
      {path:'dashboard', component: DashboardComponent}
    ]),
    FormsModule,
    ReactiveFormsModule    
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
