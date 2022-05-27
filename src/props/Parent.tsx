import { Fragment } from "react";
import { Child, ChildAsFC } from "./Child";

export const Parent = () => {
  return (
    <Fragment>
      <Child color="red" onClick={() => console.log("clicked!")} />
      <ChildAsFC color="red" onClick={() => console.log("clicked!")}>
        <p>Hey I am a child</p>
      </ChildAsFC>
    </Fragment>
  );
};
