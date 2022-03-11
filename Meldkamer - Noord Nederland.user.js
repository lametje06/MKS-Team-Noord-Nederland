// ==UserScript==
// @name         Meldkamer - Noord Nederland
// @namespace    http://tampermonkey.net/
// @version      0.2.3
// @description  Een script voor het toepassen van de stijl van het team "Meldkamer - Noord Nederland"
// @updateURL    https://github.com/lametje06/MKS-Team-Noord-Nederland/raw/main/Meldkamer%20-%20Noord%20Nederland.user.js
// @downloadURL  https://github.com/lametje06/MKS-Team-Noord-Nederland/raw/main/Meldkamer%20-%20Noord%20Nederland.user.js
// @author       lametje06
// @include      /^https?:\/\/(?:w{3}\.)?(?:(policie\.)?operacni-stredisko\.cz|(politi\.)?alarmcentral-spil\.dk|(polizei\.)?leitstellenspiel\.de|missionchief\.gr|(?:(police\.)?missionchief-australia|(police\.)?missionchief|(poliisi\.)?hatakeskuspeli|missionchief-japan|missionchief-korea|(politiet\.)?nodsentralspillet|(politie\.)?meldkamerspel|operador193|jogo-operador112|jocdispecerat112|dispecerske-centrum|112-merkez|dyspetcher101-game)\.com|(police\.)?missionchief\.co\.uk|centro-de-mando\.es|centro-de-mando\.mx|(police\.)?operateur112\.fr|(polizia\.)?operatore112\.it|(policja\.)?operatorratunkowy\.pl|dispetcher112\.ru|(polis\.)?larmcentralen-spelet\.se)\/.*$/
// @grant         GM_getValue
// @grant         GM_setValue
// @grant         GM_addStyle
// @grant         GM_registerMenuCommand
// ==/UserScript==

// Menu en teamnaam toevoegen links bovenin
$("html > body > div:first-of-type > nav > div:nth-of-type(2) > div:first-of-type").append ( `
                <a id="MKSNN" role="button" class="dropdown-toggle" onselectstart="return false" data-toggle="dropdown" aria-expanded="true">Meldkamer - Noord Nederland <b class="caret"></b></a>
                <ul class="dropdown-menu" role="menu" >
                  <li class="unselectable"><a href="https://meldkamer.wesleylambeck.nl/" target="_blank">Website</a></li>
                  <li class="unselectable"><a href="http://meldkamer.wesleylambeck.nl/index.php/realistische-locaties/" target="_blank">Realistische locaties</a></li>
                  <li class="unselectable"><a href="https://discord.gg/U8DNh44" target="_blank">Join onze Discord!</a></li>
                </ul>

` );


function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

//posities van kaart en meldingenlijst
addGlobalStyle('#map_outer.col-sm-8 { width: 33.33333333% !important; min-height: 860px !important}');
addGlobalStyle('#map { min-height: 860px !important}');
addGlobalStyle('#patrolMap { min-height: 860px !important}');
addGlobalStyle('#missions_outer.col-sm-4 { width: 66.66666667% !important; }');
addGlobalStyle('#missions-panel-body {height: 816.493px !important}');

//teamfoto
addGlobalStyle('html > body > div:first-of-type > nav > div:nth-of-type(2) > div:first-of-type > a > img {content: url("http://meldkamer.wesleylambeck.nl/wp-content/uploads/2020/11/favicon.ico") !important ; float: left !important ; transform: scale(1.25); !important ; margin-top: 0px !important }');

// meldkamerspel.com link verwijderen achter logo
addGlobalStyle('html > body > div:first-of-type > nav > div:nth-of-type(2) > div:first-of-type > a:first-of-type {pointer-events: none !important;}');

// MK-NN donkerrood maken als deze aangeklikt is
addGlobalStyle('.navbar-header.open {padding-right: 15px !important ; background-color: #9c2421 !important;}');
addGlobalStyle('.navbar-header a {margin-left: 0px !important}');

// Menu naar juiste plaats verplaatsen
addGlobalStyle('html > body > div:first-of-type > nav > div:nth-of-type(2) > div:first-of-type > ul {left: 50px !important ; top: 48px !important ; width: 238px !important}');

// ruimte toevoegen aan logo + teamnaam
addGlobalStyle('html > body > div:first-of-type > nav > div:nth-of-type(2) > div:first-of-type {padding-right: 15px !important}');

// logo en teamnaam uitlijnen zodat deze goed naast elkaar staan
addGlobalStyle('html > body > div:first-of-type > nav > div:nth-of-type(2) > div:first-of-type {align-items: center !important; justify-content: center !important; display: flex !important}');

// tekstkleur van link op teamnaam weghalen
addGlobalStyle('html > body > div:first-of-type > nav > div:nth-of-type(2) > div:first-of-type > a:nth-of-type(2) {text-decoration: none !important; color: white !important;}');


// kleuren
addGlobalStyle('html > body > div:first-of-type .navbar-default {background-color: #D1132F !important }');
addGlobalStyle('html > body > div:first-of-type > nav > div:nth-of-type(2) > div:first-of-type > ul {background-color: #D1132F !important;}');
addGlobalStyle('.mission_panel_red {border-left: 5px #D1132F solid !important}');
addGlobalStyle('.navbar-nav > li > .dropdown-menu {background-color: #D1132F !important}');
addGlobalStyle('#container_navbar_alarm {background-color: #D1132F !important}');
addGlobalStyle('.alert-danger {background-image: linear-gradient(to bottom, #f3b2b299 0, #d57e7ea8 100%) !important ; color: #D1132F !important}');

addGlobalStyle('.panel-default > .panel-heading {background-image: linear-gradient(to bottom, #e9e9e9 0, #e7e7e7 100%) }');
addGlobalStyle('.progress-bar-danger {background-image: linear-gradient(to bottom, #d9534f 0, #D1132F 100%) !important}');


// LSS manager kleuren
//addGlobalStyle('html > body > div:first-of-type > div:nth-of-type(4) > div:nth-of-type(6) > div:first-of-type > div > table > tbody > tr {color: #E74C3C !important}')
//addGlobalStyle('html > body > div:first-of-type > div:nth-of-type(4) > div:nth-of-type(6) > div:first-of-type > div > table > tbody > tr.overRequirement[data-v-20b2e2aa] {color: #0c0 !important}')
//addGlobalStyle('html > body > div:first-of-type > div:nth-of-type(4) > div:nth-of-type(6) > div:nth-of-type(2) > div > table > tbody > tr {color: #E74C3C !important}')
//addGlobalStyle('html > body > div:first-of-type > div:nth-of-type(4) > div:nth-of-type(6) > div:nth-of-type(2) > div > table > tbody > tr.overRequirement[data-v-20b2e2aa] {color: #0c0 !important}')

window.setTimeout(function() {
    map.invalidateSize();
}, 1000);
