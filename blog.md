---
title: "Blog"
layout: "layout.html"
---

## Blog posts (in Finnish)
<br/>
{% for post in collections.post reversed %}
     {{ post.date | date: "%Y-%m-%d" }} - <a href="{{ post.url }}">{{ post.data.title }}</a>
{% endfor %}
