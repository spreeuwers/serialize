/**
 * Created by eddy on 2-4-17.
 */

export function packageName( name:string){
    return function(target) {target.__package = name;}
}

