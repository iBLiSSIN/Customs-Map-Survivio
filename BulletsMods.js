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
        ammo[key].regular = 16756224;
        ammo[key].saturated = 16756224;
    } else if(ammo[key].type === "762mm") {
        ammo[key].regular = 26367;
        ammo[key].saturated = 26367;
    } else if(ammo[key].type === "12gauge") {
        ammo[key].regular = 16711680;
        ammo[key].saturated = 16711680;
    } else if(ammo[key].type === "556mm") {
        ammo[key].regular = 237056;
        ammo[key].saturated = 237056;
    } else if(ammo[key].type === "45acp") {
        ammo[key].regular = 7536811;
        ammo[key].saturated = 7536811;
    }
})
})();
