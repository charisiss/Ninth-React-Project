import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";

function App() {
  const isAuth = useSelector((state) => state.auth.isLoggedIn);

  return (
    <Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <Counter />}
    </Fragment>
  );
}

export default App;
