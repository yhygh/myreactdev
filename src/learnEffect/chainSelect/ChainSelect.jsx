import { React, useState, useEffect } from "react";
import { fetchData } from "./api.js";

// https://react.dev/learn/lifecycle-of-reactive-effects
// https://codesandbox.io/s/rfsxxm?file=/App.js&utm_medium=sandpack
export default function ChainSelect() {
  // const [planetList, setPlanetList] = useState([]);

  const [planetId, setPlanetId] = useState("");
  const [placeId, setPlaceId] = useState("");

  const planetList = useData("/planets", setPlanetId);
  // const placeUrl = planetId ? `/planets/${planetId}/places` : null;
  const placeUrl = `/planets/${planetId}/places`;
  const placeList = useData(placeUrl, setPlaceId);

  return (
    <>
      <h1>Critical: look at different implementation from react.dev</h1>
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

function useData(url, setDefault) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let ignore = false;
    if (!url) return; // this is unnecessary if using try block below

    try {
      fetchData(url)
        .then((result) => {
          if (!ignore) {
            console.log("Fetched a list of items. url=${url}");
            setItems(result);
            setDefault(result[0].id);
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

  // if (!url) return items;

  return items;
}
