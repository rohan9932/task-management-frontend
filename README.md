# Mini Task Manager

A small React app for managing a list of tasks, built as a practice project covering `useState`, `useRef`, `useEffect`, React Router, and the Context API.

## Features

- **Add tasks** — add new tasks via an input field, updating state immutably with the spread operator
- **Auto-focus input** — `useRef` focuses the task input automatically on page load
- **Live task count** — task count is updated directly via a ref (`innerText`)
- **Fetch sample tasks** — on load, fetches 5 sample tasks from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/todos?_limit=5) using `async/await`, with a loading state shown while the request is in progress
- **Toggle completion** — click a task to toggle its completed status (state updated immutably)
- **Routing** — two routes: `/` (task list) and `/about` (static info page), with a navbar using `NavLink` to switch between them
- **Theme toggle** — a `ThemeContext` provides light/dark mode, switchable via a button that updates the background color app-wide

## Tech Stack

- React
- React Router
- Context API (built-in, no external state library)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd <repo-folder-name>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
├── assets/
├── components/
│   ├── Navbar.jsx
│   ├── TaskCard.jsx
│   ├── TaskForm.jsx
│   └── TaskList.jsx
├── Hooks/
│   ├── TaskContextProvider.jsx
│   └── ThemeContextProvider.jsx
├── pages/
│   ├── About.jsx
│   └── Home.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## Notes

- Tasks fetched from the API are used only as sample/seed data and are not persisted to any backend — all task state lives in the React app.
- The theme toggle uses Context API so any component in the tree can read/update the current theme without prop drilling.