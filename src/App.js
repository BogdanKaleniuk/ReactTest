import Arrivals from "./components/arrivals/Arrivals";
import Brands from "./components/brands/Brands";
import Header from "./components/header/Header";
import Promo from "./components/promo/Promo";
import SaleNow from "./components/saleNow/SaleNow";

function App() {
  return (
    <div className="App">
      <Header />
      <Promo />
      <Brands />
      <Arrivals />
      <SaleNow />
    </div>
  );
}

export default App;
