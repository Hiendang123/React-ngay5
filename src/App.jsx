import { Tabs } from "antd";
import ButtonClick from "./components/lab4/simblebutton";
import Handling from "./components/lab4/handling";
import HandlingMouseEvents from "./components/lab4/HandlingMouseEvents";
import KeyboardEvents from "./components/lab4/KeyboardEvents";
import CounterComponent from "./components/lab4/CounterComponent";

const onChange = (key) => {
  console.log(key);
};

const items = [
  {
    key: "1",
    label: "Simple Button",
    children: <ButtonClick />,
  },
  {
    key: "2",
    label: "Input Handling",
    children: <Handling />,
  },
  {
    key: "3",
    label: "MouseEvent",
    children: <HandlingMouseEvents />,
  },
  {
    key: "4",
    label: "Keyboard Events",
    children: <KeyboardEvents />,
  },
  {
    key: "5",
    label: "Count",
    children: <CounterComponent />,
  },
];

const App = () => (
  <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
);

export default App;
