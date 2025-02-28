import { useState, useMemo } from "react";

function HandlingMouseEvents() {
  const [isHovered, setIsHovered] = useState(false);

  const boxClasses = useMemo(() => {
    console.log("Calculating classes...");
    return `w-40 h-40 flex justify-center items-center text-white font-bold rounded-lg shadow-lg transition-all duration-500 ${
      isHovered ? "bg-red-500" : "bg-blue-500"
    }`;
  }, [isHovered]);

  return (
    <div className="mx-8 w-128">
      <h1 className="text-xl font-bold">
        Exercise 3: Implementing Memoization with UseMemo
      </h1>
      <p className="mb-8">Di chuột vào box bên dưới để thay đổi màu nền</p>

      <div
        className={boxClasses}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? "Hover Active!" : "Hover me!"}
      </div>
    </div>
  );
}

export default HandlingMouseEvents;


