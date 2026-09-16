---
layout: page
permalink: /demo-c/
title: demo
description: Animations of microstructure evolution predicted by my models.
nav: false
---

<div class="demos-c">
{% for d in site.data.demos %}
  {% assign zoom = d.zoom | default: 1 %}
  {% assign shift_y = d.shift_y | default: '0%' %}
  <h2 class="dc-title">{{ d.title }}</h2>
  {% if d.tags %}
  <div class="dc-tags">{% for t in d.tags %}<span class="dc-tag">{{ t }}</span>{% endfor %}</div>
  {% endif %}
  <div class="dc-player" data-player>
    <div class="dc-frame">
      <video class="dc-video" loop muted playsinline preload="auto" autoplay
        style="transform: translateY({{ shift_y }}) scale({{ zoom }});"
        {% if d.poster %}poster="{{ d.poster | relative_url }}"{% endif %}>
        <source src="{{ d.video | relative_url }}" type="video/mp4">
      </video>
    </div>
    <div class="dc-controls">
      <button class="dc-btn" data-play aria-label="Play or pause" title="Play / pause">&#10074;&#10074;</button>
      <button class="dc-btn" data-restart aria-label="Restart" title="Restart">&#8635;</button>
      <input class="dc-seek" type="range" min="0" max="1000" value="0" step="1" data-seek aria-label="Seek">
      <span class="dc-time" data-time>0.0 s</span>
      <span class="dc-speeds">
        <button class="dc-speed" data-speed="0.5">0.5&times;</button>
        <button class="dc-speed is-active" data-speed="1">1&times;</button>
        <button class="dc-speed" data-speed="2">2&times;</button>
      </span>
    </div>
  </div>
  <div class="dc-grid">
    <div class="dc-box">
      <h3 class="dc-h">About this animation</h3>
      {{ d.description | markdownify }}
    </div>
    <div class="dc-box">
      {% if d.facts %}
      <h3 class="dc-h">Details</h3>
      <ul class="dc-facts">
        {% for f in d.facts %}<li><span>{{ f.label }}</span>{{ f.value }}</li>{% endfor %}
      </ul>
      {% endif %}
      {% if d.paper_url %}<a class="dc-link" href="{{ d.paper_url }}" target="_blank" rel="noopener">Read the paper &rarr;</a>{% endif %}
    </div>
  </div>
{% endfor %}
</div>

<style>
  .demos-c .dc-title { font-size: 1.6rem; margin: 1.25rem 0 0.5rem 0; }
  .demos-c .dc-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 1rem; }
  .demos-c .dc-tag { font-size: 0.72rem; padding: 0.2rem 0.6rem; border-radius: 999px; background: var(--global-theme-color); color: #fff; opacity: 0.9; }
  .demos-c .dc-player { max-width: 680px; margin: 0 auto; padding: 12px; border-radius: 16px; background: #15181e; box-shadow: 0 10px 30px rgba(0,0,0,0.25); }
  .demos-c .dc-frame { position: relative; width: 100%; aspect-ratio: 1 / 1; overflow: hidden; border-radius: 8px; background: #fff; }
  .demos-c .dc-video { width: 100%; height: 100%; object-fit: cover; display: block; transform-origin: center center; }
  .demos-c .dc-controls { display: flex; align-items: center; gap: 0.6rem; padding: 0.7rem 0.25rem 0.15rem 0.25rem; color: #e6e8ee; font-size: 0.85rem; }
  .demos-c .dc-btn { background: transparent; border: 1px solid rgba(255,255,255,0.25); color: #e6e8ee; border-radius: 6px; width: 34px; height: 30px; cursor: pointer; font-size: 0.85rem; line-height: 1; }
  .demos-c .dc-btn:hover { background: rgba(255,255,255,0.1); }
  .demos-c .dc-seek { flex: 1; accent-color: var(--global-theme-color); cursor: pointer; }
  .demos-c .dc-time { font-variant-numeric: tabular-nums; min-width: 3.6em; text-align: right; opacity: 0.85; }
  .demos-c .dc-speeds { display: inline-flex; border: 1px solid rgba(255,255,255,0.25); border-radius: 6px; overflow: hidden; }
  .demos-c .dc-speed { background: transparent; border: 0; color: #e6e8ee; padding: 0.3rem 0.5rem; cursor: pointer; font-size: 0.78rem; }
  .demos-c .dc-speed.is-active { background: var(--global-theme-color); color: #fff; }
  .demos-c .dc-grid { display: grid; grid-template-columns: minmax(0, 3fr) minmax(0, 2fr); gap: 1.25rem; margin: 1.5rem 0 3rem 0; }
  @media (max-width: 800px) { .demos-c .dc-grid { grid-template-columns: 1fr; } }
  .demos-c .dc-box { padding: 1.1rem 1.25rem; border-radius: 12px; border: 1px solid var(--global-divider-color); background: var(--global-card-bg-color); }
  .demos-c .dc-h { font-size: 0.78rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--global-text-color-light); font-weight: 700; margin: 0 0 0.6rem 0; }
  .demos-c .dc-box p { font-size: 0.93rem; margin-bottom: 0.6rem; }
  .demos-c .dc-facts { list-style: none; padding: 0; margin: 0 0 0.9rem 0; }
  .demos-c .dc-facts li { display: flex; justify-content: space-between; gap: 1rem; padding: 0.4rem 0; border-bottom: 1px solid var(--global-divider-color); font-size: 0.88rem; }
  .demos-c .dc-facts li span { color: var(--global-text-color-light); flex-shrink: 0; }
  .demos-c .dc-link { font-weight: 600; }
</style>

<script>
  document.querySelectorAll('.demos-c [data-player]').forEach(function (p) {
    var v = p.querySelector('video'), play = p.querySelector('[data-play]'), restart = p.querySelector('[data-restart]'),
        seek = p.querySelector('[data-seek]'), time = p.querySelector('[data-time]'), scrubbing = false;
    function icon() { play.innerHTML = v.paused ? '&#9654;' : '&#10074;&#10074;'; }
    play.addEventListener('click', function () { v.paused ? v.play() : v.pause(); });
    restart.addEventListener('click', function () { v.currentTime = 0; v.play(); });
    v.addEventListener('play', icon); v.addEventListener('pause', icon);
    v.addEventListener('timeupdate', function () {
      if (!scrubbing && v.duration) { seek.value = Math.round(v.currentTime / v.duration * 1000); }
      time.textContent = v.currentTime.toFixed(1) + ' s';
    });
    seek.addEventListener('input', function () { scrubbing = true; if (v.duration) { v.currentTime = seek.value / 1000 * v.duration; } });
    seek.addEventListener('change', function () { scrubbing = false; });
    p.querySelectorAll('[data-speed]').forEach(function (b) {
      b.addEventListener('click', function () {
        v.playbackRate = parseFloat(b.dataset.speed);
        p.querySelectorAll('[data-speed]').forEach(function (x) { x.classList.remove('is-active'); });
        b.classList.add('is-active');
      });
    });
    icon();
  });
</script>
