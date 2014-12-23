/**
 * user.js
 * Overrides common Firefox settings to be more secure and privacy-focused.
 */

// we'll assume if the user is locking down their profile then
// they may be interested in the about:config settings, so don't
// wall them with a warning page
user_pref( 'general.warnOnAboutConfig', false );

/* Prohibit GeoLocation */
user_pref( 'geo.enabled', false);
user_pref( 'geo.wifi.uri', '');

/* Major Settings */
user_pref( 'privacy.donottrackheader.enabled', true );

/* SafeBrowsing Overrides */
user_pref( 'browser.safebrowsing.enabled', false );
user_pref( 'browser.safebrowsing.malware.enabled',false );
user_pref( 'browser.safebrowsing.updateURL', '' );
user_pref( 'browser.safebrowsing.appRepUrl', '' );
user_pref( 'browser.safebrowsing.gethashUrl', '' );

/* HTTP Referer Overrides */
user_pref( 'network.http.sendRefererHeader', 0 );
user_pref( 'network.http.sendSecureXSiteReferrer', false );
//user_pref( 'network.http.referer.XOriginPolicy',);
user_pref( 'network.http.referer.spoofSource', true );
user_pref( 'network.http.referer.trimmingPolicy', 2 );

/* Ping / Click Tracking Overrides */
user_pref( 'browser.send_pings', false );
user_pref( 'browser.send_pings.require_same_host', true );
user_pref( 'browser.send_pings.max_per_link', 0 );

/* Cookie Overrides */
user_pref( 'network.cookie.cookieBehavior', 1 );
user_pref( 'network.cookie.lifetimePolicy', 2 );
user_pref( 'network.cookie.lifetime.days', 0 );

/* DNS && URL Display Overrides */
user_pref( 'network.proxy.socks_remote_dns', true );
user_pref( 'network.prefetch-next', false );
user_pref( 'network.dns.disablePrefetch', true );
user_pref( 'network.IDN_show_punycode', false );

/* Network Pipelining */
user_pref( 'network.http.pipelining', true );
user_pref( 'network.http.pipelining.maxrequests', 8 );

/* Engage in Anti-Social Behavior */
user_pref( 'social.whitelist', '' );
user_pref( 'social.manifest.facebook', false );
user_pref( 'social.remote-install.enabled', false );

/* Media Settings */
user_pref( 'media.peerconnection.enabled', false );
user_pref( 'media.peerconnection.video.enabled', false );

/* Cache Overrides - store nothing */
user_pref( 'network.http.use-cache', false );
user_pref( 'browser.cache.disk.enabled', false );
user_pref( 'browser.cache.disk.capacity', 0 );
user_pref( 'browser.cache.offline.enable', false );
user_pref( 'browser.cache.offline.capacity', 0 );
user_pref( 'browser.newtab.url', 'about:blank' );
user_pref( 'browser.pagethumbnails.capturing_disabled', true );

/* Shut It Doooown! */
user_pref( 'privacy.clearOnShutdown.cache', true );
user_pref( 'privacy.clearOnShutdown.cookies', true );
user_pref( 'privacy.clearOnShutdown.downloads', true );
user_pref( 'privacy.clearOnShutdown.extensions-dta', true );
user_pref( 'privacy.clearOnShutdown.formdata', true );
user_pref( 'privacy.clearOnShutdown.history', true );
user_pref( 'privacy.clearOnShutdown.offlineApps', true );
user_pref( 'privacy.clearOnShutdown.openWindows', true );
user_pref( 'privacy.clearOnShutdown.passwords', true );
user_pref( 'privacy.clearOnShutdown.sessions', true );
user_pref( 'privacy.clearOnShutdown.siteSettings', true );
user_pref( 'services.sync.prefs.sync.privacy.clearOnShutdown.cache', true );
user_pref( 'services.sync.prefs.sync.privacy.clearOnShutdown.cookies', true );
user_pref( 'services.sync.prefs.sync.privacy.clearOnShutdown.downloads', true );
user_pref( 'services.sync.prefs.sync.privacy.clearOnShutdown.formdata', true );
user_pref( 'services.sync.prefs.sync.privacy.clearOnShutdown.history', true );
user_pref( 'services.sync.prefs.sync.privacy.clearOnShutdown.offlineApps', true );
user_pref( 'services.sync.prefs.sync.privacy.clearOnShutdown.passwords', true );
user_pref( 'services.sync.prefs.sync.privacy.clearOnShutdown.sessions', true );
user_pref( 'services.sync.prefs.sync.privacy.clearOnShutdown.siteSettings', true );

/* Misc */
user_pref( 'browser.search.suggest.enabled', false );
user_pref( 'browser.search.defaultenginename', 'DuckDuckGo' );
user_pref( 'browser.search.order.1', 'DuckDuckGo' );
user_pref( 'keyword.URL', 'https://duckduckgo.com/html/?q=!+' );
user_pref( 'browser.search.highlightCount', 4 );
user_pref( 'config.trim_on_minimize', true );
user_pref( 'media.autoplay.enabled', false );
user_pref( 'plugins.enumerable_names', '' );
user_pref( 'clipboard.autocopy', false );
user_pref( 'dom.event.clipboardevents.enabled', false );
user_pref( 'dom.storage.enabled', false );
user_pref( 'dom.storage.default_quota', false );
user_pref( 'dom.popup_maximum', 1 );