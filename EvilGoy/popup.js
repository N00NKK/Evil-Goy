const toggles=['trackers','webrtc','referrer','ua','timezone','screen','canvas'];
chrome.storage.local.get(['modules','stats','theme','profiles'], d => {
  toggles.forEach(k=>document.getElementById(k).checked=!!d.modules[k]);
  document.getElementById('blocked').textContent=d.stats.blocked||0;
  document.getElementById('hueSpeed').value=d.theme.hueSpeed;
  document.getElementById('glow').value=d.theme.glow;
  document.getElementById('font').value=d.theme.font;
  document.getElementById('profile').value=d.profiles.global;
});

toggles.forEach(k=>document.getElementById(k).onchange=e=>chrome.storage.local.get(['modules'],d=>{d.modules[k]=e.target.checked;chrome.storage.local.set({modules:d.modules});}));

['hueSpeed','glow','font'].forEach(id=>document.getElementById(id).oninput=e=>chrome.storage.local.get(['theme'],d=>chrome.storage.local.set({theme:{...d.theme,[id]:e.target.value}})));

document.getElementById('profile').onchange=e=>chrome.storage.local.get(['profiles'],d=>chrome.storage.local.set({profiles:{...d.profiles,global:e.target.value}}));

document.getElementById('theme').onclick=()=>document.body.classList.toggle('light');

// RGB animation (Web Store–safe)
let h=0;function anim(){chrome.storage.local.get(['theme'],d=>{h=(h+Number(d.theme.hueSpeed||1))%360;document.querySelectorAll('.rgb').forEach(el=>el.style.color=`hsl(${h},100%,50%)`);document.documentElement.style.setProperty('--glow',d.theme.glow||1);document.body.style.fontFamily=d.theme.font;});requestAnimationFrame(anim);}anim();