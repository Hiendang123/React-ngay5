import { useState } from "react";

const KeyboardEvents = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    alert(`Giá trị hiện tại: ${inputValue}`);
  };

  return (
    <div className="p-6 max-w-2xl">
      <h1 className="text-2xl font-bold mb-4">
        Exercise 2: Managing User Input with a State Hook
      </h1>

      <input
        type="text"
        className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Nhập giá trị..."
        value={inputValue}
        onChange={handleInputChange}
      />

      <button
        onClick={handleButtonClick}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Hiển thị giá trị
      </button>
    </div>
  );
};

export default KeyboardEvents;
