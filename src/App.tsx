import { useEffect, useState } from "react";
import data from "./assets/data.json";
import "./App.css";
import Home from "./pages/Home/Home";
interface element {
  name: string;
  atomic_number: number;
  discovered_by: string;
  discovred_date: string;
  properties: string;
  symbol: string;
  category: string;
}

function App() {
  const [elements, setElements] = useState<element[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const elementsData = data.elements;
        // @ts-ignore
        setElements(elementsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return <>{elements.length > 0 && <Home elements={elements} />}</>;
}

export default App;
