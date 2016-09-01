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
var core_1 = require("@angular/core");
var autocomplete_list_1 = require("./autocomplete-list");
var AutoComplete = (function () {
    function AutoComplete(viewRef, dcl) {
        this.viewRef = viewRef;
        this.dcl = dcl;
        this.selected = new core_1.EventEmitter();
        this.term = "";
        this.listCmp = undefined;
        this.refreshTimer = undefined;
        this.searchInProgress = false;
        this.searchRequired = false;
    }
    AutoComplete.prototype.onKey = function (event) {
        var _this = this;
        if (!this.refreshTimer) {
            this.refreshTimer = setTimeout(function () {
                if (!_this.searchInProgress) {
                    _this.doSearch();
                }
                else {
                    _this.searchRequired = true;
                }
            }, 200);
        }
        this.term = event.target.value;
        if (this.term === "" && this.listCmp) {
            this.removeList();
        }
    };
    AutoComplete.prototype.ngOnInit = function () {
        var _this = this;
        this.selected.subscribe(function () {
            _this.removeList();
        });
    };
    AutoComplete.prototype.doSearch = function () {
        var _this = this;
        this.refreshTimer = undefined;
        if (this.search && this.term !== "") {
            this.searchInProgress = true;
            this.search(this.term)
                .then(function (res) {
                _this.searchInProgress = false;
                if (_this.searchRequired) {
                    _this.searchRequired = false;
                    _this.doSearch();
                }
                else {
                    _this.diplayList(res);
                }
            })
                .catch(function (err) {
                console.log("search error:", err);
                _this.removeList();
            });
        }
    };
    AutoComplete.prototype.diplayList = function (list) {
        var _this = this;
        if (!this.listCmp) {
            this.dcl.loadNextToLocation(autocomplete_list_1.AutocompleteList, this.viewRef)
                .then(function (cmp) {
                _this.listCmp = cmp;
                _this.updateList(list);
                _this.listCmp.instance.selected
                    .subscribe(function (selectedItem) {
                    _this.selected.emit(selectedItem);
                });
            });
        }
        else {
            this.updateList(list);
        }
    };
    AutoComplete.prototype.updateList = function (list) {
        if (this.listCmp) {
            this.listCmp.instance.list = list;
        }
    };
    AutoComplete.prototype.removeList = function () {
        this.searchInProgress = false;
        this.searchRequired = false;
        if (this.listCmp) {
            this.listCmp.destroy();
            this.listCmp = undefined;
        }
    };
    __decorate([
        core_1.Input("ng2-autocomplete"), 
        __metadata('design:type', Function)
    ], AutoComplete.prototype, "search", void 0);
    __decorate([
        core_1.Output("ng2AutocompleteOnSelect"), 
        __metadata('design:type', Object)
    ], AutoComplete.prototype, "selected", void 0);
    AutoComplete = __decorate([
        core_1.Directive({
            selector: "[ng2-autocomplete]",
            host: {
                "(keyup)": "onKey($event)"
            }
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef, core_1.DynamicComponentLoader])
    ], AutoComplete);
    return AutoComplete;
}());
exports.AutoComplete = AutoComplete;
//# sourceMappingURL=autocomplete.js.map