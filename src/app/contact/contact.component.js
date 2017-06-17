"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by siphokazi on 2017/05/19.
 */
var core_1 = require("@angular/core");
var client_query_component_1 = require("./client-query.component");
var contact_service_1 = require("./contact.service");
var ContactComponent = (function () {
    //service = new ContactService();
    /*constructor(http_: HttpModule){
        this.http = http_;
    }*/
    function ContactComponent(service) {
        this.service = service;
        this.model = new client_query_component_1.ClientQuery(1, "sfiso shabangu", "sifisos@gmail.com", false, "hey there sipho");
        //model =  new ClientQuery();
        this.submitted = false;
    }
    ContactComponent.prototype.onSubmit = function () {
        this.submitted = true;
        console.log("i have submitted");
        console.log(JSON.stringify(this.model));
        //http calls to backend application
        this.service.sendMail(this.model.client_name, this.model.client_email, this.model.client_query, this.model.can_contact);
        console.log("sent to backend, just check");
    };
    Object.defineProperty(ContactComponent.prototype, "diagnostic", {
        //TODO: Remove this when done
        get: function () {
            return JSON.stringify(this.model);
        },
        enumerable: true,
        configurable: true
    });
    return ContactComponent;
}());
ContactComponent = __decorate([
    core_1.Component({
        selector: 'contact',
        templateUrl: './contact.component.html',
        providers: [contact_service_1.ContactService]
    }),
    __metadata("design:paramtypes", [contact_service_1.ContactService])
], ContactComponent);
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.component.js.map