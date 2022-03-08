// ==UserScript==
// @name         Meldkamer - Noord Nederland
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Remove the map and make the missionlist wider.
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
addGlobalStyle('#map_outer.col-sm-8 { width: 33.33333333% !important; min-height: 1000px !important}');
addGlobalStyle('#map { min-height: 1000px !important}');
addGlobalStyle('#patrolMap { min-height: 1000px !important}');
addGlobalStyle('#missions_outer.col-sm-4 { width: 66.66666667% !important; }');
addGlobalStyle('#missions-panel-body {height: 926.493px !important}');

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
addGlobalStyle('a, a:hover, a:focus, a:active {text-decoration: none !important; color: inherit !important;}');


// kleuren
addGlobalStyle('html > body > div:first-of-type .navbar-default {background-color: #D1132F !important }');
addGlobalStyle('html > body > div:first-of-type > nav > div:nth-of-type(2) > div:first-of-type > ul {background-color: #D1132F !important;}');
addGlobalStyle('.mission_panel_red {border-left: 5px #D1132F solid !important}');
addGlobalStyle('.navbar-nav > li > .dropdown-menu {background-color: #D1132F !important}');
addGlobalStyle('#container_navbar_alarm {background-color: #D1132F !important}');
addGlobalStyle('.alert-danger {background-color: #D1132F !important; border-color: #D1132F !important}');
addGlobalStyle('.progress-bar-danger {background-image: linear-gradient(to bottom, #d9534f 0, #D1132F 100%) !important}');


window.setTimeout(function() {
    map.invalidateSize();
}, 1000);
