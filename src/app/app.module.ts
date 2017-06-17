import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { PageNotFoundComponent } from './error/pageNotFound.component';
import { ContactService } from './contact/contact.service';



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
    {
    path: 'services',
    component: ServicesComponent
    },
    {
    path: 'products',
    component: ProductsComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'blog',
        component: BlogComponent
    },

    { path: '**', component: HomeComponent }
];

@NgModule({
    imports:      [ BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, HttpModule ],
    declarations: [ AppComponent, HomeComponent, NavbarComponent, AboutComponent,BlogComponent,
                  ServicesComponent,ProductsComponent,ContactComponent, PageNotFoundComponent],
/*    providers:    [ ContactService ],*/
    bootstrap:    [ AppComponent ]
})

export class AppModule { }
