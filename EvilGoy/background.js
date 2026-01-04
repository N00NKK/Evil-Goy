const DEFAULTS = {
  modules: { trackers:true, webrtc:true, referrer:true, ua:true, timezone:true, screen:true, canvas:true, cookies:false },
  theme: { mode:'dark', hueSpeed:1, glow:1, font:'Roboto Mono' },
  profiles: { global:'Default', sites:{} },
  stats: { blocked:0 }
};

chrome.runtime.onInstalled.addListener(() => chrome.storage.local.set(DEFAULTS));

// Privacy‑safe inspector: counts only (no URLs stored)
chrome.declarativeNetRequest.onRuleMatchedDebug.addListener(() => {
  chrome.storage.local.get(['stats'], s => chrome.storage.local.set({ stats:{ blocked:(s.stats?.blocked||0)+1 } }));
});