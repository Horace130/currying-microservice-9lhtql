import React, { useState, useMemo } from "react";

const Child = ({ items }) => {
  console.log("Child rendering...");
  let renderedItems = [];
  for (let i = 0; i < items.length; i++) {
    renderedItems.push(<p key={i}>{items[i]}</p>);
  }
  return <div>{renderedItems}</div>;
};

const App = () => {
  const [count, setCount] = useState(0);

  const items = useMemo(() => [1, 2, 3], []);

  return (
    <div>
      <h1>Optimize Child Rendering with Stable Props</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <p>Count: {count}</p>
      <Child items={items} />
    </div>
  );
};

export default App;
