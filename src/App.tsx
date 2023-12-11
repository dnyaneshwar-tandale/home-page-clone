import React from "react";
import "./App.scss";
import Layout from "./component/loyout/layout";
import { BrowserRouter } from "react-router-dom";
import PageRoutes from "./pages/page-routes/page-routes";

function App() {
  return (
    <div>
      <BrowserRouter>
        {" "}
        <Layout>
          <div>
            <header className="App-header">
              <PageRoutes />
            </header>
          </div>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
