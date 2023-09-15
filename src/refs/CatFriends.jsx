import { React, useRef } from "react";
import { Li } from "./CatFriendsStyled";

// https://react.dev/learn/manipulating-the-dom-with-refs
// https://codesandbox.io/s/qx28zg?file=%2FApp.js&utm_medium=sandpack
export default function CatFriends() {
  // const imagesRef = useRef([]); // using array
  const imagesRef = useRef({}); // using object

  const scrollToId = (id) => {
    // let imageElement = imagesRef.current.find((i) => i.id === id); // using array
    let imageRef = imagesRef.current[id]; // using object

    imageRef.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  return (
    <>
      <div>
        <button onClick={() => scrollToId(0)}>Tom</button>
        <button onClick={() => scrollToId(5)}>Maru</button>
        <button onClick={() => scrollToId(9)}>Jellyorum</button>
      </div>

      <div>
        <ul>
          {catList.map((cat) => (
            <Li
              key={cat.id}
              ref={(node) => {
                if (node) {
                  // imagesRef.current.push({ id: cat.id, imageRef: node }); // using array
                  imagesRef.current[cat.id] = node;
                } else {
                  delete imagesRef.current[cat.id];
                }
              }}
            >
              <img src={cat.imageUrl} alt={"Cat #" + cat.id} />
            </Li>
          ))}
        </ul>
      </div>
    </>
  );
}

const catList = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: "https://placekitten.com/250/200?image=" + i,
  });
}
