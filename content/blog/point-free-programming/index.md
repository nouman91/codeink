---
title: Point Free Programming
date: "10/09/2019 3:38 PM"
description: This is a custom description for SEO and Open Graph purposes, rather than the default generated excerpt. Simply add a description field to the frontmatter.
layout: "post"
tags:
  - "Functional Programming"
  - "JavaScript"
---

I have been working non stop for last 5 years or so. I never really had enough time to ponder deep on the code which I am writing or just really understand how different parts of it are working. In world of agile we usually are pretty pressured to complete the user stories. I guess this true for most of us.

A while ago, I was working on scheduler service for our client. I was writing data pulling service there I used Promise.all and as you are failure that Promise.all has fail fast behavior. Meaning if one promise fails it will simply abort rest of the promises and will end. I needed a way to counter it. I wanted all of my promises to run without being dependent on one another. So like any developer I googled and found solution on stackoverflow. Following is code block which I used.


```javascript
const reflect = p => p.then(v => ({v, status: "fulfilled" }),
                            e => ({e, status: "rejected" }));
                        
var arr = [ fetch('index.html'), fetch('http://does-not-exist') ]

Promise.all(arr.map(reflect)).then(function(results){
    var success = results.filter(x => x.status === "fulfilled");
});
```

I just copied this and it worked as intended. I only noticed the inner working of this code hwen I was writing unit test case. This bit of code I could wrap my head around

```
Promise.all(arr.map(reflect))
```
How reflect funtion was getting its arguments I was not passing any explicetely. As I was under agile pressure I did not put too much thought into it and just completed my work and moved on.

After few years this year to be precise I finally got some time on my hand and started reading JavaScript again. As I was not condifent of my JavaScript knowledge. As I was re-learning the fundamentals I realized how much I did not know about the language itself. Anyways, I kept on learning and came accross similar code snippet where we are not passing any arguements but code itself was working. 

```

```
