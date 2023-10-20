import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Layout from "../src/Components/Layout/Layout";
import { RestrictedRoute } from "../src/Components/RestrictedRoute";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRefreshing, selectToken } from "../src/redux/auth/selectors";
import { refreshUser } from "../src/redux/auth/operations";
import Home from "../src/Pages/Home/Home";
import Register from "../src/Pages/Registration/Registration";
import Login from "../src/Pages/LogIn/LogIn";

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const token = useSelector(selectToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      dispatch(refreshUser());
    } else {
      navigate("/login");
    }
  }, [dispatch, token, navigate]);

  return (
    <>
      {isRefreshing ? (
        <p>Fetching user data...</p>
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="login"
              element={<RestrictedRoute component={Login} redirectTo="/" />}
            />
            <Route
              path="register"
              element={<RestrictedRoute component={Register} redirectTo="/" />}
            />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      )}
    </>
  );
}

export default App;
