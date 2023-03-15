import React from "react";
import ProductPage from "./app/ProductPage";
import Container from "./components/Layout/Container";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <ProductPage />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
