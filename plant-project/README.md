# Plant Project

Plant Project is a small React app for practicing components, props, state, routing, and CSS layout.

The app currently has a home page with a searchable plant list, plant cards, a favorites page, and a shared navigation bar.

## Tech

- React
- Vite
- React Router
- CSS

## Run The App

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Check lint rules:

```bash
npm run lint
```

Preview the production build:

```bash
npm run preview
```

## File Guide

- `src/main.jsx` starts the React app and wraps it in `BrowserRouter`.
- `src/App.jsx` sets up the shared navigation and app routes.
- `src/components/NavBar.jsx` contains the links for Home and Favorites.
- `src/components/PlantCard.jsx` displays one plant.
- `src/pages/Home.jsx` stores the plant data, search state, and plant grid.
- `src/pages/Favorites.jsx` displays the empty favorites message.
- `src/css/` contains the app, component, and page styles.
- `src/index.css` contains global theme styles.

## Learning Notes

Good next things to practice:

- Change the placeholder image URLs in `Home.jsx` to real plant image URLs.
- In `PlantCard.jsx`, use `plant.id` instead of `plant.plantId` if you want the card badge to show the plant number.
- Move the plant data into its own file once the list gets bigger.
- Replace the favorite alert with real favorite state.
