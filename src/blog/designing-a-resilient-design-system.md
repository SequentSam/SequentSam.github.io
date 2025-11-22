---
layout: layouts/blog.njk
title: Designing a Resilient Design System
date: 2024-02-15
image: /assets/images/blog/design-system.svg
excerpt: Lessons learned from building a flexible design system that can evolve with a fast-moving product team.
tags:
  - design
  - systems
---

Your design system should do far more than provide a stack of reusable components. It needs to capture how and why a team assembles interfaces, how tokens map to code, and how decisions are documented. In this post I break down the workshop framework I use with clients to align designers and developers on the same primitives.

We start by inventorying real product UI, then extract the small set of tokens that are doing the heavy lifting. From there, each pattern is validated with accessibility and performance constraints before it becomes a component. This process takes more time up front, but it produces systems that can survive the next rebrand without major rewrites.
