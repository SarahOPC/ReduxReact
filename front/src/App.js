import { Provider } from "react-redux";
import MainRouter from "./pages/Router";
import { store } from "./reduxStore";

function App() {
  return (
    <Provider store={store}>
      <MainRouter />
    </Provider>
  );
}

export default App;
