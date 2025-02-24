// ==UserScript==
// @name         Meldkamer - Noord Nederland
// @namespace    http://tampermonkey.net/
// @version      0.2.8
// @description  Een script voor het toepassen van de stijl van het team "Meldkamer - Noord Nederland"
// @updateURL    https://github.com/lametje06/MKS-Team-Noord-Nederland/raw/main/Meldkamer%20-%20Noord%20Nederland.user.js
// @downloadURL  https://github.com/lametje06/MKS-Team-Noord-Nederland/raw/main/Meldkamer%20-%20Noord%20Nederland.user.js
// @author       lametje06
// @match        https://www.meldkamerspel.com/*
// @include      /^https?:\/\/(?:w{3}\.)?(?:(policie\.)?operacni-stredisko\.cz|(politi\.)?alarmcentral-spil\.dk|(polizei\.)?leitstellenspiel\.de|missionchief\.gr|(?:(police\.)?missionchief-australia|(police\.)?missionchief|(poliisi\.)?hatakeskuspeli|missionchief-japan|missionchief-korea|(politiet\.)?nodsentralspillet|(politie\.)?meldkamerspel|operador193|jogo-operador112|jocdispecerat112|dispecerske-centrum|112-merkez|dyspetcher101-game)\.com|(police\.)?missionchief\.co\.uk|centro-de-mando\.es|centro-de-mando\.mx|(police\.)?operateur112\.fr|(polizia\.)?operatore112\.it|(policja\.)?operatorratunkowy\.pl|dispetcher112\.ru|(polis\.)?larmcentralen-spelet\.se)\/.*$/
// @grant         GM_getValue
// @grant         GM_setValue
// @grant         GM_addStyle
// @grant         GM_registerMenuCommand
// ==/UserScript==

var scriptVersie = GM_info.script.version;

// Menu en teamnaam toevoegen links bovenin
$("html > body > div:first-of-type > nav > div:nth-of-type(2) > div:first-of-type").append ( `
                <a id="MKSNN" role="button" class="dropdown-toggle" onselectstart="return false" data-toggle="dropdown" aria-expanded="true">Meldkamer - Noord Nederland <b class="caret"></b></a>
               <ul class="dropdown-menu" role="menu" >
                  <li class="unselectable"><a href="https://www.meldkamer.wesleylambeck.nl/" class="lightbox-open">Team website</a></li>
                  <li class="unselectable"><a href="https://www.meldkamer.wesleylambeck.nl/index.php/realistische-locaties/" class="lightbox-open">Realistische locaties</a></li>
                  <li class="unselectable"><a href="https://discord.gg/U8DNh44" target="_blank">Join onze Discord!</a></li>
                  <li class="unselectable"><a href="https://github.com/lametje06/MKS-Team-Noord-Nederland/raw/main/Meldkamer%20-%20Noord%20Nederland.user.js">Versie ${scriptVersie}</a></li>
                </ul>

` );

// Functie voor sneltoets CTRL+SHIFT+S voor opslaan knoppen
(function(){
document.addEventListener('keydown', function(e) {
  // pressed CTRL+SHIFT+S
  if (e.keyCode == 83 && e.shiftKey && e.ctrlKey && !e.altKey && !e.metaKey) {
   getElementByXpath("/html/body/div[1]/form/div[12]/input").click(); // go to google.
  }
}, false);
})();

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

// Teamfoto
addGlobalStyle('html > body > div:first-of-type > nav > div:nth-of-type(2) > div:first-of-type > a > img {content: url("http://meldkamer.wesleylambeck.nl/wp-content/uploads/2020/11/favicon.ico") !important ; float: left !important ; transform: scale(1.25); !important ; margin-top: 0px !important }');

// Meldkamerspel.com link verwijderen achter logo
addGlobalStyle('html > body > div:first-of-type > nav > div:nth-of-type(2) > div:first-of-type > a:first-of-type {pointer-events: none !important;}');

// MK-NN donkerrood maken als deze aangeklikt is
addGlobalStyle('.navbar-header.open {padding-right: 15px !important ; background-color: #9c2421 !important;}');
addGlobalStyle('.navbar-header a {margin-left: 0px !important}');

// Menu naar juiste plaats verplaatsen
addGlobalStyle('html > body > div:first-of-type > nav > div:nth-of-type(2) > div:first-of-type > ul {left: 50px !important ; top: 48px !important ; width: 238px !important}');

// Ruimte toevoegen aan logo + teamnaam
addGlobalStyle('html > body > div:first-of-type > nav > div:nth-of-type(2) > div:first-of-type {padding-right: 15px !important}');

// Logo en teamnaam uitlijnen zodat deze goed naast elkaar staan
addGlobalStyle('html > body > div:first-of-type > nav > div:nth-of-type(2) > div:first-of-type {align-items: center !important; justify-content: center !important; display: flex !important}');


// Tekstkleur van link op teamnaam weghalen
addGlobalStyle('html > body > div:first-of-type > nav > div:nth-of-type(2) > div:first-of-type > a:nth-of-type(2) {text-decoration: none !important; color: white !important;}');


// Kleuren
addGlobalStyle('html > body > div:first-of-type .navbar-default {background-color: #D1132F !important }'); // Kleur navigatiebalk bovenaan
addGlobalStyle('html > body > div:first-of-type > nav > div:nth-of-type(2) > div:first-of-type > ul {background-color: #D1132F !important;}'); // Kleur uitvouwmenu MK-NN
addGlobalStyle('.mission_panel_red {border-left: 5px #D1132F solid !important}'); // Kleur lint links van meldingen
addGlobalStyle('.navbar-nav > li > .dropdown-menu {background-color: #D1132F !important}'); // Kleur overige uitvouwmenu's
addGlobalStyle('#container_navbar_alarm {background-color: #D1132F !important}'); // Kleur onderste balk bij alarmeren van meldingen
addGlobalStyle('.panel-default > .panel-heading {background-image: linear-gradient(to bottom, #e9e9e9 0, #e7e7e7 100%) }'); // Kleuren achtergrond meldingen wit naar lichtgrijs
addGlobalStyle('.progress-bar-danger {background-image: linear-gradient(to bottom, #d9534f 0, #D1132F 100%) !important}'); // Kleuren voortgangsbalk hoofdpagina
addGlobalStyle('html > body.dark.missionchief .alert-danger {background-image: linear-gradient(to bottom, #f3b2b299 0, #d57e7ea8 100%) !important ; color: #FFFFFF !important}'); // Kleuren donkere modus i.c.m. LSS-manager
addGlobalStyle('html > body.missionchief .alert-danger {background-image: linear-gradient(to bottom, #f3b2b299 0, #d57e7ea8 100%) !important}'); // Kleuren lichte modus i.c.m. LSS-manager



window.setTimeout(function() {
    map.invalidateSize();
}, 1000);
