import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Component from "./components/Component";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:4000/")
      .then((response) => response.json())
      .then((body) => {
        setData(body);
      });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Component data={data} />} />
      </Routes>
    </Router>
  );
}

export default App;
