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
    <video class="demo-video" controls autoplay loop muted playsinline preload="metadata"
      {% if d.poster %}poster="{{ d.poster | relative_url }}"{% endif %}>
      <source src="{{ d.video | relative_url }}" type="video/mp4">
      Your browser does not support embedded video. <a href="{{ d.video | relative_url }}">Download the video</a>.
    </video>
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
  .demos .demo-video { width: 100%; max-width: 100%; height: auto; display: block; border-radius: 6px; background: #000; box-shadow: 0 2px 8px rgba(0,0,0,0.15); }
  .demos .demo-desc { margin-top: 0.9rem; }
  .demos .demo-paper { font-size: 0.9rem; color: var(--global-text-color-light, #777); margin-top: 0.4rem; }
</style>
