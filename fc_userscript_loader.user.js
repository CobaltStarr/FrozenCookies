// ==UserScript==
// @name Frozen Cookies
// @version github-latest
// @description Userscript to load Frozen Cookies written by Icehawk78 (modded by CobaltStarr)
// @author shinji257 (mod by CobaltStarr)
// @include http://orteil.dashnet.org/cookieclicker/
// @homepage https://github.com/CobaltStarr/FrozenCookies
// @updateURL https://github.com/CobaltStarr/FrozenCookies/raw/master/fc_userscript_loader.user.js
// @downloadURL https://github.com/CobaltStarr/FrozenCookies/raw/master/fc_userscript_loader.user.js
// ==/UserScript==

// Dev: https://raw.github.com/Icehawk78/FrozenCookies/development/
// Master: https://raw.github.com/Icehawk78/FrozenCookies/master/
// Github.io: http://icehawk78.github.io/FrozenCookies/


function autoPurchase() {
	var priorities = autoPurchase.priorities;
	for(var i = 0; i < priorities.length; ++i) {
		var priority = Game.UpgradesById[priorities[i]];
		if(priority.unlocked && !priority.bought && Game.cookies >= priority.getPrice())
			priority.buy(1);
	}
}
autoPurchase.priorities = [
	// Upgrade priority target list.
	69,  // One Mind
	141, // Persistent memory
	163, // Santa's bottomless bag
	226, // Omelette
	223, // Faberge egg
];
autoPurchase.interval = setInterval(autoPurchase, 100);

function LoadFrozenCookies() {
	var js = document.createElement('script');
	js.setAttribute('type', 'text/javascript');
	js.setAttribute('id', 'frozenCookieScript');
	js.setAttribute('src', 'http://icehawk78.github.io/FrozenCookies/frozen_cookies.js');
	document.head.appendChild(js);
}

// It's not the best way but Chrome doesn't work with addEventListener... :(
// Delay load by 2 seconds to allow the site to load itself first.)
window.setTimeout(LoadFrozenCookies, 2000);
