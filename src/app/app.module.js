"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
//import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var navbar_component_1 = require("./navbar/navbar.component");
var about_component_1 = require("./about/about.component");
var services_component_1 = require("./services/services.component");
var products_component_1 = require("./products/products.component");
var contact_component_1 = require("./contact/contact.component");
var blog_component_1 = require("./blog/blog.component");
var pageNotFound_component_1 = require("./error/pageNotFound.component");
var appRoutes = [
    { path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent,
        data: { title: 'About Accompany' }
    },
    {
        path: 'services',
        component: services_component_1.ServicesComponent
    },
    {
        path: 'products',
        component: products_component_1.ProductsComponent
    },
    {
        path: 'contact',
        component: contact_component_1.ContactComponent
    },
    {
        path: 'blog',
        component: blog_component_1.BlogComponent
    },
    { path: '**', component: home_component_1.HomeComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(appRoutes), forms_1.FormsModule, http_1.HttpModule],
        declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, navbar_component_1.NavbarComponent, about_component_1.AboutComponent, blog_component_1.BlogComponent,
            services_component_1.ServicesComponent, products_component_1.ProductsComponent, contact_component_1.ContactComponent, pageNotFound_component_1.PageNotFoundComponent],
        /*    providers:    [ ContactService ],*/
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map