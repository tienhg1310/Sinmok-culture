import React, { useEffect, useMemo } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Footer from "../Components/Common/Footer";
import Header from "../Components/Common/Header/Header";
import { RoutesString } from "../Components/Modules/routesString";
import pages from "./pages";

const RenderHeader = (isHeader: boolean) => {
  if (!isHeader) {
    return <Header />;
  }
};

const RenderFooter = (isFooter: boolean) => {
  if (!isFooter) {
    return <Footer />;
  }
};

function Router() {
  const location = useLocation();
  const pathname = location.pathname;

  let navigate = useNavigate();

  useEffect(() => {
    //HANDLE AGAIN IF ADD PAGE NEW
    const pageNotFound = pages.find((e) => e.path === pathname);
    if (!pageNotFound) {
      return navigate(RoutesString.PageNotFound);
    }
  }, [pathname, navigate]);

  const isHistoryCheck = useMemo(() => {
    if (pathname.toLowerCase() !== RoutesString.PageNotFound) {
      return false;
    } else {
      return true;
    }
  }, [pathname]);

  return (
    <>
      {RenderHeader(isHistoryCheck)}
      <Routes>
        {pages.map((item) => {
          return (
            <Route
              key={item.path}
              path={item.path}
              element={<item.component />}
            />
          );
        })}
      </Routes>
      {RenderFooter(isHistoryCheck)}
    </>
  );
}

export default Router;
