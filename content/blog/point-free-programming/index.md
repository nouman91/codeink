---
title: Point Free Programming
date: "10/09/2019 3:38 PM"
description: This is a custom description for SEO and Open Graph purposes, rather than the default generated excerpt. Simply add a description field to the frontmatter.
layout: "post"
tags:
  - "Functional Programming"
  - "JavaScript"
---

I have been non stop for last 5 years or so. I never really had enough time to ponder deep on the code which I am writing or just really understand how different parts of it are working. In world of agile we usually are pretty pressured to complete the user stories. I guess this true for most of us.

A while ago, I was working on scheduler service for our client. I was writing data pulling service there I used Promise.all and as you are failure that Promise.all has fail fast behavior. Meaning if one promise fails it will simply abort rest of the promises and will end. I needed a way to counter it. I wanted all of my promises to run without being dependent on one another. So like any developer I googled and found solution on stackoverflow. Following is code block which I used.