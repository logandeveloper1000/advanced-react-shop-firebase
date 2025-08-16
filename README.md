# Advanced React Shop

A simple e-commerce web application built with **React**, **TypeScript**, **Redux Toolkit**, and **React Query** that fetches product data from the [FakeStore API](https://fakestoreapi.com/). Users can browse products, filter by category, view product details, and manage a shopping cart.

## Features

- **Product Listing** – Displays a grid of products with image, title, price, category, rating, and description.
- **Category Filter** – Dynamically fetches categories from the API and filters products accordingly.
- **Shopping Cart** – Add, remove, and adjust quantities of items with persistent cart state using Redux Toolkit.
- **Responsive Design** – Works on desktop and mobile screens.
- **Image Fallback Handling** – Automatically switches to a reliable thumbnail format if an image fails to load.
- **State Management** – Global state managed with Redux Toolkit; server state managed with React Query.
- **Session Persistence** – Cart is persisted using `sessionStorage`.

## Tech Stack

- **React** – UI framework
- **TypeScript** – Type safety
- **Redux Toolkit** – Global state management
- **React Query** – Data fetching and caching
- **Axios** – HTTP client
- **React Router DOM** – Client-side routing
- **Vite** – Fast build tool

## Installation

1. Clone the repository:

```bash
git clone https://github.com/logandeveloper1000/advanced-react-shop
cd advanced-react-shop
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open the app in your browser:

```
http://localhost:5173/
```

## Project Structure

```
src/
  api/                # API service functions
  app/                # Redux store setup
  components/         # Reusable UI components
  features/           # Redux slices (e.g., cart)
  hooks/              # Custom hooks for data fetching
  pages/              # Page-level components
  utils/              # Utility functions
  index.css           # Global styles
  main.tsx            # Entry point
  App.tsx             # Routes
```

## API Endpoints

Data is fetched from [https://fakestoreapi.com](https://fakestoreapi.com).

- `GET /products` – Fetch all products
- `GET /products/categories` – Fetch list of categories
- `GET /products/category/:category` – Fetch products in a specific category

## Known Issues

- Some product images from the category endpoint may fail to load due to CORS/hotlink restrictions. This is mitigated by converting to thumbnail URLs.
- Minimal error handling for API failures; could be improved with retry/backoff logic.
- UI could be polished with more consistent spacing and loading skeletons.

## Future Improvements

- Add product detail pages
- Add search functionality
- Implement user authentication
- Improve error handling and loading states
- Add tests

## License

This project is licensed under the MIT License.
