import { useState } from "react";

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount((count) => Math.min(count + 1, 10));
  };

  const decrement = () => {
    setCount((count) => Math.max(count - 1, -10));
  };

  const reset = () => {
    setCount(0);
  };

  return { count, increment, decrement, reset };
}

export default useCounter;
