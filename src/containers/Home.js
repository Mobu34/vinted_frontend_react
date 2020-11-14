import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import MainHome from "../components/MainHome";

const Home = ({ search }) => {
  const [offers, setOffers] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [pages, setPages] = useState([]);

  const { page, order, min, max } = useParams();
  let slicedPage;
  let sortBy;
  let priceMin;
  let priceMax;
  if (page) {
    const split = page.split("_");
    slicedPage = split[1];
  }
  if (order) {
    const split = order.split("_");
    sortBy = split[1];
  }
  if (min) {
    const split = min.split("_");
    priceMin = split[1];
  }
  if (max) {
    const split = max.split("_");
    priceMax = split[1];
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        if (!page && !order) {
          response = await axios.get(
            `https://vinted-react.herokuapp.com/offers?page=1&title=${search}`
          );
        } else {
          response = await axios.get(
            `https://vinted-react.herokuapp.com/offers?page=${slicedPage}&title=${search}&sort=${
              sortBy || ""
            }&priceMin=${priceMin || "0"}&priceMax=${priceMax || 10000}`
          );
        }

        setOffers(response.data);
        let i = 1;
        let j = 1;
        const newPages = [];
        while (i <= response.data.count) {
          newPages.push(j);
          i = i + 5;
          j++;
        }
        setPages(newPages);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [setOffers, setIsLoading, page, order, min, max, search]);

  return (
    <div className="home-page">
      <MainHome
        isLoading={isLoading}
        offers={offers}
        pages={pages}
        slicedPage={slicedPage}
      />
    </div>
  );
};

export default Home;
