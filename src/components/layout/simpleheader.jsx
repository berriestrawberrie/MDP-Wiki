import Menu from "../navbar/menu";
import Header from "../content/header";

function Layout({ title }) {
  return (
    <>
      <Menu />
      <div className="main">
        <div className="main_container ">
          <Header title={title} />
        </div>
      </div>
    </>
  );
}

export default Layout;
