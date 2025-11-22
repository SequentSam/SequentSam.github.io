---
layout: layouts/blog.njk
title: Headless CMS Workflow for Eleventy
date: 2023-12-18
image: /assets/images/blog/content-workflow.svg
excerpt: Connect your headless CMS to Eleventy with webhooks, incremental builds, and editorial previews.
tags:
  - content
  - workflow
---

Editor previews matter. This article explains how I wire up Sanity and Contentful to trigger Eleventy builds via serverless functions. Authors get preview URLs that expire automatically, and production builds stay fast thanks to cached API responses stored in a Git-tracked data directory.
