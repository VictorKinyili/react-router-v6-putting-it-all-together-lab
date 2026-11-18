# Movie Directory App

A single-page React application built with client-side routing to browse directors and their filmographies. Users can navigate seamlessly across views, inspect individual director profiles and movies via nested URLs, and add new directors or movies with automatic redirection.

## Screenshot

![Movie Directory App](./screenshot.png)

## Features

- **Hierarchical & Nested Routing:** Configured with React Router v6 (`Routes`, `Route`, `Outlet`) to render parent layouts alongside nested director and movie views.
- **Dynamic URL Parameters:** Uses `useParams` to match and display specific director profiles (`/directors/:id`) and movie details (`/directors/:id/movies/:movieId`).
- **Shared Route State:** Passes fetched director data and state updaters down to nested child components using `useOutletContext`.
- **Navigation & Programmatic Redirects:** Uses `NavLink` and `Link` for declarative navigation, `useNavigate` to redirect users after creating a new director or movie, and a catch-all error route for invalid URLs.

## Technologies Used

- React (`useState`, `useEffect`)
- React Router DOM v6 (`BrowserRouter`, `Routes`, `Route`, `Outlet`, `useOutletContext`, `useParams`, `useNavigate`, `NavLink`, `Link`)
- Vite
- JSON Server (REST API)

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation & Local Setup

1. Clone the repository:
   ```bash
   git clone https://github.com<your-movie-directory-repo-name>.git
   ```
2. Navigate to the project directory:
   ```bash
   cd <your-movie-directory-repo-name>
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the JSON server backend:
   ```bash
   npm run server
   ```
5. In a separate terminal, start the React development server:
   ```bash
   npm run dev
   ```

### Running Tests

To run the automated test suite:

```bash
npm run test
```