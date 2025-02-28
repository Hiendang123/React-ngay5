import { Button } from "antd";
import useCounter from "../hooks/useCounter.js";

const CounterComponent = () => {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div className="mx-8 w-96">
      <h1 className="text-xl font-bold">Exercise 5: Counter</h1>
      <p className="mb-8">Sử dụng các button để tăng/giảm giá trị count</p>
      <div className="flex flex-wrap gap-2.5">
        <Button type="primary" onClick={increment}>
          + Tăng
        </Button>
        <p className="text-xl">{count}</p>
        <Button danger onClick={decrement}>
          - Giảm
        </Button>
        <Button black onClick={reset}>
          Reset
        </Button>
      </div>
    </div>
  );
};

export default CounterComponent;
