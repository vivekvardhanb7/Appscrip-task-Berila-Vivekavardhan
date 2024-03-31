import { useState } from "react";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import products from "./db/data";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import "./index.css";
import Header from "./Header/Header";
import Text from "./Text/Text";
import Footer from "./Footer";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [query, setQuery] = useState("");

  const toggleSidebarVisibility = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    if (query) {
      filteredProducts = filteredItems;
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Header />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Text />
      <Recommended toggleSidebarVisibility={toggleSidebarVisibility} handleClick={handleClick} />
      {isSidebarVisible && <Sidebar handleChange={handleInputChange} />}
      <Products result={result} />
      <Footer />
    </>
  );
}

export default App;
