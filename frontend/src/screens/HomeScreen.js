import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
//import products from "../products";
import Product from "../components/Product";

const HomeScreen = () => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProduct(data);
    };
    fetchProducts();
  }, []);
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
      {/* Some of the difference between map() and forEach() methods are listed
      below − The map() method returns a new array, whereas the forEach() method
      does not return a new array. The map() method is used to transform the
      elements of an array, whereas the forEach() method is used to loop through
      the elements of an array. The map() method can be used with other array
      methods, such as the filter() method, whereas the forEach() method cannot
      be used with other array methods */}
      {/* <Row>
        {products.forEach((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row> */}
    </>
  );
};

export default HomeScreen;
