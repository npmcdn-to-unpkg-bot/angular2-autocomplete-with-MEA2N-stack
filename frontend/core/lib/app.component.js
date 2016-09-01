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
var core_1 = require('@angular/core');
var autocomplete_1 = require('./autocomplete');
var router_deprecated_1 = require("@angular/router-deprecated");
var http_1 = require("@angular/http");
require("rxjs/Rx");
var filteredList = [];
var AppComponent = (function () {
    function AppComponent(http) {
        this.http = http;
        this.itemName = "";
    }
    AppComponent.prototype.doSearch = function () {
        var _this = this;
        return function (filter) {
            return new Promise(function (resolve, reject) {
                _this.http.get("https://restcountries.eu/rest/v1/name/" + filter)
                    .map(function (res) { return res.json(); })
                    .map(function (countries) { return countries.map(function (country) {
                    return { text: country.name, data: country };
                }); })
                    .subscribe(function (countries) { return resolve(countries); }, function (err) { return reject(err); });
            });
        };
    };
    AppComponent.prototype.onSelected = function (selected) {
        this.itemName = selected.text;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'frontend/core/views/itemSearch.client.view.html',
            directives: [autocomplete_1.AutoComplete, router_deprecated_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map