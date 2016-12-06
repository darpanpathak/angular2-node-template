"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('./login/login.component');
var home_component_1 = require('./home/home.component');
// Route Configuration
exports.routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'login', component: login_component_1.loginComponent }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map