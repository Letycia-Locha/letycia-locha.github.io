---
title: "Projects"
permalink: /projects/
layout: single
author_profile: true
---

# Projects

<p>Explore select cases that highlight decisions, trade-offs and measurable impact. Use filters to focus on Platform, B2B or Internal work.</p>

{% assign per_page = 6 %}
{% assign projects = site.data.projects | sort: 'order' %}

{%- assign page = page.url | split: '/' | last -%}
{%- if page == '' -%}
  {% assign current_page = 1 %}
{%- else -%}
  {% assign current_page = page | plus: 0 %}
{%- endif -%}

{% assign total = projects | size %}
{% assign total_pages = total | divided_by: per_page | plus: 0 %}
{% if total > per_page %}
  {% assign total_pages = total | divided_by: per_page | ceil %}
{% endif %}

{% assign start = per_page | times: current_page | minus: per_page %}
{% assign paged = projects | slice: start, per_page %}

<div class="projects-grid">
  {% for p in paged %}
  <article class="project-card">
    <h3><a href="{{ site.baseurl }}{{ p.permalink }}">{{ p.title }}</a></h3>
    <p class="blurb">{{ p.short_blurb }}</p>
    <div class="meta">
      <span class="badge">{{ p.key_metric }}</span>
      <span class="status status-{{ p.status }}">{{ p.status }}</span>
    </div>
    <p><a class="cta" href="{{ site.baseurl }}{{ p.permalink }}">Ver case →</a></p>
  </article>
  {% endfor %}
</div>

{% if total_pages > 1 %}
  <nav class="paginator" role="navigation" aria-label="Projects pagination">
    {% if current_page > 1 %}
      {% assign prev = current_page | minus: 1 %}
      <a class="prev" href="{{ site.baseurl }}/projects/{{ prev }}/" aria-label="Previous page">← Anterior</a>
    {% endif %}

    <div class="page-numbers">
      {% if current_page > 2 %}
        <a href="{{ site.baseurl }}/projects/1/" aria-label="First page">« Primeiro</a>
      {% endif %}
      {% for i in (1..total_pages) %}
        {% if i == current_page %}
          <a class="current" href="{{ site.baseurl }}/projects/{{ i }}/" aria-label="Current page">{{ i }}</a>
        {% else %}
          <a href="{{ site.baseurl }}/projects/{{ i }}/" aria-label="Page {{ i }}">{{ i }}</a>
        {% endif %}
      {% endfor %}
      {% if current_page < total_pages | minus:1 %}
        <a href="{{ site.baseurl }}/projects/{{ total_pages }}/" aria-label="Last page">Última »</a>
      {% endif %}
    </div>

    {% if current_page < total_pages %}
      {% assign next = current_page | plus: 1 %}
      <a class="next" href="{{ site.baseurl }}/projects/{{ next }}/" aria-label="Next page">Próxima →</a>
    {% endif %}
  </nav>
{% endif %}
