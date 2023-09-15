import React, { FC } from "react";
import "./index.css";
import { FavoriteWrapper, FavoriteItem, FavoriteRemove } from "./MainStyled";

const Favorite = ({ favorites, removeFavorite }) => {
  console.log(`\n\nfavorites = `);
  console.log(favorites);
  return (
    <FavoriteWrapper>
      <>Favorites: </>
      {favorites.map((id) => {
        return (
          <FavoriteItem key={id}>
            item id: {id}
            <FavoriteRemove onClick={() => removeFavorite(id)}>
              {` X `}
            </FavoriteRemove>
          </FavoriteItem>
        );
      })}
    </FavoriteWrapper>
  );
};

export default Favorite;
