---
layout: page
permalink: /demo-a/
title: demo
description: Animations of microstructure evolution predicted by my models.
nav: false
---

<div class="demos-a">
{% for d in site.data.demos %}
  {% assign zoom = d.zoom | default: 1 %}
  {% assign shift_y = d.shift_y | default: '0%' %}
  <article class="da-card">
    <div class="da-media">
      <div class="da-frame">
        <video class="da-video" autoplay loop muted playsinline preload="metadata"
          style="transform: translateY({{ shift_y }}) scale({{ zoom }});"
          {% if d.poster %}poster="{{ d.poster | relative_url }}"{% endif %}>
          <source src="{{ d.video | relative_url }}" type="video/mp4">
        </video>
      </div>
    </div>
    <div class="da-body">
      <div class="da-kicker">Demo</div>
      <h2 class="da-title">{{ d.title }}</h2>
      {% if d.tags %}
      <div class="da-tags">{% for t in d.tags %}<span class="da-tag">{{ t }}</span>{% endfor %}</div>
      {% endif %}
      <div class="da-desc">{{ d.description | markdownify }}</div>
      {% if d.facts %}
      <dl class="da-facts">
        {% for f in d.facts %}<div class="da-fact"><dt>{{ f.label }}</dt><dd>{{ f.value }}</dd></div>{% endfor %}
      </dl>
      {% endif %}
      <div class="da-actions">
        {% if d.paper_url %}<a class="da-btn" href="{{ d.paper_url }}" target="_blank" rel="noopener">Read the paper</a>{% endif %}
        <a class="da-btn da-btn-ghost" href="{{ '/publications/' | relative_url }}">All publications</a>
      </div>
    </div>
  </article>
{% endfor %}
</div>

<style>
  .demos-a .da-card {
    display: grid; grid-template-columns: minmax(0, 5fr) minmax(0, 6fr); gap: 2rem; align-items: start;
    margin: 1.5rem 0 3rem 0; padding: 1.5rem;
    border: 1px solid var(--global-divider-color); border-radius: 14px;
    background: var(--global-card-bg-color);
  }
  @media (max-width: 800px) { .demos-a .da-card { grid-template-columns: 1fr; } }
  .demos-a .da-frame { position: relative; width: 100%; aspect-ratio: 1 / 1; overflow: hidden; border-radius: 10px; background: #fff; }
  .demos-a .da-video { width: 100%; height: 100%; object-fit: cover; display: block; transform-origin: center center; }
  .demos-a .da-kicker { font-size: 0.75rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--global-theme-color); font-weight: 600; }
  .demos-a .da-title { font-size: 1.5rem; line-height: 1.25; margin: 0.35rem 0 0.75rem 0; }
  .demos-a .da-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 0.9rem; }
  .demos-a .da-tag { font-size: 0.72rem; padding: 0.2rem 0.6rem; border-radius: 999px; border: 1px solid var(--global-divider-color); color: var(--global-text-color-light); }
  .demos-a .da-desc { font-size: 0.95rem; }
  .demos-a .da-desc p { margin-bottom: 0.75rem; }
  .demos-a .da-facts { display: grid; grid-template-columns: 1fr 1fr; gap: 0.6rem 1rem; margin: 0.5rem 0 1.1rem 0; padding: 0.9rem 0; border-top: 1px solid var(--global-divider-color); border-bottom: 1px solid var(--global-divider-color); }
  .demos-a .da-fact dt { font-size: 0.7rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--global-text-color-light); font-weight: 600; }
  .demos-a .da-fact dd { margin: 0.1rem 0 0 0; font-size: 0.9rem; }
  .demos-a .da-actions { display: flex; flex-wrap: wrap; gap: 0.6rem; }
  .demos-a .da-btn { display: inline-block; padding: 0.5rem 1rem; border-radius: 8px; font-size: 0.88rem; font-weight: 600; text-decoration: none !important; background: var(--global-theme-color); color: #fff !important; border: 1px solid var(--global-theme-color); }
  .demos-a .da-btn:hover { filter: brightness(1.08); }
  .demos-a .da-btn-ghost { background: transparent; color: var(--global-theme-color) !important; }
</style>
