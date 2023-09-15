import React, { useState, useCallback } from "react";
import { books } from "./books";
import BookElement from "./BookElement";
import Favorite from "./favorite";
import List from "./List";
import { HomeLayout, BookRow } from "./MainStyled";

const Home = () => {
  // console.log(`initialFavorites = `);
  // console.log(initialFavorites);

  const [favorites, setFavorites] = useState([]);

  const addFavorite = useCallback(
    (id, idx) => {
      const row = Math.floor(idx / 2);
      const col = (idx % 2) + 1;
      const pos = favorites.indexOf(id);
      if (pos === -1) {
        setFavorites([...favorites, id]);
      }
      console.log(
        `\n------\ninside addFavorites, row=${row} col=${col} after, favorites =`
      );
      console.log(favorites);
    },
    [favorites]
  );

  const removeFavorite = useCallback(
    (id) => {
      const pos = favorites.indexOf(id);
      if (pos !== -1) {
        const reducedFavorites = [...favorites];
        reducedFavorites.splice(pos, 1);
        setFavorites([...reducedFavorites]);
      }
    },
    [favorites]
  );

  const getItems = useCallback(
    (increment) => {
      const lastNumber = favorites.length
        ? parseInt(favorites[favorites.length - 1], 10)
        : 0;
      console.log(`last favorite = ${favorites[favorites.length - 1]}`);
      console.log(`lastNumber = ${lastNumber}`);
      return [
        lastNumber + increment,
        lastNumber + increment + 1,
        lastNumber + increment + 2,
      ];
    },
    [favorites.length]
  );

  const allBookRows = [];

  for (let i = 0; i < books.length; i = i + 2) {
    const first = (
      <BookElement
        key={books[i].id}
        idx={i}
        book={books[i]}
        addFavorite={addFavorite}
      />
    );
    if (i === books.length - 1) {
      allBookRows.push([first]);
    } else {
      const second = (
        <BookElement
          key={books[i + 1].id}
          idx={i + 1}
          book={books[i + 1]}
          addFavorite={addFavorite}
        />
      );
      allBookRows.push([first, second]);
    }
  }

  return (
    <HomeLayout>
      <ul>
        {allBookRows.map((row, i) => (
          <BookRow key={i}>{row}</BookRow>
        ))}
      </ul>
      <Favorite favorites={favorites} removeFavorite={removeFavorite} />
      <List getItems={getItems} />
    </HomeLayout>
  );
};

export default Home;
