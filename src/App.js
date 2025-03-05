import { useEffect, useState } from "react";
import "./styles.css";
import Cards from "./Cards";
import Paging from "./Paging";

export default function App() {
  const [products, setProducts] = useState([]);
  const [pageno, setPageno] = useState(0);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch("https://dummyjson.com/products");
    const Json = await data.json();
    setProducts(Json.products);
  };

  const totalProducts = products.length;
  const product_forpage = 6;
  const totalpages = Math.ceil(totalProducts / product_forpage);
  const start = pageno * product_forpage;
  const end = start + product_forpage;

  return !products.length === 0 ? (
    <h1>No Product Found </h1>
  ) : (
    <div className="App">
      <h1>Pagnization</h1>
      <Paging setPageno={setPageno} pageno={pageno} totalpages={totalpages} />
      <div className="Cards">
        {products.slice(start, end).map((p) => (
          <Cards key={p.id} image={p.thumbnail} title={p.title} />
        ))}
      </div>
    </div>
  );
}
