import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/Home";
import DefaultLayout from "./layout/Default";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
