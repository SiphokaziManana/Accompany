"use strict";
/**
 * Created by siphokazi on 2017/05/19.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var ClientQuery = (function () {
    //    model = new ClientQuery(1,"sfiso shabangu","sifisos@gmail.com", false, "hey there sipho");
    function ClientQuery(id_, name, email, contact, query) {
        this.id = id_;
        this.client_name = name;
        this.client_email = email;
        this.can_contact = contact;
        this.client_query = query;
    }
    return ClientQuery;
}());
exports.ClientQuery = ClientQuery;
//# sourceMappingURL=client-query.component.js.map