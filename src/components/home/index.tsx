import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getData } from "../../redux/actions/getDataActions";

const Home = () => {

  const dispatch = useDispatch();
  
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(getData(response));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Hello Home</h1>
    </div>
  );
};

export default Home;
