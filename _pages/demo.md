---
layout: page
permalink: /demo/
title: demo
description: Animations of microstructure evolution predicted by my models.
nav: true
nav_order: 3
---

<div class="demos">
{% for d in site.data.demos %}
  <div class="demo">
    <h2 class="demo-title">{{ d.title }}</h2>
    {% assign zoom = d.zoom | default: 1 %}
    <div class="demo-frame" style="max-width: {{ d.max_width | default: '640px' }};">
      <video class="demo-video" autoplay loop muted playsinline preload="metadata"
        style="transform: scale({{ zoom }});"
        {% if d.poster %}poster="{{ d.poster | relative_url }}"{% endif %}>
        <source src="{{ d.video | relative_url }}" type="video/mp4">
        Your browser does not support embedded video. <a href="{{ d.video | relative_url }}">Download the video</a>.
      </video>
    </div>
    {% if d.description %}<div class="demo-desc">{{ d.description | markdownify }}</div>{% endif %}
    {% if d.paper_url %}
      <div class="demo-paper">Related paper: <a href="{{ d.paper_url }}" target="_blank" rel="noopener">{{ d.paper_title | default: d.paper_url }}</a></div>
    {% endif %}
  </div>
{% endfor %}
</div>

<style>
  .demos .demo { margin: 1.5rem 0 3rem 0; }
  .demos .demo-title { font-size: 1.5rem; margin-bottom: 0.75rem; }
  .demos .demo-frame { position: relative; width: 100%; aspect-ratio: 1 / 1; margin: 0 auto; overflow: hidden; border-radius: 8px; background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.15); }
  .demos .demo-video { width: 100%; height: 100%; object-fit: cover; display: block; transform-origin: center center; }
  .demos .demo-desc { margin-top: 0.9rem; }
  .demos .demo-paper { font-size: 0.9rem; color: var(--global-text-color-light, #777); margin-top: 0.4rem; }
</style>
