import { Route, Routes } from "react-router";
import HomePage from "./pages/Home";
import DefaultLayout from "./layout/Default";

function App() {
  return (
    <Routes>
      <Route  path="/" element={<DefaultLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
