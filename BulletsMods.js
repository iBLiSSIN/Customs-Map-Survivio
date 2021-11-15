// Recolor for bullets
 
(function() {
    'use strict';
var ammo = ""
var func = {
    webpack_inject: (w, e, get) => {
        ammo = get("764654e6")
    },
};
if(typeof window.webpackJsonp === 'function') {
    window.webpackJsonp([0], func, ["webpack_inject"]);
} else {
    window.webpackJsonp.push([
        ["webpack_inject"],
        func,
        [["webpack_inject"]]
    ]);
}
Object.keys(ammo).forEach(function(key) {
    if(ammo[key].type === "9mm") {
        ammo[key].regular =  ;
        ammo[key].saturated =  ;
    } else if(ammo[key].type === "762mm") {
        ammo[key].regular =  ;
        ammo[key].saturated =  ;
    } else if(ammo[key].type === "12gauge") {
        ammo[key].regular =  ;
        ammo[key].saturated =  ;
    } else if(ammo[key].type === "556mm") {
        ammo[key].regular =  ;
        ammo[key].saturated =  ;
    } else if(ammo[key].type === "45acp") {
        ammo[key].regular =  ;
        ammo[key].saturated =  ;
    }
})
})();
