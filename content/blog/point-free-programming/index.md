---
title: Point Free Programming
date: "2019-10-10"
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

```javascript
Promise.all(arr.map(reflect))
```
How reflect funtion was getting its arguments I was not passing any explicetely. As I was under agile pressure I did not put too much thought into it and just completed my work and moved on.

After few years this year to be precise I finally got some time on my hand and started reading JavaScript again. As I was not condifent of my JavaScript knowledge. As I was re-learning the fundamentals I realized how much I did not know about the language itself. I studied a lot on different areas of language. I aslo studied functional programming. That is where I learned what was this magic about. In functional its is known as *Point free* or *Tacit* programming. 


### What it is?

It is technique in functional programming which aims to reduce the visual clutter by removing unessary paramter-argument mapping. It is known as *Point free* or *Tacit* programming. The term *point* here is reffering to functions' arguments.

It is one of the most wonderful technique of functional programming. It can help you in writing better code.

### Examples

Lets see point free in action. 

```javascript
const arr = [5,4,3,2,1];

const sortNumber = (a,b)=>a-b;
console.log(arr.sort(sortNumber));
```

Here we are sorting array point free style. We have a function *sortNumber* which sorts numbers in assending order this funtion gets called from sort functions but notice we are not doing any agrument mapping to sort numbers. Lets now see the exact with points

```javascript
const arr = [5,4,3,2,1];

const sortNumber = (a,b)=>a-b;
console.log(arr.sort((a,b)=>sortNumber(a,b)))
```
As you can see we have an inner arrow function which does argument mapping to sortNumber. Compare to this the first way is more clean and has less argument clutter

At first look this might seem like a simple small technique, but you have to really understand to unleash its full potential. You can use to in combination with out function programming techniques such as function composition closure and many other to make powerful module.

Lets use this techinque with function closure concept to sort array of objects based on column. If you don't understand closure concept don't worry its not related to that. I will write another blog post on it to go into details of what is closure.

```javascript
const stringSorter = col => (a, b) => {
    const aVal = a[col] ? a[col] : "";
    const bVal = b[col] ? b[col] : "";
    return aVal.localeCompare(bVal);
  };
  
  const numberSorter = col => (a, b) => {
    const aVal = a[col] ? a[col] : 0;
    const bVal = b[col] ? b[col] : 0;
    return aVal - bVal;
};

const arr = [
  { name: "Nouman Waheed", age: 29 },
  { name: "Adnan Qaisar", age: 40 },
  { name: "Hanan Atif", age: 38 }
];
const sorters = [
  { col: "name", sorter: stringSorter },
  { col: "age", sorter: numberSorter }
];


const sortCol = sorters[0];
console.log(arr.sort(sortCol.sorter(sortCol.col)));
```
In this example we are sorting our data in ascending by column name. We have two sorter method *stringSorter* and *numberSorter*. *stringSorter* sorts array by string and *numberSorter* sorts array by number. In 


