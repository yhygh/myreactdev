import React, { useState } from "react";

// https://codesandbox.io/s/dh2qrf?file=/App.js&utm_medium=sandpack
// https://react.dev/learn/managing-state

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <>
      <h3>Almaty, Kazakhstan</h3>
      <h4>Note: use composite (composition) pattern</h4>
      <div>
        <Panel
          title="About"
          isActive={activeIndex === 1}
          handleShow={() => setActiveIndex(1)}
        >
          <div>
            With a population of about 2 million, Almaty is Kazakhstan's largest
            city. From 1929 to 1997, it was its capital city.
          </div>
        </Panel>
      </div>
      <div>
        <Panel
          title="Etymology"
          isActive={activeIndex === 2}
          handleShow={() => setActiveIndex(2)}
        >
          <div>
            The name comes from алма, the Kazakh word for "apple" and is often
            translated as "full of apples". In fact, the region surrounding
            Almaty is thought to be the ancestral home of the apple, and the
            wild Malus sieversii is considered a likely candidate for the
            ancestor of the modern domestic apple.
          </div>
        </Panel>
      </div>
    </>
  );
}

function Panel({ title, isActive, handleShow, children }) {
  return (
    <>
      <h3>{title}</h3>
      {isActive ? children : <button onClick={handleShow}>Show</button>}
    </>
  );
}

// // First version, works but not using composite

// import React, { useState } from "react";

// export default function Accordion() {
//   const [activeAbout, setActiveAbout] = useState(true);

//   const handleShow = () => {
//     setActiveAbout(!activeAbout);
//   };

//   let aboutContent = activeAbout ? (
//     <div>
//       With a population of about 2 million, Almaty is Kazakhstan's largest city.
//       From 1929 to 1997, it was its capital city.
//     </div>
//   ) : (
//     <Panel handleShow={handleShow} />
//   );

//   let etymologyContent = !activeAbout ? (
//     <div>
//       The name comes from алма, the Kazakh word for "apple" and is often
//       translated as "full of apples". In fact, the region surrounding Almaty is
//       thought to be the ancestral home of the apple, and the wild Malus
//       sieversii is considered a likely candidate for the ancestor of the modern
//       domestic apple.
//     </div>
//   ) : (
//     <Panel handleShow={handleShow} />
//   );

//   return (
//     <>
//       <h3>Almaty, Kazakhstan</h3>
//       <div>
//         <h4>About</h4>
//         {aboutContent}
//       </div>
//       <div>
//         <h4>Etymology</h4>
//         {etymologyContent}
//       </div>
//     </>
//   );
// }

// function Panel({ handleShow }) {
//   return (
//     <>
//       <button onClick={handleShow}>Show</button>
//     </>
//   );
// }
