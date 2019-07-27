import React, { Component, useState, useMemo } from "react";

function Counter(props) {
  return <h1>{props.count}</h1>;
}

function App() {
  const [count, setCount] = useState(0);

  const double = useMemo(() => {
    return count * 2;
  }, [count === 3]);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click({count}), double: ({double})
      </button>
      <Counter count={count} />
    </div>
  );
}

export default App;
