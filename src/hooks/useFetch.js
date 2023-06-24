import { useEffect, useState } from "react";

export const useFetch = ({ urls }) => {
  const [fetchData, setFetchData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchedData = async (urls) => {
      let responseClone;
      const response = await fetch("https://dummyjson.com/products")
        .then((res) => {
          console.log(res);
          responseClone = res.clone();
          return res.json();
        })
        .then(function (data) {
          console.log(data);
          // Do something with data
        });
    };
    fetchedData();
  }, [urls]);
  useEffect(() => {
    // this will run after the 'users' has been changed
    console.log("Users", fetchData);
  }, [fetchData]);
  // ...
  console.log(fetchData);

  return { fetchData, loading };
};
