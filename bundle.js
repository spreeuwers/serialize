(function () {
'use strict';

//import {JsonObject} from "typedjson-npm/js/typed-json";
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function packageName(name) {
    return function (target) { target.__package = name; };
}
let Person = class Person {
    constructor() {
        this.firstname = 'Jan';
    }
    hello() {
        console.log('hi ' + this.firstname);
        console.log('hi ' + this.lastname);
    }
};
Person = __decorate([
    packageName('persoon'),
    __metadata("design:paramtypes", [])
], Person);

/**
 * Created by eddy on 1-4-17.
 */
(function init() {
    console.log('bla!!');
    var p = new Person();
    p.hello();
    console.log(Person['__package']);
})();

}());
