// ==UserScript==
// @name         INFERNO
// @namespace    http://tampermonkey.net/
// @version      1.0
// @icon         https://surviv.io/img/gui/inferno.svg
// @description  Lava
// @author       Samer Kizi#8293
// @match        https://surviv.io
// @match        https://surviv.io/*
// @match        http://surviv.io/?region=na&zone=sfo
// @match        http://surviv.io/?region=na&zone=mia
// @match        http://surviv.io/?region=na&zone=nyc
// @match        http://surviv.io/?region=na&zone=chi
// @match        http://surviv.io/?region=sa&zone=sao
// @match        http://surviv.io/?region=eu&zone=fra
// @match        http://surviv.io/?region=eu&zone=waw
// @match        http://surviv.io/?region=as&zone=sgp
// @match        http://surviv.io/?region=as&zone=nrt
// @match        http://surviv.io/?region=as&zone=hkg
// @match        http://surviv.io/?region=kr&zone=sel
// @match        https://surviv.io/?region=na&zone=sfo
// @match        https://surviv.io/?region=na&zone=mia
// @match        https://surviv.io/?region=na&zone=nyc
// @match        https://surviv.io/?region=na&zone=chi
// @match        https://surviv.io/?region=sa&zone=sao
// @match        https://surviv.io/?region=eu&zone=fra
// @match        https://surviv.io/?region=eu&zone=waw
// @match        https://surviv.io/?region=as&zone=sgp
// @match        https://surviv.io/?region=as&zone=nrt
// @match        https://surviv.io/?region=as&zone=hkg
// @match        https://surviv.io/?region=kr&zone=sel
// @match        https://surviv.io/?region=as&zone=vnm
// @match        http://surviv2.io*
// @match        https://surviv2.io*
// @match        http://2dbattleroyale.com*
// @match        https://2dbattleroyale.com*
// @match        http://2dbattleroyale.org*
// @match        https://2dbattleroyale.org*
// @match        http://piearesquared.info*
// @match        https://piearesquared.info*
// @match        http://thecircleisclosing.com*
// @match        https://thecircleisclosing.com*
// @match        http://archimedesofsyracuse.info*
// @match        https://archimedesofsyracuse.info*
// @match        http://secantsecant.com*
// @match        https://secantsecant.com*
// @match        http://parmainitiative.com*
// @match        https://parmainitiative.com*
// @match        http://nevelskoygroup.com*
// @match        https://nevelskoygroup.com*
// @match        http://kugahi.com*
// @match        https://kugahi.com*
// @match        http://chandlertallowmd.com*
// @match        https://chandlertallowmd.com*
// @match        http://ot38.club*
// @match        https://ot38.club*
// @match        http://kugaheavyindustry.com*
// @match        https://kugaheavyindustry.com*
// @match        http://rarepotato.com*
// @match        https://rarepotato.com*
// @match        https://code.jquery.com/jquery-3.4.1.min.js
// @match        http://twitch.tv/popout/survivio/extensions/c79geyxwmp1zpas3qxbddzrtytffta/panel*
// @match        https://twitch.tv/popout/survivio/extensions/c79geyxwmp1zpas3qxbddzrtytffta/panel*
// @match        http://c79geyxwmp1zpas3qxbddzrtytffta.ext-twitch.tv/c79geyxwmp1zpas3qxbddzrtytffta/1.0.2/ce940530af57d2615ac39c266fe9679d/index_twitch.html?anchor=panel&language=en&mode=viewer&state=released&platform=web&popout=true*
// @match        https://c79geyxwmp1zpas3qxbddzrtytffta.ext-twitch.tv/c79geyxwmp1zpas3qxbddzrtytffta/1.0.2/ce940530af57d2615ac39c266fe9679d/index_twitch.html?anchor=panel&language=en&mode=viewer&state=released&platform=web&popout=true*
// @grant        none

// ==/UserScript==
// map: 28e7ad85
// id: 18


(function() {
    'use strict';

var inferno = ""
var func = {
    webpack_inject51: (w, e, get) => {
        inferno = get("d5ec3c16")
    },
};
if(typeof window.webpackJsonp === 'function') {
    window.webpackJsonp([0], func, ["webpack_inject51"]);
} else {
    window.webpackJsonp.push([
        ["webpack_inject51"],
        func,
        [["webpack_inject51"]]
    ]);
}
Object.keys(inferno).forEach(function(key51) {
    if(key51.match(/biome/g)) {
        inferno[key51].colors.background = 2118510;
        inferno[key51].colors.water = 16679992;
        inferno[key51].colors.waterRipple = 16679992;
        inferno[key51].colors.beach = 5459269;
        inferno[key51].colors.riverbank = 2434341;
        inferno[key51].colors.grass = 3947580;
        inferno[key51].colors.underground = 1772803;
        inferno[key51].colors.playerSubmerge = 16777215;
        inferno[key51].colors.playerGhillie = 8630096;

        inferno[key51].valueAdjust = 1;
        inferno[key51].sound.riverShore = "sand";
        inferno[key51].particles.camera = "";
        inferno[key51].tracerColors = "";
        inferno[key51].airdrop.planeImg = "map-plane-01.img";
        inferno[key51].airdrop.planeSound = "plane_01";
        inferno[key51].airdrop.airdropImg = "map-chute-01.img";
    } else if(key51.match(/desc/g)) {
        inferno[key51].name = "Inferno";
        inferno[key51].icon = "img/gui/inferno.svg";
        inferno[key51].buttonCss = "btn-mode-inferno";
        inferno[key51].buttonText = "index-play-mode-inferno";
    } else if(key51.match(/gameMode/g)) {
        inferno[key51].maxPlayers = 80;
        inferno[key51].killLeaderEnabled = !![];
        inferno[key51].infernoMode = !![];
    }
})
})();





// -----------------------------------------------------------
(function() {
    'use strict';

var flamethrower = ""
var func = {
    webpack_inject52: (w, e, get) => {
        flamethrower = get("ad1c4e70")
    },
};
if(typeof window.webpackJsonp === 'function') {
    window.webpackJsonp([0], func, ["webpack_inject52"]);
} else {
    window.webpackJsonp.push([
        ["webpack_inject52"],
        func,
        [["webpack_inject52"]]
    ]);
}
Object.keys(flamethrower).forEach(function(key52) {
    if(key52.match(/mac10/g)) {
        flamethrower[key52].name = "Flamethrower";
        flamethrower[key52].bulletType = "bullet_m9A17";

        flamethrower[key52].lootImg.sprite = "loot-weapon-m9A17.img";
        flamethrower[key52].lootImg.tint = 65280;
        flamethrower[key52].lootImg.border = "loot-circle-outer-01.img";
        flamethrower[key52].lootImg.borderTint = 0;
        flamethrower[key52].lootImg.scale = 0.3;

        flamethrower[key52].worldImg.sprite = "gun-m9a17-01.img";
        flamethrower[key52].worldImg.scale.x = 0.5;
        flamethrower[key52].worldImg.scale.y = 0.4;
        flamethrower[key52].worldImg.tint = 16777215;
        flamethrower[key52].worldImg.recoil = 0.3;
        flamethrower[key52].worldImg.handsBelow = ![];
        flamethrower[key52].worldImg.leftHandOffset.x = 15;
        flamethrower[key52].worldImg.leftHandOffset.y = -(10);

        flamethrower[key52].particle.shellScale = 0;
        flamethrower[key52].particle.shellOffset = 0;

        flamethrower[key52].sound.shoot = "m9a17_01";
        flamethrower[key52].sound.reload = "m9a17_reload_01";
        flamethrower[key52].sound.pickup = "gun_pickup_01";
        flamethrower[key52].sound.empty = "empty_fire_01";
        flamethrower[key52].sound.deploy = "potato_smg_switch_01";


    }
})
})();

// -------------------------------------------------------------------------- Obastacles
(function() {
    'use strict';

var obstacles2 = ""
var func = {
    webpack_inject53: (w, e, get) => {
        obstacles2 = get("03f4982a")
    },
};
if(typeof window.webpackJsonp === 'function') {
    window.webpackJsonp([0], func, ["webpack_inject53"]);
} else {
    window.webpackJsonp.push([
        ["webpack_inject53"],
        func,
        [["webpack_inject53"]]
    ]);
}
Object.keys(obstacles2).forEach(function(key53) {
    if(key53.match(/tree_01/g)) {
        obstacles2[key53].img.sprite = "https://surviv.io/img/map/map-tree-20.svg";
        obstacles2[key53].img.residue = "map-tree-res-01.img";
        obstacles2[key53].map.color = 6905681;
    } else if(key53.match(/stone_01/g)) {
        obstacles2[key53].img.sprite = "https://surviv.io/img/map/map-stone-01.svg";
        obstacles2[key53].img.residue = "https://surviv.io/img/map/map-stone-res-02.svg";
    } else if(key53.match(/stone_03/g)) {
        obstacles2[key53].img.sprite = "https://surviv.io/img/map/map-stone-12.svg";
        obstacles2[key53].img.residue = "https://surviv.io/img/map/map-stone-res-02.svg";
    } else if(key53.match(/bush_01/g)) {
        obstacles2[key53].img.sprite = "https://surviv.io/img/map/map-bush-14b.svg";
        obstacles2[key53].img.residue = "https://surviv.io/img/map/map-bush-res-01.svg";
        obstacles2[key53].map.color = 6905681;
    } else if(key53.match(/bush_07/g)) {
        obstacles2[key53].img.sprite = "https://surviv.io/img/map/map-bush-14b.svg";
        obstacles2[key53].img.residue = "https://surviv.io/img/map/map-bush-res-01.svg";
        obstacles2[key53].map.color = 6905681;
    } else if(key53.match(/crate_02/g)) {
        obstacles2[key53].img.sprite = "https://surviv.io/img/map/map-pyre-01.svg";
        obstacles2[key53].img.residue = "https://surviv.io/img/map/map-crate-pyre-res.svg";
        obstacles2[key53].img.scale = 0.5;
        obstacles2[key53].sound.explode = "crate_break_01";
        obstacles2[key53].hitParticle = "pyreParticle";
        obstacles2[key53].explodeParticle = "pyreParticle";
    }
})
})();
