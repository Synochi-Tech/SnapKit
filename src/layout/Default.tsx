import { Outlet } from "react-router";
import Container from "../shared/components/Container";
import AsideBar from "./components/AsideBar";

const DefaultLayout = () => {
  return (
    <div className="wrapper dark:bg-gray-900 dark:text-white">
      <main className="h-screen">
        <Container
          id="sidebar"
          className="flex gap-2"
          mode="stretch"
        >
          <AsideBar />
          <section className="flex-1">
            <Outlet />
          </section>
        </Container>
      </main>
    </div>
  );
};

export default DefaultLayout;
