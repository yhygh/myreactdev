import { React, useRef, useState } from "react";
import { Li, Ul, ImageDiv } from "./IMageCarouselStyled";

// Note: my solution is different from react.dev solution

// https://react.dev/learn/manipulating-the-dom-with-refs
// https://codesandbox.io/s/s8ywvj?file=%2FApp.js&utm_medium=sandpack
export default function ImageCarousel() {
  const imagesRef = useRef({});
  const [nextIdx, setNextIdx] = useState(0);

  const handleNext = () => {
    setNextIdx((nextIdx + 1) % 10);

    console.log(`next image id = ${(nextIdx + 1) % 10}`);
    imagesRef.current[(nextIdx + 1) % 10].scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  };

  return (
    <>
      <button onClick={handleNext}>Next</button>
      <ImageDiv>
        <Ul>
          {catList.map((cat) => (
            <Li
              key={cat.id}
              ref={(node) => {
                if (node) {
                  imagesRef.current[cat.id] = node;
                } else {
                  delete imagesRef.current[cat.id];
                }
              }}
            >
              <img
                className={cat.id === nextIdx ? "active" : ""}
                src={cat.imageUrl}
                alt={"Image id: " + cat.id}
              />
            </Li>
          ))}
        </Ul>
      </ImageDiv>
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
