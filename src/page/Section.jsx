import { LevelContext } from "./LevelContext";
import Heading from "./Heading";
import { useContext } from "react";

export default function Section({ children }) {
  const level = useContext(LevelContext);
  return (
    <section className="section">
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}
