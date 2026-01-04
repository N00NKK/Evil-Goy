# 🕶️ EvilGoy

**Privacy without paranoia.**

EvilGoy is a **local-only Chrome extension** designed to reduce tracking, fingerprinting, and data leakage **without breaking websites**.

Nothing leaves your browser.  
No servers. No analytics. No accounts.

---

## 🧠 What EvilGoy Is (and Isn’t)

**EvilGoy is:**
- A defensive privacy tool
- Fully local and auditable
- Built on Chrome’s Manifest V3
- Designed to *block surveillance*, not users

**EvilGoy is not:**
- A VPN
- A data collector
- A cloud service
- A browser replacement

---

## 🌍 Profiles System

EvilGoy uses **profiles** to control how aggressive protections are.

### Default
- Balanced protection
- Works on almost all websites
- Recommended for everyday browsing

### Strict
- Maximum privacy
- All defenses enabled
- Some sites may break (logins, video calls)

### Off
- Disables EvilGoy entirely
- Useful for banking, work tools, or broken sites

> Per-site profiles are planned (e.g. Strict on social media, Off on banking).

---

## 🔒 Tracker Blocker

Blocks known tracking and advertising systems **before they load**.

**Blocked systems include:**
- Google Analytics / DoubleClick
- Meta (Facebook) tracking pixels
- TikTok tracking scripts
- Generic ad & telemetry endpoints

**How it works:**
- Uses Chrome’s `declarativeNetRequest`
- Zero performance impact
- No request inspection
- No logging

---

## 🛡️ Anti-WebRTC Leak

Prevents real IP leaks caused by WebRTC.

Even with a VPN, WebRTC can expose:
- Your real IP address
- Local network information

**EvilGoy:**
- Removes WebRTC APIs entirely
- Prevents browser-level IP leakage
- Stops WebRTC-based fingerprinting

---

## 🔗 Referrer Trimming

Prevents websites from seeing where you came from.

**Without protection:**
example.com ← private-site.com/page

markdown
Copy code

**With EvilGoy:**
example.com ← (no referrer)

yaml
Copy code

This prevents:
- Link-based tracking
- Referral analytics
- Cross-site correlation

---

## 🧠 Fingerprint Defense (Core Feature)

Websites don’t need cookies to track you — they fingerprint your device.

EvilGoy attacks multiple fingerprint vectors:

### User-Agent Spoofing
- Hides real browser and OS details
- Uses a generic, safe user-agent
- Reduces exploit targeting

### Timezone Normalization
- Forces timezone to UTC
- Prevents geographic inference
- Blocks region-based fingerprinting

### Screen Size Spoofing
- Returns standardized dimensions
- Prevents laptop / monitor detection
- Stops multi-monitor fingerprinting

### Canvas Fingerprint Protection
- Adds subtle pixel noise
- Breaks deterministic canvas hashes
- Makes canvas fingerprints unreliable

---

## 🍪 Cookie Hardening (Optional)

- Prevents persistent cookies
- Allows session-only behavior
- Reduces long-term tracking

Disabled by default for compatibility.

---

## 🧪 Search Query Poisoning (Optional)

- Periodically injects fake search queries
- Confuses profiling algorithms
- Breaks behavioral interest graphs

Disabled by default due to aggressiveness.

---

## 🔍 Privacy-Safe Request Inspector

Provides transparency **without surveillance**.

**Shows:**
- Total number of blocked requests

**Never shows or stores:**
- ❌ URLs
- ❌ Domains
- ❌ Request contents
- ❌ Logs

Designed to be:
- Chrome Web Store safe
- Trustworthy by default

---

## 🎨 Theme Editor

Full visual control with zero tracking.

- RGB accent speed
- Glow strength
- Font selection
- Dark / Light mode

No analytics. No telemetry.

---

## 🧩 Modular Architecture

- Each feature is isolated
- Enable only what you want
- No hidden behavior
- Safe future expansion

---

## 💾 Local-Only Storage

- Uses `chrome.storage.local`
- No sync
- No cloud
- No telemetry

Nothing ever leaves your browser.

---

## 🛍️ Chrome Web Store Safe

EvilGoy complies with:
- Manifest V3
- Declarative request blocking
- No remote code
- No obfuscation
- No data collection

This makes EvilGoy:
- ✔ Publishable
- ✔ Auditable
- ✔ Trustworthy

---

## 🧠 Philosophy

Privacy should feel **powerful**, not paranoid.

EvilGoy:
- Protects without spying
- Looks good doing it
- Gives control back to the user
- Never phones home

---

## 🚧 Status

EvilGoy is under active development.

Planned:
- Per-site profiles
- UI polish
- Public Chrome Web Store release

---

## 📄 License

MIT (or replace with your preferred license)

---

> **Nothing leaves your browser. Ever.**
