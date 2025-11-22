---
layout: layouts/blog.njk
title: Running A/B Tests on a Static Marketing Site
date: 2024-01-25
image: /assets/images/blog/performance-playbook.svg
excerpt: Lightweight tooling to test hero copy and CTAs without slowing down your Eleventy build.
tags:
  - marketing
  - experiments
---

Static sites can still run experiments. I walk through how to inject a small experiment framework that rotates hero copy variants, reports conversions, and gracefully falls back when scripts fail. The key is to avoid blocking rendering; everything waits until the first paint so content remains crawlable and fast.
