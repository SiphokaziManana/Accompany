import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './error/pageNotFound.component';



const appRoutes: Routes = [

  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'About Accompany' }
  },
  { path: '**', component: HomeComponent }
];


@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, HomeComponent, NavbarComponent, AboutComponent, PageNotFoundComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
