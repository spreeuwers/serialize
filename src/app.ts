/**
 * Created by eddy on 1-4-17.
 */

import {Person} from './Person';

(function init(){
    console.log('bla!!');
    var p = new Person();
    p.hello();
    console.log(Person['__package']);
})();