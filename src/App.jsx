import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import IndexPage from "./containers/IndexPage";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<IndexPage />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <div>
      <Sidebar>
        <Outlet />
      </Sidebar>
    </div>
  );
}

export default App;
