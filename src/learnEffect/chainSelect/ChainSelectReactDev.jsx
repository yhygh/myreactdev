import { React, useState, useEffect } from "react";
import { fetchData } from "./api.js";

// https://react.dev/learn/lifecycle-of-reactive-effects
// https://codesandbox.io/s/rfsxxm?file=/App.js&utm_medium=sandpack
export default function ChainSelectReactDev() {
  // const planetsData = useData("/planets");
  // const planetList = planetsData.items;
  // const planetId = planetsData.planetId;
  // const setPlanetId = planetsData.setSelectedId;

  const {
    items: planetList,
    selectedId: planetId,
    setSelectedId: setPlanetId,
  } = useData(`/planets`);

  const {
    items: placeList,
    selectedId: placeId,
    setSelectedId: setPlaceId,
  } = useData(`/planets/${planetId}/places`);

  return (
    <>
      <h1>Critical: implementation from react.dev</h1>
      <label>
        Pick a planet:{" "}
        <select
          value={planetId}
          onChange={(e) => {
            setPlanetId(e.target.value);
          }}
        >
          {planetList.map((planet) => (
            <option key={planet.id} value={planet.id}>
              {planet.name}
            </option>
          ))}
        </select>
      </label>
      <div>
        Pick a place:{" "}
        <select
          value={placeId}
          onChange={(e) => {
            setPlaceId(e.target.value);
          }}
        >
          {placeList.map((place) => (
            <option key={place.id} value={place.id}>
              {place.name}
            </option>
          ))}
        </select>
      </div>
      <hr />
      <p>
        You are going to: {placeId || "???"} on {planetId || "???"}{" "}
      </p>
    </>
  );
}

function useData(url) {
  const [items, setItems] = useState([]);
  const [selectedId, setSelectedId] = useState("");

  useEffect(() => {
    let ignore = false;
    if (!url) return; // this is unnecessary if using try block below

    try {
      fetchData(url)
        .then((result) => {
          if (!ignore) {
            console.log("Fetched a list of items. url=${url}");
            setItems(result);
            setSelectedId(result[0].id);
          }
        })
        .catch((error) => {
          console.log(`this one cannot catch error thrown before the promise!`);
          console.log(error);
        });
    } catch (error) {
      console.log(`error outside of the fetchData promise`);
    }

    return () => {
      ignore = true;
    };
  }, [url]);

  return { items, selectedId, setSelectedId };
}
