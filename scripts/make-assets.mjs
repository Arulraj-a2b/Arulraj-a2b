// Generates the README graphics in assets/: banners, section dividers and skill tiles as PNG (rendered with
// headless Chrome so the portfolio fonts apply), plus the typed-roles and status SVGs (hand-built, system fonts,
// SMIL animation, which GitHub's image proxy allows).
//
// Usage: PLAYWRIGHT_CORE=../arulraj-resume/node_modules/playwright-core \
//        SIMPLE_ICONS=../portfolio/node_modules/simple-icons node scripts/make-assets.mjs
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_CORE || 'playwright-core');
const si = require(process.env.SIMPLE_ICONS || 'simple-icons');

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const assets = path.join(root, 'assets');
// Pages are loaded with setContent (about:blank origin), which cannot fetch file:// resources, so fonts and
// images are inlined as data URIs.
const mime = { woff2: 'font/woff2', png: 'image/png', jpg: 'image/jpeg', webp: 'image/webp' };
const dataUrl = (file) => `data:${mime[file.split('.').pop()]};base64,${fs.readFileSync(file).toString('base64')}`;
const fontUrl = (f) => dataUrl(path.join(assets, 'fonts', f));
const srcUrl = (f) => dataUrl(path.join(assets, f));

// Portfolio tokens (design/tokens.css).
const T = {
  dark: { bg: '#0a0a12', text: '#f8fafc', muted: '#94a3b8', accent: '#c7d2fe', accent2: '#818cf8', glass: 'rgba(255,255,255,0.08)', border: 'rgba(255,255,255,0.14)', shapes: ['#312e81', '#1e3a8a', '#065f46', '#7c2d12', '#9d174d'] },
  light: { bg: '#eef0fa', text: '#0f172a', muted: '#475569', accent: '#4f46e5', accent2: '#4338ca', glass: 'rgba(255,255,255,0.55)', border: 'rgba(15,23,42,0.1)', shapes: ['#a5b4fc', '#93c5fd', '#6ee7b7', '#fdba74', '#f9a8d4'] },
};

const baseCss = (t) => `
@font-face{font-family:"Space Grotesk";src:url("${fontUrl('space-grotesk.woff2')}") format("woff2");font-weight:300 700}
@font-face{font-family:"Inter";src:url("${fontUrl('inter.woff2')}") format("woff2");font-weight:100 900}
@font-face{font-family:"JetBrains Mono";src:url("${fontUrl('jetbrains-mono.woff2')}") format("woff2")}
*{box-sizing:border-box;margin:0}
body{background:${t.bg};color:${t.text};font-family:Inter,system-ui,sans-serif;-webkit-font-smoothing:antialiased}
.display{font-family:"Space Grotesk",Inter,sans-serif}
.mono{font-family:"JetBrains Mono",ui-monospace,monospace}
.glass{background:${t.glass};border:1px solid ${t.border};border-radius:28px;box-shadow:0 1px 0 rgba(255,255,255,0.06) inset,0 30px 80px -40px rgba(0,0,0,0.6)}
`;

const glow = (color, x, y, size) => `<div style="position:absolute;left:${x}px;top:${y}px;width:${size}px;height:${size}px;border-radius:50%;background:${color};opacity:.55;filter:blur(${size / 4}px)"></div>`;

function bannerHtml(theme) {
  const t = T[theme];
  const lockup = theme === 'dark' ? srcUrl('src-lockup-dark.webp') : srcUrl('src-lockup-light.webp');
  return `<!doctype html><meta charset="utf-8"><style>${baseCss(t)}
#stage{position:relative;width:1600px;height:440px;overflow:hidden;background:${t.bg}}
.card{position:absolute;left:60px;top:50px;width:1480px;height:340px;display:flex;align-items:center;gap:56px;padding:0 72px}
.name{font-size:62px;font-weight:700;letter-spacing:-.5px;line-height:1.05}
.title{margin-top:14px;font-size:24px;color:${t.accent2};font-weight:500}
.eyebrow{font-size:15px;letter-spacing:.22em;text-transform:uppercase;color:${t.accent2};margin-bottom:18px}
.meta{margin-top:18px;font-size:18px;color:${t.muted}}
.avatar{width:220px;height:220px;border-radius:50%;padding:4px;background:conic-gradient(from 180deg,${t.accent2},${t.accent},${t.accent2});flex:none}
.avatar img{width:100%;height:100%;border-radius:50%;object-fit:cover;display:block}
.lockup{position:absolute;right:84px;top:34px;height:44px}
</style>
<div id="stage">
  ${glow(t.shapes[0], -120, -80, 520)}${glow(t.shapes[2], 1180, -160, 460)}${glow(t.shapes[4], 1000, 300, 380)}${glow(t.shapes[1], 420, 320, 420)}
  <div class="card glass">
    <div class="avatar"><img src="${srcUrl('src-avatar.jpg')}"></div>
    <div>
      <div class="eyebrow mono">Hello, I'm</div>
      <div class="name display">Arulraj Venkadachalam</div>
      <div class="title display">Senior Frontend Engineer&nbsp;|&nbsp;Frontend Architect</div>
      <div class="meta">Salem, India · 6+ years · React, TypeScript, micro-frontends, design systems, React Native</div>
    </div>
    <img class="lockup" src="${lockup}">
  </div>
</div>`;
}

function dividerHtml(theme, number, title) {
  const t = T[theme];
  return `<!doctype html><meta charset="utf-8"><style>${baseCss(t)}
#stage{position:relative;width:1600px;height:96px;background:transparent;padding:18px 0 0 4px}
.eyebrow{font-size:13px;letter-spacing:.24em;text-transform:uppercase;color:${t.accent2}}
.title{font-size:34px;font-weight:700;letter-spacing:-.3px;margin-top:4px;line-height:1.1}
.bar{width:48px;height:3px;border-radius:3px;background:${t.accent2};margin-top:8px}
body{background:transparent}</style><div id="stage"><div class="eyebrow mono">${number} · ${title}</div><div class="title display">${title}</div><div class="bar"></div></div>`;
}

const TILES = [
  ['siReact', 'React 19'], ['siTypescript', 'TypeScript'], ['siNextdotjs', 'Next.js'], ['siVite', 'Vite'],
  ['siRedux', 'Redux Toolkit'], ['siTailwindcss', 'Tailwind CSS v4'], ['siRadixui', 'Radix UI'], ['siWebpack', 'Module Federation'],
  [null, 'Rspack', 'RS'], [null, 'Playwright', 'PW'], ['siVitest', 'Vitest'], ['siStorybook', 'Storybook'],
  ['siCapacitor', 'Capacitor'], ['siReact', 'React Native'], [null, 'AWS Amplify', 'AWS'], ['siGraphql', 'GraphQL'],
  ['siApollographql', 'Apollo Client'], ['siGo', 'Go'], ['siPostgresql', 'PostgreSQL'], ['siApachekafka', 'Kafka'],
  ['siNodedotjs', 'Node.js'], ['siClaude', 'Claude Code'],
];

function tilesHtml(theme) {
  const t = T[theme];
  const cells = TILES.map(([slug, label, mono], i) => {
    const bg = t.shapes[i % t.shapes.length];
    const icon = slug ? si[slug] : null;
    const fg = theme === 'dark' ? '#f8fafc' : '#0f172a';
    const brand = icon ? `#${icon.hex}` : fg;
    const lum = icon ? (parseInt(icon.hex.slice(0, 2), 16) * 0.2126 + parseInt(icon.hex.slice(2, 4), 16) * 0.7152 + parseInt(icon.hex.slice(4, 6), 16) * 0.0722) : 0;
    const iconColor = theme === 'dark' && lum > 90 ? brand : fg;
    const glyph = icon
      ? `<svg viewBox="0 0 24 24" width="54" height="54" fill="${iconColor}"><path d="${icon.path}"/></svg>`
      : `<div class="mono" style="font-size:26px;font-weight:600;color:${fg}">${mono}</div>`;
    return `<div class="tile" style="background:${bg}"><div class="face">${glyph}<div class="label">${label}</div></div></div>`;
  }).join('');
  return `<!doctype html><meta charset="utf-8"><style>${baseCss(t)}
#stage{width:1600px;background:transparent;padding:8px 0;display:grid;grid-template-columns:repeat(11,1fr);gap:16px}
.tile{aspect-ratio:1;border-radius:18px;position:relative;box-shadow:0 18px 30px -18px rgba(0,0,0,.8),inset 0 1px 0 rgba(255,255,255,.18);transform:perspective(600px) rotateX(6deg) rotateY(-8deg)}
.tile::before{content:"";position:absolute;inset:0;border-radius:18px;background:linear-gradient(135deg,rgba(255,255,255,.22),rgba(255,255,255,0) 50%,rgba(0,0,0,.2))}
.face{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px}
.label{font-family:"Space Grotesk",Inter,sans-serif;font-weight:600;font-size:13px;letter-spacing:.01em;color:${t.text};text-align:center;padding:0 6px}
body{background:transparent}</style><div id="stage">${cells}</div>`;
}

// Typed roles: four phrases revealed left-to-right by a clip rectangle, caret riding its edge, then wiped.
function typingSvg(theme) {
  const t = T[theme];
  const phrases = ['Senior Frontend Engineer', 'Frontend Architect', 'Micro-frontend & design-system builder', 'React Native shipper'];
  const cw = 13.2; // monospace advance at 22px
  const slot = 3.8; // seconds per phrase
  const total = slot * phrases.length;
  const startX = 24;
  const parts = phrases.map((p, i) => {
    const w = Math.ceil(p.length * cw) + 6;
    const b = i * slot;
    const type = Math.min(1.6, p.length * 0.045);
    const kt = (s) => (s / total).toFixed(4);
    // width: 0 -> w during typing, hold, snap to 0 at slot end
    // Visible only during this phrase's slot of the full cycle (discrete steps, so no cross-fade).
    const gate = i === 0
      ? `<animate attributeName="opacity" calcMode="discrete" values="1;0" keyTimes="0;${kt(slot)}" dur="${total}s" repeatCount="indefinite"/>`
      : `<animate attributeName="opacity" calcMode="discrete" values="0;1;0" keyTimes="0;${kt(b)};${kt(b + slot)}" dur="${total}s" repeatCount="indefinite"/>`;
    return `
  <g opacity="0">
    ${gate}
    <clipPath id="c${i}"><rect x="${startX}" y="0" height="48" width="0">
      <animate attributeName="width" values="0;${w};${w};0" keyTimes="0;${(type / slot).toFixed(3)};${((slot - 0.35) / slot).toFixed(3)};1" begin="${b}s" dur="${slot}s" repeatCount="indefinite"/>
    </rect></clipPath>
    <text x="${startX}" y="32" clip-path="url(#c${i})">${p.replace('&', '&amp;')}</text>
    <rect class="caret" x="${startX}" y="11" width="2.5" height="26">
      <animate attributeName="x" values="${startX};${startX + w};${startX + w};${startX}" keyTimes="0;${(type / slot).toFixed(3)};${((slot - 0.35) / slot).toFixed(3)};1" begin="${b}s" dur="${slot}s" repeatCount="indefinite"/>
    </rect>
  </g>`;
  }).join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="48" viewBox="0 0 640 48" role="img" aria-label="${phrases.join(', ')}">
  <style>text{font:500 22px ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;fill:${t.accent};letter-spacing:.02em}.caret{fill:${t.accent2}}.caret{animation:blink 1s steps(2,start) infinite}@keyframes blink{to{opacity:0}}</style>
  <text x="0" y="32" style="fill:${t.accent2};font-size:18px">&gt;</text>${parts}
</svg>
`;
}

function statusSvg(theme) {
  const t = T[theme];
  return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="40" viewBox="0 0 300 40" role="img" aria-label="Open to senior frontend roles">
  <rect x="0.5" y="0.5" width="299" height="39" rx="19.5" fill="${t.glass}" stroke="${t.border}"/>
  <circle cx="22" cy="20" r="5" fill="#22c55e"/>
  <circle cx="22" cy="20" r="5" fill="none" stroke="#22c55e" stroke-width="2">
    <animate attributeName="r" values="5;12" dur="1.6s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values=".8;0" dur="1.6s" repeatCount="indefinite"/>
  </circle>
  <text x="40" y="25" style="font:500 15px Inter,system-ui,-apple-system,sans-serif;fill:${t.text}">Open to senior frontend roles</text>
</svg>
`;
}

const browser = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
const page = await browser.newPage({ viewport: { width: 1600, height: 500 }, deviceScaleFactor: 1.25 });
async function shoot(html, file, transparent = false) {
  await page.setContent(html, { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(120);
  const el = await page.$('#stage');
  await el.screenshot({ path: path.join(assets, file), type: 'png', omitBackground: transparent });
  console.log('wrote', file);
}

for (const theme of ['dark', 'light']) {
  await shoot(bannerHtml(theme), `banner-${theme}.png`);
  await shoot(tilesHtml(theme), `tiles-${theme}.png`, true);
  for (const [n, title, key] of [['01', 'About me', 'about'], ['02', 'Key strengths', 'strengths'], ['03', 'Tech stack', 'stack'], ['04', 'Experience', 'experience'], ['05', 'Education', 'education']]) {
    await shoot(dividerHtml(theme, n, title), `divider-${key}-${theme}.png`, true);
  }
  fs.writeFileSync(path.join(assets, `typing-${theme}.svg`), typingSvg(theme));
  fs.writeFileSync(path.join(assets, `status-${theme}.svg`), statusSvg(theme));
  console.log('wrote typing/status', theme);
}
await browser.close();
