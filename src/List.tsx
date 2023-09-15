import React, { FC, useEffect } from "react";

interface ListInterface {
  getItems: (increment: number) => number[];
}

// const List: FC<ListInterface> = ({ getItems }) => {
const List: FC<ListInterface> = ({ getItems }) => {
  const numbers = getItems(5); // increment = 5
  console.log(`numbers = `);
  console.log(numbers);

  // // The following works
  // const x = (
  //   <>
  //     {numbers.map((num: number) => (
  //       <div key={num}>{num}</div>
  //     ))}
  //   </>
  // );

  // console.log(`---x is ---`);
  // console.log(x);

  // return x;

  useEffect(() => {
    console.log("Updating list"); // this is to test that getItems reference doesn't change
  }, [getItems]);

  return (
    <>
      {numbers.map((num: number) => (
        <div key={num}>{num}</div>
      ))}
    </>
  );
};

export default List;
