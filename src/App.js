import "./App.css";
import { InputForm } from "./components/inputForm";
import { Product } from "./components/product";

function App() {
  return (
    <div>
      <InputForm />
      <Product
        product={{
          id: "1",
          productName: "comprar algo",
          isBought: false,
        }}
      />
    </div>

  );
}

export default App;
