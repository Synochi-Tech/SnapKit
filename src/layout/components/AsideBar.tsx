import { NavLink } from "react-router";
import Header from "./Header";

interface IAsideBarProps {}
const AsideBar: React.FC<IAsideBarProps> = () => {
  return (
    <section className="sidebar border-r-2 border-r-gray-500/20 drop-shadow-2xl mr-4 w-1/6 sticky top-0 h-screen py-5 flex flex-col">
      <Header />
      <nav className="flex-1">
        <div className="nav-item">
          <NavLink to={'/button'}>Button</NavLink>
        </div>
      </nav>
      <footer>
        <button>Dark</button>
      </footer>
    </section>
  );
};

export default AsideBar;
