// Recolor for bullets
 
(function() {
    'use strict';
var ammo = ""
var func = {
    webpack_inject: (w, e, get) => {
        ammo = get("d5ec3c16")
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
    if(ammo[key].match(/9mm/g)) {
        ammo[key].regular = 16756224;
        ammo[key].saturated = 16756224;
    } else if(ammo[key].match(/762mm/g)) {
        ammo[key].regular = 26367;
        ammo[key].saturated = 26367;
    } else if(ammo[key].match(/12gauge/g)) {
        ammo[key].regular = 16711680;
        ammo[key].saturated = 16711680;
    } else if(ammo[key].match(/556mm/g)) {
        ammo[key].regular = 237056;
        ammo[key].saturated = 237056;
    } else if(ammo[key].match(/45acp/g)) {
        ammo[key].regular = 7536811;
        ammo[key].saturated = 7536811;
    }
})
})();
