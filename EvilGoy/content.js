chrome.storage.local.get(['modules','profiles'], ({ modules, profiles }) => {
  const apply = modules;
  if (apply.ua) Object.defineProperty(navigator,'userAgent',{get:()=> 'Mozilla/5.0 (EvilGoy)'});
  if (apply.timezone) Object.defineProperty(Intl.DateTimeFormat.prototype,'resolvedOptions',{value:()=>({timeZone:'UTC'})});
  if (apply.screen) { Object.defineProperty(screen,'width',{get:()=>1366}); Object.defineProperty(screen,'height',{get:()=>768}); }
  if (apply.canvas) { const o=HTMLCanvasElement.prototype.toDataURL; HTMLCanvasElement.prototype.toDataURL=function(){const c=this.getContext('2d');c.fillStyle='#000';c.fillRect(0,0,1,1);return o.apply(this,arguments);} }
  if (apply.webrtc) { delete window.RTCPeerConnection; delete window.webkitRTCPeerConnection; }
  if (apply.referrer) Object.defineProperty(document,'referrer',{get:()=>''});
  if (apply.cookies) Object.defineProperty(document,'cookie',{get:()=>'', set:()=>true});
});