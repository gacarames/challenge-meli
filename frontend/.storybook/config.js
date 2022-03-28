import React, { useState } from "react";
import { configure, addDecorator } from "@storybook/react";

function loadStories() {
  require("../src/stories/index.js");
}

function Stage({ children, ...props }) {
  const [state, setState] = useState({});
  return <div {...props}>{children(state, setState)}</div>;
}

function State({ state, ...props }) {
  return (
    <div {...props}>
      Parent state: <pre>{JSON.stringify(state)}</pre>
    </div>
  );
}

addDecorator((story) => (
  <Stage>
    {(state, setState) => (
      <div style={{ display: "flex", flexFlow: "column" }}>
        {story(state, setState)}
        <State state={state} />
      </div>
    )}
  </Stage>
));

configure(loadStories, module);
