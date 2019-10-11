---
title: Point Free Programming
date: "2019-10-10"
description: Improve code readability, by using a simple concept of functional programming
layout: "post"
tags:
  - "Functional Programming"
  - "JavaScript"
---

I have been working nonstop for the last 5 years or so. I never really had enough time to ponder deep on the code which I am writing or just really understand how different parts of it are working. In the world of agile, we usually are pretty pressured to complete the user stories. I guess this is true for most of us.

A while ago, I was working on a scheduler service for our client. I was 
writing data pulling service. My objective was to pull data from different cloud services providers. To pull data from all of the providers I was using *Promise.all* as individual processes were independent of one another. If you have used Promise.all before you know it has fail-fast behavior. Meaning if one promise fails it will simply abort the rest of the promises and will end. I needed a way to counter it. So like any other developer I googled and found a solution on StackOverflow. Following is the code block which I used.


```javascript
const reflect = p => p.then(v => ({v, status: "fulfilled" }),
                            e => ({e, status: "rejected" }));
                        
var arr = [ fetch('index.html'), fetch('http://does-not-exist') ]

Promise.all(arr.map(reflect)).then(function(results){
    var success = results.filter(x => x.status === "fulfilled");
});
```

I just copied this and it worked as intended. I did not put too much focus on the code as it seemed easy and simple. I only noticed the inner working of this code when I was writing the unit test cases. This bit of code I couldn't wrap my head around

```javascript
Promise.all(arr.map(reflect))
```
How the reflect function was getting its arguments I was not passing any explicitly. I had no clue, I spend some time on it. As I was under agile pressure so I did not try to dissect it and just completed my work and moved on.

After a few years this year to be precise, I finally got some time on my hand and started reading JavaScript again. As I was not confident of my JavaScript knowledge. I decided to re-learn the fundamentals. As I was learning I realized how much I did not know about the language itself and how much of my existing concepts are wrong. I studied a lot of different areas of language. I also studied functional programming. That is where I learned what was this 'no argument passing' magic was about. In functional programming, it is known as *Point free* or *Tacit* programming. 


### What it is?

It is a technique in functional programming which aims to reduce the visual clutter by removing the unnecessary parameter-argument mapping. It is known as *Point free* or *Tacit* programming. The term *point* here is referring to functions' arguments.

It is one of the most wonderful techniques of functional programming. It might seem ordinary at first, but I can promise you it will help you in writing better code. 

Let's see it with some examples. Stay with me we will write some complex to highlight its usefulness.

### Examples


```javascript
const arr = [5,4,3,2,1];

const sortNumber = (a,b)=>a-b;
console.log(arr.sort(sortNumber));
//[1,2,3,4,5]
```

Here we are sorting an array point free style. We have a function *sortNumber* which sorts numbers in ascending order this function gets called from sort functions but notice we are not doing any argument mapping to sort numbers. Lets now see the exact with points

```javascript
const arr = [5,4,3,2,1];

const sortNumber = (a,b)=>a-b;
console.log(arr.sort((a,b)=>sortNumber(a,b)))
//[1,2,3,4,5]
```
As you can see we have an inner arrow function which does argument mapping to sortNumber. Compare to this the first way is more clean and has less argument clutter

At first look, this might seem like a simple small technique, but you have to really understand it to unleash its full potential. You can use to in combination without functional programming techniques such as function composition closure and many others to make powerful modules.

Now, let take this one step further with the function closure concept. We will sort an array of objects based on a column. If you don't know about closure, don't worry it's not related to that. I will write another blog post on it to go into details of the closure. For now remember this, when an inner function remembers the variables of outer function after the outer function has finished executing its called closure.
This code is an extract from my data-table library.

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
//[ { name: 'Adnan Qaisar', age: 40 },
//  { name: 'Hanan Atif', age: 38 },
//  { name: 'Nouman Waheed', age: 29 } ]
```

In this example, we are sorting our data in ascending by column name. We have two sorter methods *stringSorter* and *numberSorter*. *stringSorter* sorts array by string and *numberSorter* sorts array by number. 

Focus on *sort* method. We are getting the sorter we need and passing in the column name on which we want to sort but notice we are not passing sort arguments. They will automatically be passed in. Our *stringSorter* is returning a function which is doing sorting in point free way. Take a moment and let it sink ink. Maybe try copy-pasting this snippet and try playing with it.

Lets now convert this example to the normal way, with points, and without closure. While we are at it, let's also get rid of arrow functions. This will make it more understandable and help to compare the two techniques.

```javascript
function stringSorter (col, a, b) {
  const aVal = a[col] ? a[col] : "";
  const bVal = b[col] ? b[col] : "";
  return aVal.localeCompare(bVal);
};

function numberSorter (col, a, b) {
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
console.log(
  arr.sort(function(a, b) {
    return sortCol.sorter(sortCol.col, a, b);
  })
);
//[ { name: 'Adnan Qaisar', age: 40 },
//  { name: 'Hanan Atif', age: 38 },
//  { name: 'Nouman Waheed', age: 29 } ]
```

Notice the argument mapping inside sort function. We are manually mapping sort arguments to our sort functions. Notice something else, we are also mapping/passing in sort column as well.


Now ask yourself which version is better, I would argue the first one. It has a clean and more readable code than the second one. It looks and works like the native sort function which takes only two arguments. The second one has argument mappings and receives the one additional argument to do the sorting.


All the example I have shown you here they are working with either maps or sort functions that does not mean Point Free is only limited to these. It is not. It is a concept which you can apply anywhere in your system. You can certainly go ahead and change your functions to be point free.

### Note 
Stop for a moment. Let's make sure we are careful on point free. I am not suggesting that you go overboard in trying to make your code point-free. It is a technique that improves readability when used in moderation. But as with most things in software development, you can definitely about it. It is not worth it If your code gets harder to understand because of the hoops you have to jump through to be point-free. Remember the golden objective of point-free is to improve code readability. So never compromise on that.

### When to go Point Free
The key thing to look for is if you have a function with parameter(s) that is/are directly passed to an inner function call. In all the preceding examples, 'sort(...)' had the parameters which were passed along to another function call. If we have situations like these we will be able to replace that layer of abstraction with a point-free expression.

Hit me on [Linkedin](https://www.linkedin.com/in/noumanwaheed/) let me know what's your thoughts are on Point Free Programming.
