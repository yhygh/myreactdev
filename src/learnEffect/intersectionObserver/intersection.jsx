import { useEffect, useRef } from "react";

export default function MyIntersectionObserver() {
  return (
    <>
      <h4>
        use IntersectionObserver, scroll down to see color change, useEffect
      </h4>
      <LongSection />
      <Box />
      <LongSection />
      <Box />
      <LongSection />
    </>
  );
}

function Box() {
  const ref = useRef();

  useEffect(() => {
    const div = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          document.body.style.backgroundColor = "black";
          document.body.style.color = "white";
        } else {
          document.body.style.backgroundColor = "white";
          document.body.style.color = "black";
        }
      },
      {
        threshold: 1.0,
      }
    );
    observer.observe(div);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        height: 100,
        width: 100,
        border: "2px solid black",
        backgroundColor: "blue",
      }}
    />
  );
}

function LongSection() {
  const items = [];
  for (let i = 0; i < 50; i++) {
    items.push(<li key={i}>Item {i}: keep scrolling</li>);
  }

  return (
    <>
      <ul>{items}</ul>
    </>
  );
}
