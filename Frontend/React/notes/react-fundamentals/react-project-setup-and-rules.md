# React Project Setup and Frontend Rules

> A beginner-friendly guide to the reusable React base setup: the tools, the folder structure, the workflow, and the coding rules to follow in every project.

## What is a base setup?

A base setup is a ready-made starting template for React projects. You prepare the tools, folders and settings once, then reuse them for an e-commerce site, a portfolio or a dashboard, instead of building the basics every time. Think of it as a house blueprint you reuse for every new house.

---

## 1. Technologies used

| Tool | What it does in simple words |
| --- | --- |
| **React** | Builds the screen using reusable components. |
| **Vite** | Creates and runs the React project quickly. |
| **TypeScript** | JavaScript with type checking, so it catches mistakes early. |
| **Material UI (MUI)** | Gives ready-made UI pieces like buttons and cards. |
| **Redux Toolkit** | Manages shared data that many parts of the app need. |
| **React Router** | Handles navigation between pages. |
| **Yup** | Validates form input, for example checking an email is valid. |
| **React Hook Form** | Manages forms: values, errors and submitting. |
| **CSS Modules** | Keeps each component's styles separate so they don't clash. |
| **ESLint** | Finds coding problems and mistakes. |
| **Prettier** | Formats code so it is neat and readable. |
| **Vitest** | Tests that the application works correctly. |

---

## 2. Steps to create the base setup

1. **Install Node.js.** It runs the development tools, and npm (which comes with it) installs packages. Check both with `node -v` and `npm -v`.
2. **Create a React + TypeScript project** using Vite: `npm create vite@latest react-base-setup`
3. **Open the project and install dependencies**, which are listed in `package.json`: `cd react-base-setup`, then `npm install`
4. **Install the required libraries** for UI and routing, state management, form handling and validation, and formatting and testing.
5. **Start the development server** with `npm run dev`. Vite prints a local address in the terminal. Open that address in your browser.

---

## 3. Folder structure

```
public/
src/
├── app/          main application setup and the Redux store
├── components/   reusable UI pieces such as buttons and forms
├── features/     feature areas such as auth and dashboard
├── layouts/      page frames: header, sidebar, content
├── config/       settings and environment values
└── styles/       shared styles
package.json
tsconfig.json
vite.config.ts
README.md
```

---

## 4. Main architectural rules

1. **Reusability:** build common components once and use them across the app.
2. **Separation of concerns:** keep UI, API operations, validation and business logic apart.
3. **Centralized configuration:** store settings, colours, constants and routes in central files.
4. **State management:** use Redux Toolkit for shared app data, and `useState` for small local UI changes.
5. **Responsive design:** make screens adapt to mobiles, tablets and laptops.
6. **Maintainability:** write readable TypeScript, use meaningful names, avoid duplication and keep code optimised.

---

## 5. Workflow: how data moves through the app

1. **React component** collects the user's input.
2. **Redux dispatch / thunk** starts the operation.
3. **Service / mock API** processes the request.
4. **Redux slice** updates the app state.
5. **Selector** reads the state, and the UI shows the updated result.

---

## 6. Rules to follow

| Area | Rule |
| --- | --- |
| **TypeScript** | Enable strict mode for type safety. |
| **Reusability** | Avoid duplicate code. |
| **Separation** | Keep UI, logic and CSS organised. |
| **API** | Handle API calls through services, not components. |
| **Redux** | Use `createAsyncThunk` for suitable async operations. |
| **Validation** | Keep Yup schemas separate. |
| **Theme** | Use centralized colours and styles. |
| **Performance** | Use `React.lazy()` for page-level loading where useful. |
| **Mock data** | Use a mock service until the backend is integrated. |
| **Security** | Never store credentials in browser storage. |
| **Authorization** | Enforce real authentication and role-based access control (RBAC) on the backend. |
| **Code quality** | Use ESLint, Prettier and testing. |
| **KISS principle** | Keep code simple, clean and maintainable. |

---

## 7. Frontend development rules

These are the day-to-day rules for writing code in a team.

**Structure and style**

1. Keep CSS in separate files.
2. Keep each file under 500 lines, with optimised code.
3. Format code with Prettier, because readable code matters.
4. Follow the three mantras: **responsive, code optimised, dynamic**.
5. Define interfaces using TypeScript types.

**Redux and API calls**

6. Do not use axios inside the main component. Put API calls in the reducer or slice and import them.
7. Use `useDispatch` and `useSelector` (or an `appSelector`) for Redux.
8. Call only one API at a time.
9. Routes are only for navigation. No API calls or logic inside routes.
10. Reduce `useState` and use a form reducer instead, with dispatch and selector.

**Performance and cleanliness**

11. Use `useMemo` or `React.memo` for faster performance.
12. Reduce `setTimeout` usage to keep code reliable.
13. Do not use beta versions of plugins.

**Storage**

14. Do not use `localStorage` or `sessionStorage`. Save and load data through the API instead.

> **Why no browser storage?** Anyone can open the browser tools and read that data. The real data should live on the server, so every device sees the same thing.

---

## Quick summary

- The **base setup** is a reusable starting template for React projects.
- **Tools** build the screen, manage data, validate forms and keep code clean.
- The **workflow** is component, dispatch, service, slice, selector, UI.
- **Rules** keep the code simple, secure, reusable and easy to maintain.
