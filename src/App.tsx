import { AuthContext } from "./context/auth.context";
import { useReducer } from "react";
import { authReducer, inititalAuthState } from "./context/auth.reducer";
import AppRouter from "./router";

const App = () => {
  const [authState, dispatchAuth] = useReducer(authReducer, inititalAuthState);
  return (
    <AuthContext.Provider value={{ authState, dispatchAuth }}>
      <AppRouter />
    </AuthContext.Provider>
  );
};

export default App;
