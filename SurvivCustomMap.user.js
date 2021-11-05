// ==UserScript==
// @name         INFERNO
// @namespace    http://tampermonkey.net/
// @version      1.1
// @icon         https://surviv.io/img/gui/inferno.svg
// @description  Lava
// @author       Samer Kizi#8293
// @match        https://surviv.io
// @match        https://surviv.io/*

// ==/UserScript==
(function() {
    'use strict';
var inferno = ""
var flamethrower = ""
var building = ""
var func = {
    webpack_inject1: (w, e, get) => {
        inferno = get("d5ec3c16")
        flamethrower = get("ad1c4e70")
        building = get("03f4982a")
    },
};
if(typeof window.webpackJsonp === 'function') {
    window.webpackJsonp([0], func, ["webpack_inject1"]);
} else {
    window.webpackJsonp.push([
        ["webpack_inject1"],
        func,
        [["webpack_inject1"]]
    ]);
}
Object.keys(inferno).forEach(function(key1) {
    if(key1.match(/biome/g)) {
        inferno[key1].colors.background = 2118510;
        inferno[key1].colors.water = 16679992;
        inferno[key1].colors.waterRipple = 16679992;
        inferno[key1].colors.beach = 5459269;
        inferno[key1].colors.riverbank = 2434341;
        inferno[key1].colors.grass = 3947580;
        inferno[key1].colors.underground = 1772803;
        inferno[key1].colors.playerSubmerge = 16777215;
        inferno[key1].colors.playerGhillie = 8630096;
        inferno[key1].sound.riverShore = "sand";
    } else if(key1.match(/desc/g)) {
        inferno[key1].name = "Inferno";
        inferno[key1].icon = "img/gui/inferno.svg";
        inferno[key1].buttonCss = "btn-mode-inferno";
        inferno[key1].buttonText = "index-play-mode-inferno";
    }
})
Object.keys(flamethrower).forEach(function(key2) {
    if(key2.match(/mac10/g)) {
        flamethrower[key2].name = "Flamethrower";
        flamethrower[key2].bulletType = "bullet_m9A17";
        flamethrower[key2].lootImg.sprite = "loot-weapon-m9A17.img";
        flamethrower[key2].lootImg.tint = 65280;
        flamethrower[key2].lootImg.border = "loot-circle-outer-01.img";
        flamethrower[key2].lootImg.borderTint = 0;
        flamethrower[key2].lootImg.scale = 0.3;

        flamethrower[key2].worldImg.sprite = "gun-m9a17-01.img";
        flamethrower[key2].worldImg.scale.x = 0.5;
        flamethrower[key2].worldImg.scale.y = 0.4;
        flamethrower[key2].worldImg.tint = 16777215;
        flamethrower[key2].worldImg.handsBelow = ![];
        flamethrower[key2].worldImg.leftHandOffset.x = 15;
        flamethrower[key2].worldImg.leftHandOffset.y = -(10);

        flamethrower[key2].particle.shellScale = 0;
        flamethrower[key2].particle.shellOffset = 0;

        flamethrower[key2].sound.shoot = "m9a17_01";
        flamethrower[key2].sound.reload = "m9a17_reload_01";
        flamethrower[key2].sound.pickup = "gun_pickup_01";
        flamethrower[key2].sound.empty = "empty_fire_01";
        flamethrower[key2].sound.deploy = "potato_smg_switch_01";


    }
})
Object.keys(building).forEach(function(key3) {
    if(key3.match(/tree_01/g)) {
        building[key3].img.sprite = "https://surviv.io/img/map/map-tree-20.svg";
        building[key3].img.residue = "map-tree-res-01.img";
        building[key3].map.color = 6905681;
    } else if(key3.match(/stone_01/g)) {
        building[key3].img.sprite = "https://surviv.io/img/map/map-stone-01.svg";
        building[key3].img.residue = "https://surviv.io/img/map/map-stone-res-02.svg";
    } else if(key3.match(/stone_03/g)) {
        building[key3].img.sprite = "https://surviv.io/img/map/map-stone-12.svg";
        building[key3].img.residue = "https://surviv.io/img/map/map-stone-res-02.svg";
    } else if(key3.match(/bush_01/g)) {
        building[key3].img.sprite = "https://surviv.io/img/map/map-bush-14b.svg";
        building[key3].img.residue = "https://surviv.io/img/map/map-bush-res-01.svg";
        building[key3].map.color = 6905681;
    } else if(key3.match(/bush_07/g)) {
        building[key3].img.sprite = "https://surviv.io/img/map/map-bush-14b.svg";
        building[key3].img.residue = "https://surviv.io/img/map/map-bush-res-01.svg";
        building[key3].map.color = 6905681;
    } else if(key3.match(/crate_02/g)) {
        building[key3].img.sprite = "https://surviv.io/img/map/map-pyre-01.svg";
        building[key3].img.residue = "https://surviv.io/img/map/map-crate-pyre-res.svg";
        building[key3].img.scale = 0.5;
        building[key3].sound.explode = "crate_break_01";
        building[key3].hitParticle = "pyreParticle";
        building[key3].explodeParticle = "pyreParticle";
    } else if(key3.match(/bridge_md_01/g)) {
        building[key3].floor.imgs[0].sprite = "https://surviv.io/img/map/map-building-bridge-burned.svg";
    } else if(key3.match(/greenhouse/g)) {
        building[key3].floor_images.sprite = "https://surviv.io/img/map/map-building-greenhouse-floor-02.svg";
        building[key3].ceiling_images.sprite = "https://surviv.io/img/map/map-building-greenhouse-ceiling-02.svg";
    }
})
})();
