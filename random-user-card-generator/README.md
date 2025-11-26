# Random User Card Generator

### 🎯 Goal

A small app that fetches a random person from a public API and displays their profile card on the page.

### 💡Learning

#### ❇️ Async/Await With fetch()

##### Async Function
Marks the function as asynchronous.
```js
async function fetchRandomUser() { ... }
```

##### Await Fetch
Waits for the network request without blocking UI.
```js
const response = await fetch("https://randomuser.me/api/");
```

##### Await JSON Parsing
Waits for the network request without blocking UI.
```js
const data = await response.json();
```

##### try…catch Error Handling
Covers network issues or JSON parsing errors.

##### DOM updates after async flow
Shows how async and UI updates interact.