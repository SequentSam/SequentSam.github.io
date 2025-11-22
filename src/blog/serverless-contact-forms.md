---
layout: layouts/blog.njk
title: Serverless Contact Forms for Static Sites
date: 2024-03-27
image: /assets/images/blog/performance-playbook.svg
excerpt: Collect leads securely without spinning up a backend server.
tags:
  - jamstack
  - serverless
---

This tutorial walks through building a Netlify Functions endpoint that processes contact form submissions. We validate inputs, rate-limit abusive traffic, and notify the team via Slack. Eleventy handles the front-end form with proper accessibility attributes, while the function stores submissions in Airtable for follow-up.
