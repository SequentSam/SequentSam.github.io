---
layout: layouts/blog.njk
title: 2024 Front-End Performance Playbook
date: 2024-04-19
image: /assets/images/blog/performance-playbook.svg
excerpt: Core Web Vitals are evolving again—here is how I keep Eleventy sites fast with modern tooling.
tags:
  - performance
  - eleventy
---

Eleventy sites are naturally lean, but there are dozens of small wins that keep them feeling instant. First, measure. I automate Lighthouse CI in pull requests and keep an eye on the slowest templates. Next, focus on critical rendering path optimizations: preconnect fonts, inline only the CSS needed for the first render, and async everything else.

Finally, keep payloads predictable. Every hero image is processed through an image pipeline that outputs modern formats, responsive sizes, and includes `loading="lazy"` by default. The result is a site that not only passes Core Web Vitals today but is well positioned for whatever metrics Google introduces next.
