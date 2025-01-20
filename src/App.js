import React, { useState, useMemo } from "react";

const Child = ({ items }) => {
  console.log("Child rendering...");
  return (
    <div>
      {items.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
};

const App = () => {
  const [count, setCount] = useState(0);

  // Memoize items to ensure stability
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
