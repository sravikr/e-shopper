import React from "react";
import { useFetch } from "../hooks/useFetch";
import { useLocation } from "react-router-dom";

export const Search = ({ props }) => {
  console.log("props", props);
  const location = useLocation().search;
  const searchedText = new URLSearchParams(location).get("q");
  console.log(searchedText);
  const { fetchData } = useFetch(
    `https://dummyjson.com/products/search?q=${
      searchedText ? searchedText : ""
    }`
  );

  console.log(fetchData && fetchData.products.title);

  return <div>Search</div>;
};
