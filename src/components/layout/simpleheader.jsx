import Menu from "../navbar/menu";
import Header from "../content/header";
import Body from "../content/body";

function Layout({ title, children }) {
  return (
    <>
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
