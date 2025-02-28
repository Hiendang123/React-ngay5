import { Button } from "antd";
import swal from "sweetalert";

export default function buttonClick() {
  return (
    <div>
      <h1 className="text-xl font-bold">Exercise 1: Simple Button Click</h1>
      <p className="mb-8">Click vào button bên dưới để hiển thị thông báo</p>

      <Button type="primary" onClick={handleClick}>
        Click me!
      </Button>
    </div>
  );
}

function handleClick() {
  swal("Good job!", "You clicked the button!", "success");
}
