import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const NavBar = React.lazy(() => import("../../component/nav-bar/nav-bar"));
const HomePage = React.lazy(() => import("../home/home"));
const About = React.lazy(() => import("../about/about"));
const Pricing = React.lazy(() => import("../pricing/pricing"));
const Downloads = React.lazy(() => import("../downloads/downloads"));
const Company = React.lazy(() => import("../company/company"));
const Supports = React.lazy(() => import("../supports/supports"));

function PageRoutes() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <React.Suspense fallback={<h1>Loading All Routes</h1>}>
      <Routes>
        <Route
          path={"/"}
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <HomePage />
             </Suspense>
          }
        />
        <Route
          path={"/feature"}
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <About />
            </Suspense>
          }
        />
        <Route
          path={"/pricing"}
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Pricing />
            </Suspense>
          }
        />
        <Route
          path={"/download"}
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Downloads />
            </Suspense>
          }
        />
        <Route
          path={"/company"}
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Company />
            </Suspense>
          }
        />
        <Route
          path={"/support"}
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Supports />
            </Suspense>
          }
        />
        <Route path="*" element={<div>Page Not fount</div>} />
      </Routes>
      </React.Suspense>
    </div>
  );
}

export default PageRoutes;
