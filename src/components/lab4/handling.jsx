import { useState, useEffect, useCallback } from "react";
import { Input } from "antd";

const Handling = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm]);

  const searchAPI = useCallback(async (term) => {
    if (!term) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    try {
      console.log(`Searching for: ${term}`);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const mockResults = [
        { id: 1, title: `Kết quả 1 cho "${term}"` },
        { id: 2, title: `Kết quả 2 cho "${term}"` },
        { id: 3, title: `Kết quả 3 cho "${term}"` },
      ];

      setResults(mockResults);
    } catch (error) {
      console.error("Lỗi tìm kiếm:", error);
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  }, []); 

  useEffect(() => {
    searchAPI(debouncedTerm);
  }, [debouncedTerm, searchAPI]);

  return (
    <div className="search-container">
      <h2>Tìm Kiếm</h2>
      <Input
        type="text"
        placeholder="Nhập từ khóa tìm kiếm..."
        value={searchTerm}
        onChange={handleChange}
        className="search-input"
      />

      {isLoading && <div className="loading">Đang tìm kiếm...</div>}

      <div className="results-container">
        {!isLoading && results.length > 0 ? (
          <ul className="results-list">
            {results.map((item) => (
              <li key={item.id} className="result-item">
                {item.title}
              </li>
            ))}
          </ul>
        ) : !isLoading && debouncedTerm ? (
          <div className="no-results">
            Không tìm thấy kết quả cho `{debouncedTerm}`
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Handling;
