import Menu from "../navbar/menu";
import Header from "../content/header";
import Body from "../content/body";
import { Link } from "react-router-dom";

function Layout({ title, children }) {
  return (
    <>
      <div className="fixed top-[2px] z-99 right-[10px]">
        <Link to="/">
          <img className="w-[40px] rotate-12" src="/ui/shoe.png" />
        </Link>
      </div>
      <Menu />
      <div className="main">
        <div className="main_container ">
          <Header title={title} />
          <Body>{children}</Body>
        </div>
      </div>
    </>
  );
}

export default Layout;
