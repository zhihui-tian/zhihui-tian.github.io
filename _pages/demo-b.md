---
layout: page
permalink: /demo-b/
title: demo
description: Animations of microstructure evolution predicted by my models.
nav: false
---

<div class="demos-b">
{% for d in site.data.demos %}
  {% assign zoom = d.zoom | default: 1 %}
  {% assign shift_y = d.shift_y | default: '0%' %}
  <section class="db-hero">
    <div class="db-frame">
      <video class="db-video" autoplay loop muted playsinline preload="metadata"
        style="transform: translateY({{ shift_y }}) scale({{ zoom }});"
        {% if d.poster %}poster="{{ d.poster | relative_url }}"{% endif %}>
        <source src="{{ d.video | relative_url }}" type="video/mp4">
      </video>
      <div class="db-overlay">
        {% if d.facts %}<div class="db-kicker">{{ d.facts[0].value }} &middot; autoregressive rollout</div>{% endif %}
        <h2 class="db-title">{{ d.title }}</h2>
      </div>
    </div>
  </section>
  <div class="db-cols">
    <div class="db-main">
      <h3 class="db-h">What you are seeing</h3>
      {{ d.description | markdownify }}
    </div>
    <aside class="db-side">
      {% if d.facts %}
      <h3 class="db-h">At a glance</h3>
      <ul class="db-facts">
        {% for f in d.facts %}<li><span>{{ f.label }}</span>{{ f.value }}</li>{% endfor %}
      </ul>
      {% endif %}
      {% if d.paper_url %}
      <a class="db-paper" href="{{ d.paper_url }}" target="_blank" rel="noopener">
        <span class="db-paper-label">Paper</span>
        <span class="db-paper-title">{{ d.paper_title | default: d.paper_url }}</span>
      </a>
      {% endif %}
    </aside>
  </div>
{% endfor %}
</div>

<style>
  .demos-b .db-hero { margin: 1.25rem 0 2rem 0; }
  .demos-b .db-frame { position: relative; width: 100%; max-width: 720px; margin: 0 auto; aspect-ratio: 1 / 1; overflow: hidden; border-radius: 16px; background: #fff; box-shadow: 0 12px 40px rgba(0,0,0,0.18); }
  .demos-b .db-video { width: 100%; height: 100%; object-fit: cover; display: block; transform-origin: center center; }
  .demos-b .db-overlay { position: absolute; left: 0; right: 0; bottom: 0; padding: 4rem 1.75rem 1.5rem 1.75rem; background: linear-gradient(to top, rgba(10,12,18,0.85) 0%, rgba(10,12,18,0.55) 55%, rgba(10,12,18,0) 100%); color: #fff; }
  .demos-b .db-kicker { font-size: 0.75rem; letter-spacing: 0.14em; text-transform: uppercase; opacity: 0.85; margin-bottom: 0.3rem; }
  .demos-b .db-title { font-size: 1.7rem; line-height: 1.2; margin: 0; color: #fff; text-shadow: 0 1px 6px rgba(0,0,0,0.5); }
  .demos-b .db-cols { display: grid; grid-template-columns: minmax(0, 3fr) minmax(0, 2fr); gap: 2.5rem; max-width: 900px; margin: 0 auto 3rem auto; }
  @media (max-width: 800px) { .demos-b .db-cols { grid-template-columns: 1fr; gap: 1.5rem; } }
  .demos-b .db-h { font-size: 0.8rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--global-text-color-light); font-weight: 700; margin: 0 0 0.6rem 0; }
  .demos-b .db-main p { font-size: 1rem; line-height: 1.65; }
  .demos-b .db-facts { list-style: none; padding: 0; margin: 0 0 1.25rem 0; }
  .demos-b .db-facts li { display: flex; justify-content: space-between; gap: 1rem; padding: 0.45rem 0; border-bottom: 1px solid var(--global-divider-color); font-size: 0.9rem; }
  .demos-b .db-facts li span { color: var(--global-text-color-light); flex-shrink: 0; }
  .demos-b .db-paper { display: block; padding: 0.9rem 1rem; border-radius: 10px; border: 1px solid var(--global-divider-color); background: var(--global-card-bg-color); text-decoration: none !important; color: var(--global-text-color) !important; transition: border-color 0.15s; }
  .demos-b .db-paper:hover { border-color: var(--global-theme-color); }
  .demos-b .db-paper-label { display: block; font-size: 0.7rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--global-theme-color); font-weight: 700; margin-bottom: 0.25rem; }
  .demos-b .db-paper-title { display: block; font-size: 0.88rem; line-height: 1.4; }
</style>
