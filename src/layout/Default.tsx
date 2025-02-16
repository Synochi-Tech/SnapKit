import { Outlet } from "react-router";
import Header from "./components/Header";

const DefaultLayout = () => {
  return (
    <div className="wrapper">
      <Header />
      <Outlet />
    </div>
  )
}

export default DefaultLayout;