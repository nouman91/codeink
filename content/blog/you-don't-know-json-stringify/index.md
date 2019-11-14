---
title: You don't know JSON.stringify
date: "2019-11-13"
description: You don't know JSON.stringify
layout: "post"
tags:
  - "JSON"
  - "JavaScript"
---

I am writing this blog from utter shock. Recently I learned something amazing when I was searching for my next blog topic. Initially, I was planning to write blog on 'css-modules' than decided to write a blog on this. So if you are interested then keep on reading.

If you have done some JavaScript development you probably have used JSON.stringify(), and if you are a true JavaScript developer like me you probably have never read on this function. You will have code snippet like this:

```javascript
const obj = {name:"Nouman Waheed", age:29, address:{city:"islamabad", state:"fedral"}}
JSON.stringify(obj)
```
or

```javascript
const obj = {name:"Nouman Waheed", age:29, address:{city:"islamabad", state:"fedral"}}
JSON.stringify(obj,null, 4)
```

From these code snippets, it should be clear that stringify has three arguments, and I am certain you have never used 2nd argument. This is what we will explore in this post. 

From MDN 
> The replacer parameter can be either a function or an array. As a function, it takes two parameters: the key and the value being stringified. The object in which the key was found is provided as the replacer's this parameter. If replacer is an array, the array's values indicate the names of the properties in the object that should be included in the resulting JSON string.

The 2nd argument is called replacer it can either be a function or an array. The array form is pretty interesting because it lets you cherry-pick the properties from your object. Lets see how it works:

```javascript
const obj = {name:"Nouman Waheed", age:29, email:"noumanwaheed91@gmail.com"}
console.log(JSON.stringify(obj, ["name","email"]));
//{"name":"Nouman Waheed","email":"noumanwaheed91@gmail.com"}
```

If seeing this code snippet gave you a light bulb moment you are not alone. That's exactly what happened to me.  Let's take it one step further and pick properties from a nested object. 

```javascript
const obj = {name:"Nouman Waheed", age:29, address:{city:"islamabad", state:"federal"}}
console.log(JSON.stringify(obj, ["name","address", "state"]));
//{"age":29,"address":{"state":"federal"}}
```

Another aha moment is, it not only picks the properties but also writes them in that order. It can be very useful in producing a stable output.

```javascript
const obj = {name:"Nouman Waheed", age:29, email:"noumanwaheed91@gmail.com"}
console.log(JSON.stringify(obj, Object.keys(obj).sort()));
//{"name":"Nouman Waheed","email":"noumanwaheed91@gmail.com"}
```

Things get even crazier if you specify a replacer argument as a function. Let's suppose you want to modify something in your resultant string. 

```javascript
const obj = {name:"Nouman Waheed", age:29, email:"noumanwaheed91@gmail.com"}
const modify = (key, value) => (key === "age" ? value + 1 : value);
console.log(JSON.stringify(obj, modify));
//{"name":"Nouman Waheed","age":30,"email":"noumanwaheed91@gmail.com"}
```

Picking properties/updating object properties is a daily task for JavaScript developer and we use a number of different libraries to make it work. I believe after reading this you will be able to solve your daily tasks pretty easily.

There is also another common problem in JavaScript which is copying objects by value. In most cases, you can use Object.Assign but it fails when you have complex objects. Again JSON.stringify helps in copying objects by value when you combine it JSON.parse.

```javascript
const obj = {name:"Nouman Waheed", age:29, email:"noumanwaheed91@gmail.com"}
const copiedObj = JSON.parse(JSON.stringify(obj))
```

I hope this blog post has helped you in understanding JSON.stringify better and it certainly has encouraged you in using the 2nd argument.
