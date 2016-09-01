import { Component } from '@angular/core';
import { AutoComplete } from './autocomplete';
import {RouteConfig, ROUTER_DIRECTIVES} from "@angular/router-deprecated";
import {Http, HTTP_PROVIDERS} from "@angular/http";
import "rxjs/Rx";
var filteredList = [];

@Component({
  selector: 'my-app',
  templateUrl: 'frontend/core/views/itemSearch.client.view.html',
  directives: [AutoComplete, ROUTER_DIRECTIVES]
})
export class AppComponent {
   public itemName = "";

    constructor(private http: Http) {
    }
 deps: [Http]
    public doSearch() {
        return (filter: string): Promise<Array<{ text: string, data: any }>> => {
            return new Promise<Array<{ text: string, data: any }>>((resolve, reject) => {
                this.http.get("https://restcountries.eu/rest/v1/name/" + filter)
                .map(res => res.json())
                .map(countries => countries.map((country: any) => {
                    return {text: country.name, data: country};
                }))
                .subscribe(
                    countries => resolve(countries),
                    err => reject(err)
                );
            });
        };
    }

    public onSelected(selected: { text: string, data: any }) {
        this.itemName = selected.text;
    }
 }