import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { HomePage } from "../pages/HomePage";
import { FilmPage } from "../pages/FilmPage";
import { OrderPage } from "../pages/OrderPage";
import { Header } from "./Header";

import { store } from "../store";

export function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/app/:title" element={<FilmPage />} />
            <Route path="/order" element={<OrderPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}
