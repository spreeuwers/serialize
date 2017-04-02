/**
 * Created by eddy on 1-4-17.
 */
import { readonly } from 'core-decorators';
//import {JsonObject} from "typedjson-npm/js/typed-json";
"use strict";

function packageName( name:string){
    return function(target) {target.__package = name;}
}

@packageName('persoon')
export class Person {

   firstname: string;


   lastname: string;

   constructor(){
     this.firstname = 'Jan';
   }

   hello():void{
       console.log('hi ' + this.firstname);
       console.log('hi ' + this.lastname);

   }

}