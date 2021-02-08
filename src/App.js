import HomePage from "./pages/homepage/homepage.component";
import "./styles.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";

const HatsPage = ({ history }) => {
  return (
    <div>
      <h1>Hat Page</h1>
    </div>
  );
};
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
