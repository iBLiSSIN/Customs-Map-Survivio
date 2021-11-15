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
    if(ammo[key].type === "ammo") {
        ammo[key].worldImg.sprite =  "https://raw.githubusercontent.com/iBLiSSIN/SurvivMods/main/img%20for%20change/6A7B426F-8765-41B3-B134-9BBF9683029F.png"
    } else if(ammo[key].type === "ammo") {
        ammo[key].worldImg.sprite =  
    } else if(ammo[key].type === "ammo") {
        ammo[key].worldImg.sprite =  
    } else if(ammo[key].type === "ammo") {
        ammo[key].worldImg.sprite =  
    } else if(ammo[key].type === "ammo") {
        ammo[key].worldImg.sprite =  
    }
})
})();
