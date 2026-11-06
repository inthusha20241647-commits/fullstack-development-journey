# 🌱 JavaScript for Beginners: DOM, Events, Arrays & More

Static pages: ❌ Boring.
Pages that react to me: ✅ Now we're talking! 🚀

This is my JavaScript learning log. I'm building it one concept, one bug and one "aha!" moment at a time.

**Currently levelling up on:** DOM · Events · Arrays · Objects · Functions · `map()` · `filter()` · `find()`

Follow along, or learn with me. 💚

---

## 📖 Contents

1. [Variables: `let` and `const`](#1-variables-let-and-const)
2. [Data types](#2-data-types)
3. [Arrays and objects](#3-arrays-and-objects)
4. [Functions](#4-functions)
5. [DOM manipulation](#5-dom-manipulation)
6. [Events](#6-events)
7. [`map()`: transform every item](#7-map-transform-every-item)
8. [`filter()`: keep matching items](#8-filter-keep-matching-items)
9. [`find()`: get one item](#9-find-get-one-item)
10. [`===` vs `==`](#10--vs-)
11. [Increment: `a++` vs `++a`](#11-increment-a-vs-a)
12. [Putting it all together](#12-putting-it-all-together-mini-plant-store)
13. [Practice ideas](#13-practice-ideas)
14. [Quick revision table](#14-quick-revision-table)

---

## 1. Variables: `let` and `const`

A variable is a **labelled box** that stores a value.

- `const`: the value should **not** change.
- `let`: the value **can** change.

```js
const shopName = "Greenden";   // won't change
let cartCount = 0;             // will change

cartCount = cartCount + 1;     // OK
shopName = "Other";            // ❌ Error: can't reassign a const
```

**Tip:** Use `const` by default. Use `let` only when you know the value will change.

---

## 2. Data types

| Type | Meaning | Example |
|------|---------|---------|
| String | Text | `"Rose Plant"` |
| Number | Numbers | `499` |
| Boolean | True or false | `true` |
| Array | A list | `["Rose", "Aloe"]` |
| Object | Details about one thing | `{ name: "Rose" }` |

```js
console.log(typeof "Rose");   // "string"
console.log(typeof 499);      // "number"
console.log(typeof true);     // "boolean"
```

---

## 3. Arrays and objects

- **Array** = a list of items.
- **Object** = one item, described with `key: value` pairs.

Together, an **array of objects** is how most websites store data.

```js
const products = [
  { id: 1, name: "Rose Plant", category: "Flower", price: 499, inStock: true },
  { id: 2, name: "Peace Lily", category: "Indoor", price: 349, inStock: true },
  { id: 3, name: "Aloe Vera",  category: "Indoor", price: 199, inStock: false }
];

console.log(products[0]);        // the first object
console.log(products[0].name);   // "Rose Plant"
console.log(products.length);    // 3
```

---

## 4. Functions

A function is **reusable work**. Think of a machine: **input → work → output**.

```js
function createProductCard(product) {   // product = parameter (input)
  return `
    <h3>${product.name}</h3>
    <p>₹${product.price}</p>
  `;                                    // return = output
}

console.log(createProductCard(products[0]));
```

- **Parameter:** the input a function receives.
- **`return`:** sends the result back to whoever called the function.

---

## 5. DOM manipulation

The **DOM** is the browser's live copy of your HTML. With JavaScript you can **find** an element and **change** it.

```html
<span id="brandName">Greenden</span>

<script>
  const brandName = document.querySelector("#brandName");   // FIND
  brandName.textContent = "Greenden Smart Store";           // CHANGE TEXT
</script>
```

| Code | Memory trick |
|------|--------------|
| `querySelector` | FIND an element |
| `textContent` | CHANGE the text |
| `const` | STORE it in a variable |

**One-line answer:** DOM manipulation means using JavaScript to read or change HTML elements on the page.

---

## 6. Events

An **event** is something the user does (click, type, submit). An **event listener** waits for it and then runs your code.

```html
<button id="menuButton">Menu</button>
<nav id="mobileMenu" class="hidden">Links here</nav>

<script>
  const menuButton = document.querySelector("#menuButton");
  const mobileMenu = document.querySelector("#mobileMenu");

  menuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");   // add or remove the class
  });
</script>
```

**Flow:** Click → Listener hears it → `toggle()` adds or removes a class → the menu opens or closes.

**Try it:** change `"click"` to `"dblclick"`. Now it needs a double click.

**Other events:** `"input"`, `"change"`, `"submit"`, `"keyup"`

---

## 7. `map()`: transform every item

`map()` goes through every item, changes each one, and gives you a **new array**. It's perfect for turning data into HTML cards.

```js
const numbers = [1, 2, 3];
const doubled = numbers.map(function (n) {
  return n * 2;
});
console.log(doubled);   // [2, 4, 6]
```

Turning products into cards:

```js
const cards = products.map(createProductCard);   // array of HTML strings
productGrid.innerHTML = cards.join("");          // join into one string
```

- `map()` → returns a **new array**.
- `join("")` → glues the array into **one string**.
- `forEach()` just loops and returns nothing useful. `map()` gives you a new array back.

---

## 8. `filter()`: keep matching items

`filter()` keeps only the items that pass a test and returns a **new array**. It's how search works.

```js
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(function (n) {
  return n % 2 === 0;
});
console.log(evens);   // [2, 4, 6]
```

Searching products by name:

```js
const searchText = "rose";

const matchingProducts = products.filter(function (product) {
  return product.name.toLowerCase().includes(searchText);
});

console.log(matchingProducts);   // [ { name: "Rose Plant", ... } ]
```

- `toLowerCase()`: makes search **case-insensitive** (Rose = rose = ROSE).
- `includes()`: checks if the text **contains** the search word → `true` / `false`.

**Category filter:**

```js
const selectedCategory = "Flower";

const result = products.filter(function (product) {
  return selectedCategory === "All" || product.category === selectedCategory;
});
```

---

## 9. `find()`: get one item

`find()` returns the **first** item that matches, not an array. Use it when you know the ID.

```js
const productId = 2;

const product = products.find(function (item) {
  return item.id === productId;
});

console.log(product);   // { id: 2, name: "Peace Lily", ... }
```

| Method | Returns |
|--------|---------|
| `filter()` | **Array** of all matches |
| `find()` | **One item** (the first match) |

**Guard clause:** stop early if something is wrong.

```js
let cartCount = 0;

function addToCart(productId) {
  const product = products.find(item => item.id === productId);

  if (!product || !product.inStock) return;   // stop if missing or out of stock

  cartCount += 1;
  console.log("Cart:", cartCount);
}

addToCart(1);   // Cart: 1
addToCart(3);   // nothing happens (Aloe Vera is out of stock)
```

---

## 10. `===` vs `==`

- `===` (strict): checks **value and type**.
- `==` (loose): converts the type first, which can surprise you.
- `=` is **assignment**, not comparison.

```js
console.log(5 === "5");   // false (number vs string)
console.log(5 == "5");    // true  (converted, confusing!)

let x = 10;               // = gives x the value 10
```

**Rule:** always prefer `===`.

---

## 11. Increment: `a++` vs `++a`

```js
let a = 5;
let b = a++;   // use first, then increase
console.log(a, b);   // 6 5

let c = 5;
let d = ++c;   // increase first, then use
console.log(c, d);   // 6 6
```

**Memory trick:** `a++` → use → increase. `++a` → increase → use.

---

## 12. Putting it all together: mini plant store

Save this as `index.html` and open it in your browser.

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Mini Plant Store</title>
</head>
<body>
  <h1 id="brandName">Greenden</h1>
  <p>Cart: <span id="cartCount">0</span></p>

  <input id="searchInput" placeholder="Search plants..." />
  <div id="productGrid"></div>

  <script>
    const products = [
      { id: 1, name: "Rose Plant", price: 499, inStock: true },
      { id: 2, name: "Peace Lily", price: 349, inStock: true },
      { id: 3, name: "Aloe Vera",  price: 199, inStock: false }
    ];

    let cartCount = 0;

    const productGrid = document.querySelector("#productGrid");
    const searchInput = document.querySelector("#searchInput");
    const cartCountEl = document.querySelector("#cartCount");

    // FUNCTION: one product -> one card
    function createProductCard(product) {
      return `
        <div>
          <h3>${product.name}</h3>
          <p>₹${product.price}</p>
          <p>${product.inStock ? "In Stock" : "Out of Stock"}</p>
          <button data-id="${product.id}" ${product.inStock ? "" : "disabled"}>
            ${product.inStock ? "Add to Cart" : "Unavailable"}
          </button>
        </div>
      `;
    }

    // RENDER with map()
    function render(list) {
      productGrid.innerHTML = list.map(createProductCard).join("");
    }

    // SEARCH with filter()
    searchInput.addEventListener("input", function () {
      const text = searchInput.value.toLowerCase();
      const matches = products.filter(p => p.name.toLowerCase().includes(text));
      render(matches);
    });

    // SELECT with find() + UPDATE UI with textContent
    productGrid.addEventListener("click", function (event) {
      const id = Number(event.target.dataset.id);
      const product = products.find(p => p.id === id);

      if (!product || !product.inStock) return;

      cartCount += 1;
      cartCountEl.textContent = cartCount;
    });

    render(products);
  </script>
</body>
</html>
```

### The reusable model

```
DATA  →  RENDER  →  SEARCH  →  SELECT  →  UPDATE UI
Array    map()      filter()   find()     events + textContent
+ Objects
```

The same pattern works for a plant store, a travel site (destinations), a job portal (jobs) or a dashboard (loads).

---

## 13. Practice ideas

Change the project a little instead of copying a brand new one.

- [ ] Add one new plant object
- [ ] Mark a different product as out of stock
- [ ] Add a new category and filter by it
- [ ] Change the shop name using `textContent`
- [ ] Make the cart increase by 2, then change it back to 1
- [ ] Add a "no results found" message
- [ ] Explain the whole flow out loud in 30 seconds

---

## 14. Quick revision table

| Concept | One-line answer |
|---------|-----------------|
| DOM manipulation | Using JavaScript to read or change HTML elements |
| `querySelector()` | Selects the first matching element |
| `textContent` | Reads or changes an element's text |
| `addEventListener()` | Runs code when an event happens |
| Array | Stores multiple items |
| Object | Stores related data as key–value pairs |
| `let` vs `const` | `let` can be reassigned, `const` cannot |
| Function | Reusable block of code |
| `return` | Sends the result back |
| `map()` | Transforms every item, returns a new array |
| `filter()` | Returns a new array of matching items |
| `find()` | Returns the first matching item |
| `===` | Compares value and type |

---


