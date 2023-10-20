import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../TopBar/TopBar";

const Layout = () => {
  return (
    <>
      <AppBar />
      <main>
        <Suspense fallback={<div>Loading, please wait...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
