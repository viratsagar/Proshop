import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import Footer from "./components/Footer";
const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" Component={HomeScreen} exact></Route>
            <Route path="/product/:id" Component={ProductScreen}></Route>
            {/* <Route path="/" element={<HomeScreen />} exact></Route>

            <Route path="/product/:id" element={<ProductScreen />}></Route> */}
          </Routes>
          {/* <HomeScreen /> */}
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
