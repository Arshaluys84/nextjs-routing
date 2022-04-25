import MainHeader from "./MainHeader";

const Layout = ({ children }) => {
  return (
    <>
      <MainHeader />

      <main>{children}</main>
    </>
  );
};

export default Layout;
