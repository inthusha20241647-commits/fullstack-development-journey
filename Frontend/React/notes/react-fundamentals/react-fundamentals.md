# React Fundamentals

> These notes cover how apps talk to servers, how a React project is organised, and the core React hooks. Written in simple words for beginners.

---

## 1. HTTP Methods

HTTP methods are the kinds of requests an app sends to a server (the backend).

| Method | What it does | Simple example |
| --- | --- | --- |
| **GET** | Receive data from the server | Show all users |
| **POST** | Send new data to create something | Submit a sign-up form |
| **PATCH** | Update only one part of an existing record | Change just a phone number |
| **PUT** | Replace the whole record with a new version | Update name, phone and address together |
| **DELETE** | Remove the whole record from the server | Delete a user account |

**PATCH vs PUT:** use PATCH to change one small thing. Use PUT when you are replacing everything, and send the full record, including the parts that stay the same.

---

## 2. Project Folder Structure

```
project-root/
├── .env
├── .gitignore
├── prompts/
│   ├── README.md
│   ├── project-context.md
│   ├── component.prompt.md
│   ├── api-service.prompt.md
│   └── debug.prompt.md
├── index.html
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── pages/
    ├── components/
    ├── layout/
    ├── styles/
    ├── utils/
    ├── config/
    ├── constants/
    └── services/
```

### What each folder does

- **pages/** holds complete screens, like a Login page or a Dashboard.
- **components/** holds small reusable pieces, like buttons and tables. Build once, use on many pages.
- **layout/** holds the frame around pages: header, sidebar and main content area.
- **styles/** holds the CSS files that control colours, spacing and fonts.
- **utils/** holds small helper functions, like formatting a date or a price.
- **config/** reads the settings from `.env` and checks that nothing is missing.
- **constants/** holds fixed values that never change, like endpoint names (`/users`, `/login`).
- **services/** handles all communication with the backend using GET, POST, PUT, PATCH and DELETE.
- **prompts/** is an optional folder of instructions for AI tools. The README explains the folder, and separate files describe the project, components, API services and debugging.

---

## 3. Important Files

| File | Purpose |
| --- | --- |
| **index.html** | The one HTML page the browser loads. It has an empty `root` div that React fills with the app. |
| **main.jsx** | The entry point. It renders `App.jsx` into the page. |
| **App.jsx** | The main component, the top of the app. Other components are imported into it. |
| **.env** | Private settings like API keys and server addresses. Lives in the main folder, outside `src`. |
| **.gitignore** | Lists files Git should skip when uploading to GitHub. |

**How it all connects:** Components are created in the `components` folder, imported into `App.jsx`, which is rendered by `main.jsx`, and displayed inside `index.html` in the browser.

### Keeping secrets safe

The `.env` file contains secret keys and server addresses. If it is pushed to GitHub, anyone can see it. So `.env` is always listed in `.gitignore`. The code asks for values by name and the project reads them from `.env` automatically. You do not import it.

---

## 4. Babel

Babel is a library that works like a translator. It converts modern JavaScript and React code into code that every browser understands.

- Installed once with npm as a development tool.
- Works quietly in the background while the project builds.
- You never import it in your code.

```
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react
```

---

## 5. React Hooks

| Hook | What it does | Example |
| --- | --- | --- |
| **useState** | Stores a value and updates the screen when it changes | A counter number |
| **useEffect** | Runs code after the screen has loaded | Fetching data from an API on page load |
| **useCallback** | Remembers a function so it is not recreated on every update | A button click handler |
| **useMemo** | Remembers the result of a heavy calculation and only recalculates when inputs change | Total price of 10,000 products |

**Easy way to remember:** useCallback remembers a *function*. useMemo remembers a *result*.

---

## Summary

- Services talk to the backend using HTTP methods.
- Pages, components and layout build what the user sees.
- Config, constants and `.env` keep settings organised and secrets private.
- Hooks make the app interactive and efficient.

*React fundamentals: a beginner-friendly reference.*
