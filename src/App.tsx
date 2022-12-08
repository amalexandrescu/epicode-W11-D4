import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainPage from "./components/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticleDetails from "./components/ArticleDetails";
import { Container, Row } from "react-bootstrap";
import MyNavbar from "./components/MyNavbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App bg-secondary">
        <MyNavbar />
        <Container>
          <Row className="justify-content-center my-3">
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/details/:id" element={<ArticleDetails />} />
            </Routes>
          </Row>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
