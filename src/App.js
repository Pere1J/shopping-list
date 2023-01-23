import "./App.css";
import { Product } from "./components/product";

function App() {
  return (
    <Product
      product={{
        id: "1",
        productName: "comprar algo",
        isBought: false,
      }}
    />
  );
}

export default App;
