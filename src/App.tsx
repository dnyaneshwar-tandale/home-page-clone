import React from "react";
import "./App.scss";
import Layout from "./component/loyout/layout";
import { BrowserRouter } from "react-router-dom";
import PageRoutes from "./pages/page-routes/page-routes";
import Footer from "./component/footer/footer";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        {" "}
        <Layout>
          <div>
            <header className="App-header">
              <PageRoutes />
            </header>
            <Footer/>
          </div>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
