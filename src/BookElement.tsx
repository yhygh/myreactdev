import React, { FC } from "react";
import { Book } from "./books";
// import "./index.css";
import {
  BookWrapper,
  Title,
  BookDescription,
  CloseButton,
  CloseButtonWrapper,
} from "./BookElementStyled";

interface BookElementInterface {
  idx: number;
  book: Book;
  addFavorite: (id: string, idx: number) => void;
}

const BookElement: FC<BookElementInterface> = ({ idx, book, addFavorite }) => {
  // console.log(`book = `);
  // console.log(book);
  const { title, description } = book;
  // console.log(`title = ${title}`);

  return (
    <BookWrapper>
      <CloseButtonWrapper>
        <CloseButton onClick={() => addFavorite(book.id, idx)}>X</CloseButton>
      </CloseButtonWrapper>
      <Title>{title}</Title>
      <BookDescription>{description}</BookDescription>
    </BookWrapper>
  );
};

export default BookElement;
