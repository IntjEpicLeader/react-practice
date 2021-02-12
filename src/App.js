import HomePage from "./pages/homepage/homepage.component";
import "./styles.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

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
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
