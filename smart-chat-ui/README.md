# Smart Chat UI

### 🎯 Goal

A mini “AI-style” chat app where the user types message and the “AI assistant” responds with test message.

### 💡Learning

#### ❇️ The `<template>` tag - A core HTML Feature That Simplified JS

The `<template>` tag lets you write reusable HTML once, keep it hidden, and insert copies of it dynamically when needed.

```html
<template id="myTemplate">
  <!-- Hidden content -->
  <div class="card">
    <h3 class="title"></h3>
    <p class="desc"></p>
  </div>
</template>
```

#### ⚙️ How to Use It

```js
// Get the template
const tmpl = document.getElementById("myTemplate");

// Clone its content
const clone = tmpl.content.cloneNode(true);

// Modify content
clone.querySelector(".title").textContent = "Template Example";
clone.querySelector(".desc").textContent =
  "This content comes from a template!";

// Add to the page
document.body.appendChild(clone);
```