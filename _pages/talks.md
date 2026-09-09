---
layout: page
permalink: /talks/
title: talks
description: Conference talks, seminars and posters, most recent first.
nav: true
nav_order: 2
---

{% assign talks = site.data.talks | sort: "date" | reverse %}
{% assign current_year = "" %}

<div class="talks">
{% if talks.size == 0 %}
  <p>Upcoming and past talks will be listed here soon.</p>
{% endif %}
{% for talk in talks %}
  {% assign year = talk.date | date: "%Y" %}
  {% if year != current_year %}
    {% unless forloop.first %}</ul>{% endunless %}
    <h2 class="year">{{ year }}</h2>
    <ul class="talk-list">
    {% assign current_year = year %}
  {% endif %}
  <li class="talk">
    <div class="talk-date">{{ talk.date | date: "%b %d, %Y" }}</div>
    <div class="talk-body">
      <div class="talk-title">{{ talk.title }}</div>
      <div class="talk-event">
        {% if talk.url %}<a href="{{ talk.url }}" target="_blank" rel="noopener">{{ talk.event }}</a>{% else %}{{ talk.event }}{% endif %}
        {% if talk.location %} &middot; {{ talk.location }}{% endif %}
      </div>
      <div class="talk-meta">
        {% if talk.type %}<span class="badge talk-type">{{ talk.type }}</span>{% endif %}
        {% if talk.slides %}<a class="btn btn-sm z-depth-0" href="{{ talk.slides | relative_url }}" target="_blank" rel="noopener">Slides</a>{% endif %}
        {% if talk.video %}<a class="btn btn-sm z-depth-0" href="{{ talk.video }}" target="_blank" rel="noopener">Video</a>{% endif %}
        {% if talk.poster %}<a class="btn btn-sm z-depth-0" href="{{ talk.poster | relative_url }}" target="_blank" rel="noopener">Poster</a>{% endif %}
      </div>
      {% if talk.note %}<div class="talk-note">{{ talk.note }}</div>{% endif %}
    </div>
  </li>
  {% if forloop.last %}</ul>{% endif %}
{% endfor %}
</div>

<style>
  .talks h2.year { margin-top: 2rem; font-size: 1.6rem; opacity: 0.6; text-align: right; border-bottom: 1px solid var(--global-divider-color, #e0e0e0); padding-bottom: 0.25rem; }
  .talks ul.talk-list { list-style: none; padding-left: 0; margin: 0; }
  .talks li.talk { display: flex; gap: 1.25rem; padding: 0.9rem 0; border-bottom: 1px dotted var(--global-divider-color, #e0e0e0); }
  .talks li.talk:last-child { border-bottom: none; }
  .talks .talk-date { flex: 0 0 8.5rem; font-size: 0.85rem; color: var(--global-text-color-light, #777); padding-top: 0.15rem; }
  .talks .talk-title { font-weight: 500; }
  .talks .talk-event { font-size: 0.95rem; color: var(--global-text-color-light, #555); margin-top: 0.15rem; }
  .talks .talk-meta { margin-top: 0.4rem; display: flex; gap: 0.4rem; flex-wrap: wrap; align-items: center; }
  .talks .talk-type { background: var(--global-theme-color, #b509ac); color: #fff; font-weight: 500; font-size: 0.7rem; padding: 0.25rem 0.5rem; }
  .talks .talk-note { font-size: 0.85rem; margin-top: 0.3rem; color: var(--global-text-color-light, #777); }
  @media (max-width: 576px) { .talks li.talk { flex-direction: column; gap: 0.2rem; } }
</style>
