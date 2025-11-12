# Fake Weather Fetcher
### 🎯 Goal  
A small project that simulates fetching weather data (using Promises and setTimeout) and displays it dynamically.
No real API — just pure JS logic to understand Promises.

### 💡Learning
#### ❇️ Promise - It is an object that represents the eventual result of an asynchronous operation

```js
const promise = new Promise((resolve, reject) => {
  // do something (e.g., fetch data, wait, etc.)
  
  let success = true;

  if (success) {
    resolve("Task completed successfully");
  } else {
    reject("Something went wrong");
  }
});

promise
  .then(result => console.log(result))    // runs when resolved
  .catch(error => console.log(error));    // runs when rejected
```
**In Simple Terms**
- `new Promise()` → creates a Promise object

- `(resolve, reject)` → functions provided by JS

    - `resolve()` → success

    - `reject()` → failure

- `.then()` → handles success result

- `.catch()` → handles error