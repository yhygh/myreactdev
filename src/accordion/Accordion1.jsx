import { useState } from "react";
import { PanelBox } from "./AccordionStyled";

function Accordion1() {
  const [showIndex, setShowIndex] = useState(0);

  return (
    <>
      <h3>Almaty, Kazakhstan</h3>
      <Part
        title="About"
        toShow={showIndex === 0}
        onShow={() => setShowIndex(0)}
      >
        <p>
          With a population of about 2 million, Almaty is Kazakhstan's largest
          city. From 1929 to 1997, it was its capital city.
        </p>
      </Part>
      <Part
        title="Etymology"
        toShow={showIndex === 1}
        onShow={() => setShowIndex(1)}
      >
        <p>
          The name comes from алма, the Kazakh word for "apple" and is often
          translated as "full of apples". In fact, the region surrounding Almaty
          is thought to be the ancestral home of the apple, and the wild Malus
          sieversii is considered a likely candidate for the ancestor of the
          modern domestic apple.
        </p>
      </Part>
    </>
  );
}

function Part({ title, toShow, onShow, children }) {
  return (
    <PanelBox>
      <p>{title}</p>
      {toShow ? children : <button onClick={onShow}>Show</button>}
    </PanelBox>
  );
}

export default Accordion1;
