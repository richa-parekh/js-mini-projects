# Smart Notification Toast System
### 🎯 Goal  
Build a smart notification toast system that displays temporary messages on a webpage, just like modern web apps (e.g., Gmail, Trello, or Slack).

### 💡Learning
#### ❇️ setTimeout() - Sets a reminder to run code later, without stopping everything else

```js
setTimeout(function, delay, ...arguments);
```

**Example**
```js
function greet(name) {
  console.log("Hello " + name);
}

setTimeout(greet, 3000, "Richa"); 
```

#### ❇️ clearTimeout() - To stop a scheduled timeout
```js
let timerId = setTimeout(() => {
  console.log("This will not run");
}, 2000);

clearTimeout(timerId);
```