import React, { useCallback } from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  Outlet,
  RouterProvider,
  Link,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";
import { books } from "./books";
import Favorite from "./favorite";
import Book from "./book";

const Root = () => {
  return (
    <>
      <div className="navWrapper">
        <div className="nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

const Home = () => {
  const [favorites, setFavorites] = React.useState([]);

  const toggleFavorite = useCallback((favorite) => {});

  return (
    <>
      <ul>
        {books.map((book) => (
          <Book
            title={book.title}
            description={book.description}
            key={book.id}
          />
        ))}
      </ul>
      <Favorite />
    </>
  );
};

const About = () => {
  return <h1>About</h1>;
};

const Contact = () => {
  return <h1>Contact</h1>;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
